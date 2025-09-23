import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import styles from './NetflixSyncIndicator.module.css';

interface NetflixSyncIndicatorProps {
  isActive: boolean;
  participantsReady: number;
  totalParticipants: number;
  title?: string;
}

export const NetflixSyncIndicator: React.FC<NetflixSyncIndicatorProps> = ({
  isActive,
  participantsReady,
  totalParticipants,
  title
}) => {
  if (!isActive) return null;

  const isAllReady = participantsReady === totalParticipants && totalParticipants > 0;
  const readyPercentage = totalParticipants > 0 
    ? (participantsReady / totalParticipants) * 100 
    : 0;

  return (
    <div className={styles.netflixIndicator}>
      <Label color="red" size="large">
        <Icon name="video" />
        Netflix Sync
        {title && (
          <Label.Detail>{title}</Label.Detail>
        )}
      </Label>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div 
            className={`${styles.progressFill} ${isAllReady ? styles.allReady : ''}`}
            style={{ width: `${readyPercentage}%` }}
          />
        </div>
        <span className={styles.progressText}>
          {participantsReady}/{totalParticipants} ready
        </span>
      </div>
    </div>
  );
};
