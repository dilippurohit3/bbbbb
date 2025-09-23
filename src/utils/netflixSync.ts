export interface NetflixSyncState {
  isNetflixMode: boolean;
  participantsReady: number;
  totalParticipants: number;
  currentVideo: string | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

export interface NetflixParticipant {
  id: string;
  name: string;
  isReady: boolean;
  lastSeen: number;
}

export class NetflixSyncService {
  private participants: Map<string, NetflixParticipant> = new Map();
  private syncState: NetflixSyncState = {
    isNetflixMode: false,
    participantsReady: 0,
    totalParticipants: 0,
    currentVideo: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0
  };

  private callbacks: {
    onStateChange?: (state: NetflixSyncState) => void;
    onParticipantUpdate?: (participants: NetflixParticipant[]) => void;
  } = {};

  constructor(
    private socket: any,
    private roomId: string
  ) {
    this.setupSocketListeners();
  }

  private setupSocketListeners() {
    this.socket.on('netflix:participantReady', (data: { participantId: string }) => {
      this.handleParticipantReady(data.participantId);
    });

    this.socket.on('netflix:participantLeft', (data: { participantId: string }) => {
      this.handleParticipantLeft(data.participantId);
    });

    this.socket.on('netflix:syncPlay', () => {
      this.handleSyncPlay();
    });

    this.socket.on('netflix:syncPause', () => {
      this.handleSyncPause();
    });

    this.socket.on('netflix:syncSeek', (data: { timestamp: number }) => {
      this.handleSyncSeek(data.timestamp);
    });

    this.socket.on('netflix:videoChanged', (data: { videoUrl: string, title: string }) => {
      this.handleVideoChanged(data.videoUrl, data.title);
    });
  }

  public startNetflixSession(videoUrl: string, title: string) {
    this.syncState.isNetflixMode = true;
    this.syncState.currentVideo = videoUrl;
    this.syncState.participantsReady = 0;
    
    // Broadcast to all participants
    this.socket.emit('netflix:startSession', {
      videoUrl,
      title,
      instructions: this.getNetflixInstructions()
    });

    this.updateState();
  }

  public stopNetflixSession() {
    this.syncState.isNetflixMode = false;
    this.syncState.currentVideo = null;
    this.syncState.participantsReady = 0;
    
    this.socket.emit('netflix:stopSession');
    this.updateState();
  }

  public markAsReady() {
    this.socket.emit('netflix:markReady');
  }

  public syncPlay() {
    if (!this.syncState.isNetflixMode) return;
    
    this.syncState.isPlaying = true;
    this.socket.emit('netflix:syncPlay');
    this.updateState();
  }

  public syncPause() {
    if (!this.syncState.isNetflixMode) return;
    
    this.syncState.isPlaying = false;
    this.socket.emit('netflix:syncPause');
    this.updateState();
  }

  public syncSeek(timestamp: number) {
    if (!this.syncState.isNetflixMode) return;
    
    this.syncState.currentTime = timestamp;
    this.socket.emit('netflix:syncSeek', { timestamp });
    this.updateState();
  }

  public changeVideo(videoUrl: string, title: string) {
    if (!this.syncState.isNetflixMode) return;
    
    this.syncState.currentVideo = videoUrl;
    this.syncState.participantsReady = 0;
    
    this.socket.emit('netflix:changeVideo', { videoUrl, title });
    this.updateState();
  }

  private handleParticipantReady(participantId: string) {
    const participant = this.participants.get(participantId);
    if (participant) {
      participant.isReady = true;
      participant.lastSeen = Date.now();
      this.syncState.participantsReady++;
      this.updateState();
      this.updateParticipants();
    }
  }

  private handleParticipantLeft(participantId: string) {
    const participant = this.participants.get(participantId);
    if (participant) {
      this.participants.delete(participantId);
      this.syncState.totalParticipants--;
      if (participant.isReady) {
        this.syncState.participantsReady--;
      }
      this.updateState();
      this.updateParticipants();
    }
  }

  private handleSyncPlay() {
    this.syncState.isPlaying = true;
    this.updateState();
  }

  private handleSyncPause() {
    this.syncState.isPlaying = false;
    this.updateState();
  }

  private handleSyncSeek(timestamp: number) {
    this.syncState.currentTime = timestamp;
    this.updateState();
  }

  private handleVideoChanged(videoUrl: string, title: string) {
    this.syncState.currentVideo = videoUrl;
    this.syncState.participantsReady = 0;
    this.updateState();
  }

  private updateState() {
    this.callbacks.onStateChange?.(this.syncState);
  }

  private updateParticipants() {
    const participantsArray = Array.from(this.participants.values());
    this.callbacks.onParticipantUpdate?.(participantsArray);
  }

  public onStateChange(callback: (state: NetflixSyncState) => void) {
    this.callbacks.onStateChange = callback;
  }

  public onParticipantUpdate(callback: (participants: NetflixParticipant[]) => void) {
    this.callbacks.onParticipantUpdate = callback;
  }

  public getState(): NetflixSyncState {
    return { ...this.syncState };
  }

  public getParticipants(): NetflixParticipant[] {
    return Array.from(this.participants.values());
  }

  private getNetflixInstructions(): string[] {
    return [
      "1. Open Netflix in a new tab",
      "2. Navigate to the same content we're watching",
      "3. Click 'Ready' when you're at the right video",
      "4. Use our sync controls to stay synchronized"
    ];
  }

  public extractNetflixContentId(url: string): string | null {
    // Extract Netflix content ID from various URL formats
    const patterns = [
      /netflix\.com\/watch\/(\d+)/,
      /netflix\.com\/title\/(\d+)/,
      /netflix\.com\/browse\/.*\/(\d+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return null;
  }

  public generateNetflixUrl(contentId: string): string {
    return `https://netflix.com/watch/${contentId}`;
  }
}
