import React, { useContext } from 'react';
import { Divider, Header, Icon, SemanticICONS, Step } from 'semantic-ui-react';
import firebase from 'firebase/compat/app';

import { NewRoomButton } from '../TopBar';
import styles from './Home.module.css';
import { MetadataContext } from '../../MetadataContext';
import { BoltzyLogo } from '../Logo/BoltzyLogo';

export const Home = () => {
  const { user } = useContext(MetadataContext);
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Hero
          heroText={'Watch videos together with friends anywhere.'}
          subText={'Including Netflix sync! No registration or download required.'}
          action={
            <div className={styles.heroAction}>
              <NewRoomButton size="huge" className={styles.heroButton} />
            </div>
          }
          image={'/boltzy-logo-large.svg'}
          logo={<BoltzyLogo size={80} />}
        />
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <Icon name="cogs" className={styles.sectionIcon} />
            Premium Features
          </div>
          <div className={styles.featureSection}>
            <Feature
              icon="sync"
              title="Synchronized Play"
              text="Starts, stops, and seeks are synchronized to everyone, so take those restroom and snack breaks without worrying about falling behind."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="conversation"
              title="Real-time Chat"
              text="Chat with others in your room. React with emojis and GIFs to share the moment together."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="list"
              title="Smart Playlists"
              text="Set up a whole list of videos to play next, and rearrange to your heart's content."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="video"
              title="Video Chat"
              text="Jump into video chat if you'd rather be face-to-face. See each other's reactions in real-time."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
          </div>
        </div>
        <Hero
          heroText={'React to moments together.'}
          subText={"Find moments of shared joy even when you're apart."}
          image={'/boltzy-logo-large.svg'}
          color="green"
        />
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <Icon name="film" className={styles.sectionIcon} />
            Watch Anything Together
          </div>
          <div className={styles.featureSection}>
            <Feature
              icon="desktop"
              title={`VBrowser`}
              text="Watch together on a virtual browser running in the cloud."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="youtube"
              title={`YouTube`}
              text="Watch videos together from YouTube."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="video"
              title={`Netflix`}
              text="Sync Netflix with friends using Rave-style synchronization."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="slideshare"
              title={`Screensharing`}
              text="Share a browser tab or your desktop."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="file"
              title={`File`}
              text="Upload and stream your own file."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
            <Feature
              icon="linkify"
              title={`URL`}
              text="Paste in a video URL for everyone to watch from."
              className={`${styles.featureCard} ${styles.fadeInUp}`}
            />
          </div>
        </div>
        <Hero
          heroText={'Theater mode.'}
          subText={
            'Bring video and chat front-and-center for minimal distractions.'
          }
          image={'/boltzy-logo-large.svg'}
        />
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <Icon name="rocket" className={styles.sectionIcon} />
            Get Started in 4 Simple Steps
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.stepsGrid}>
              <div className={`${styles.stepCard} ${styles.fadeInUp}`}>
                <div className={styles.stepIcon}>
                  <Icon name="certificate" />
                </div>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepTitle}>Make a room</div>
                <div className={styles.stepDescription}>Create your private viewing space</div>
              </div>
              
              <div className={`${styles.stepCard} ${styles.fadeInUp}`}>
                <div className={styles.stepIcon}>
                  <Icon name="group" />
                </div>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepTitle}>Share with friends</div>
                <div className={styles.stepDescription}>Send the link to your friends</div>
              </div>
              
              <div className={`${styles.stepCard} ${styles.fadeInUp}`}>
                <div className={styles.stepIcon}>
                  <Icon name="film" />
                </div>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepTitle}>Pick content</div>
                <div className={styles.stepDescription}>Choose what to watch together</div>
              </div>
              
              <div className={`${styles.stepCard} ${styles.fadeInUp}`}>
                <div className={styles.stepIcon}>
                  <Icon name="thumbs up outline" />
                </div>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepTitle}>Enjoy together!</div>
                <div className={styles.stepDescription}>Start watching and chatting</div>
              </div>
            </div>
            <div className={styles.ctaContainer}>
              <NewRoomButton size="huge" className={styles.heroButton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({
  icon,
  text,
  title,
  className,
}: {
  icon: string;
  text: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className={className || styles.featureCard}>
      <Icon fitted size="huge" name={icon as SemanticICONS} className={styles.featureIcon} />
      <h4 className={styles.featureTitle}>{title}</h4>
      <div className={styles.featureText}>{text}</div>
    </div>
  );
};

export const Hero = ({
  heroText,
  subText,
  subText2,
  action,
  image,
  color,
  logo,
}: {
  heroText?: string;
  subText?: string;
  subText2?: string;
  action?: React.ReactNode;
  image?: string;
  color?: string;
  logo?: React.ReactNode;
}) => {
  return (
    <div className={`${styles.hero} ${color === 'green' ? styles.green : ''}`}>
      <div className={styles.heroInner}>
        <div style={{ padding: '30px', flex: '1 1 0' }}>
          {logo && (
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              {logo}
            </div>
          )}
          <div className={styles.heroText}>{heroText}</div>
          <div className={styles.subText}>{subText}</div>
          <div className={styles.subText}>{subText2}</div>
          {action}
        </div>
        <div
          style={{
            flex: '1 1 0',
          }}
        >
          <img
            alt="hero"
            style={{ width: '100%', borderRadius: '10px' }}
            src={image}
          />
        </div>
      </div>
    </div>
  );
};
