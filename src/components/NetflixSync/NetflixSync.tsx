import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Header,
  Segment,
  Progress,
  Icon,
  Message,
  List,
  Divider,
  Form,
  Input,
  Label
} from 'semantic-ui-react';
import { NetflixSyncService, NetflixSyncState, NetflixParticipant } from '../../utils/netflixSync';
import styles from './NetflixSync.module.css';

interface NetflixSyncProps {
  socket: any;
  roomId: string;
  isOpen: boolean;
  onClose: () => void;
  onStartSession: (videoUrl: string, title: string) => void;
}

export const NetflixSync: React.FC<NetflixSyncProps> = ({
  socket,
  roomId,
  isOpen,
  onClose,
  onStartSession
}) => {
  const [netflixService] = useState(() => new NetflixSyncService(socket, roomId));
  const [syncState, setSyncState] = useState<NetflixSyncState>(netflixService.getState());
  const [participants, setParticipants] = useState<NetflixParticipant[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    netflixService.onStateChange(setSyncState);
    netflixService.onParticipantUpdate(setParticipants);
    
    return () => {
      // Cleanup if needed
    };
  }, [netflixService]);

  const handleStartSession = () => {
    if (!videoUrl.trim()) return;
    
    const title = videoTitle.trim() || 'Netflix Content';
    netflixService.startNetflixSession(videoUrl, title);
    onStartSession(videoUrl, title);
    setShowInstructions(true);
  };

  const handleStopSession = () => {
    netflixService.stopNetflixSession();
    setShowInstructions(false);
    setIsReady(false);
  };

  const handleMarkReady = () => {
    netflixService.markAsReady();
    setIsReady(true);
  };

  const handleSyncPlay = () => {
    netflixService.syncPlay();
  };

  const handleSyncPause = () => {
    netflixService.syncPause();
  };

  const handleSyncSeek = (seconds: number) => {
    netflixService.syncSeek(seconds);
  };

  const handleChangeVideo = () => {
    if (!videoUrl.trim()) return;
    
    const title = videoTitle.trim() || 'Netflix Content';
    netflixService.changeVideo(videoUrl, title);
    setShowInstructions(true);
    setIsReady(false);
  };

  const isAllReady = syncState.participantsReady === syncState.totalParticipants && syncState.totalParticipants > 0;
  const readyPercentage = syncState.totalParticipants > 0 
    ? (syncState.participantsReady / syncState.totalParticipants) * 100 
    : 0;

  return (
    <Modal open={isOpen} onClose={onClose} size="large" className={styles.netflixModal}>
      <Header>
        <Icon name="video" />
        Netflix Watch Party
      </Header>
      
      <Modal.Content>
        {!syncState.isNetflixMode ? (
          <div className={styles.setupSection}>
            <Message info>
              <Message.Header>🎬 How to Watch Netflix Together</Message.Header>
              <Message.List>
                <Message.Item><strong>Step 1:</strong> Everyone opens Netflix in their own browser tab</Message.Item>
                <Message.Item><strong>Step 2:</strong> Navigate to the same movie/show we're watching</Message.Item>
                <Message.Item><strong>Step 3:</strong> Click "Ready" when you're at the right content</Message.Item>
                <Message.Item><strong>Step 4:</strong> Use our sync controls to stay synchronized</Message.Item>
              </Message.List>
            </Message>

            <Form>
              <Form.Field>
                <Label>🎬 What are we watching?</Label>
                <Input
                  placeholder="Enter the Netflix URL or just the movie/show name"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
                <small style={{color: '#999', marginTop: '5px', display: 'block'}}>
                  💡 Tip: You can just type the movie name (e.g., "Stranger Things") or paste the full Netflix URL
                </small>
              </Form.Field>
              
              <Form.Field>
                <Label>📺 Video Title (Optional)</Label>
                <Input
                  placeholder="e.g., Stranger Things Season 4"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </Form.Field>
            </Form>

            <div className={styles.buttonGroup}>
              <Button 
                primary 
                onClick={handleStartSession}
                disabled={!videoUrl.trim()}
                icon="play"
                content="🎬 Start Netflix Watch Party"
                size="large"
              />
            </div>
          </div>
        ) : (
          <div className={styles.sessionSection}>
            <Segment>
              <Header as="h3">
                <Icon name="video" />
                {syncState.currentVideo ? 'Netflix Session Active' : 'Setting up...'}
              </Header>
              
              {showInstructions && (
                <Message warning>
                  <Message.Header>Instructions for Participants</Message.Header>
                  <List ordered>
                    <List.Item>Open Netflix in a new tab</List.Item>
                    <List.Item>Navigate to the same content we're watching</List.Item>
                    <List.Item>Click "Ready" when you're at the right video</List.Item>
                    <List.Item>Use our sync controls to stay synchronized</List.Item>
                  </List>
                </Message>
              )}

              <div className={styles.participantsSection}>
                <Header as="h4">Participants ({syncState.participantsReady}/{syncState.totalParticipants})</Header>
                <Progress 
                  percent={readyPercentage} 
                  success={isAllReady}
                  label={isAllReady ? 'All Ready!' : 'Waiting for participants...'}
                />
                
                <List>
                  {participants.map((participant) => (
                    <List.Item key={participant.id}>
                      <Icon 
                        name={participant.isReady ? "check circle" : "clock"} 
                        color={participant.isReady ? "green" : "orange"}
                      />
                      {participant.name} {participant.isReady ? '(Ready)' : '(Not Ready)'}
                    </List.Item>
                  ))}
                </List>
              </div>

              <Divider />

              <div className={styles.controlsSection}>
                <Header as="h4">Sync Controls</Header>
                <div className={styles.controlButtons}>
                  <Button 
                    icon="play" 
                    content="Play All" 
                    onClick={handleSyncPlay}
                    disabled={!isAllReady}
                    color="green"
                  />
                  <Button 
                    icon="pause" 
                    content="Pause All" 
                    onClick={handleSyncPause}
                    disabled={!isAllReady}
                    color="orange"
                  />
                  <Button 
                    icon="backward" 
                    content="-10s" 
                    onClick={() => handleSyncSeek(-10)}
                    disabled={!isAllReady}
                  />
                  <Button 
                    icon="forward" 
                    content="+10s" 
                    onClick={() => handleSyncSeek(10)}
                    disabled={!isAllReady}
                  />
                </div>
              </div>

              <Divider />

              <div className={styles.actionsSection}>
                <Button 
                  positive 
                  icon="check" 
                  content={isReady ? "Ready!" : "Mark as Ready"}
                  onClick={handleMarkReady}
                  disabled={isReady}
                />
                <Button 
                  icon="edit" 
                  content="Change Video"
                  onClick={() => setShowInstructions(false)}
                />
                <Button 
                  negative 
                  icon="stop" 
                  content="Stop Session"
                  onClick={handleStopSession}
                />
              </div>
            </Segment>
          </div>
        )}
      </Modal.Content>
    </Modal>
  );
};
