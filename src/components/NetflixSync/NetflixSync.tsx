import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Header,
  Content,
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
      
      <Content>
        {!syncState.isNetflixMode ? (
          <div className={styles.setupSection}>
            <Message info>
              <Message.Header>How Netflix Sync Works</Message.Header>
              <Message.List>
                <Message.Item>Each person needs their own Netflix account</Message.Item>
                <Message.Item>We'll sync playback controls, not stream video</Message.Item>
                <Message.Item>Everyone watches on their own Netflix tab</Message.Item>
                <Message.Item>Use our controls to stay synchronized</Message.Item>
              </Message.List>
            </Message>

            <Form>
              <Form.Field>
                <Label>Netflix Video URL</Label>
                <Input
                  placeholder="https://netflix.com/watch/12345"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
              </Form.Field>
              
              <Form.Field>
                <Label>Video Title (Optional)</Label>
                <Input
                  placeholder="Movie or Show Title"
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
                content="Start Netflix Session"
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
      </Content>
    </Modal>
  );
};
