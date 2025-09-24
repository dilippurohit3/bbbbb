import { MediaPlayerClass } from 'dashjs';
import { Player } from './Player';

export class YouTube implements Player {
  boltzyYTPlayer: YT.Player | null;
  constructor(boltzyYTPlayer: YT.Player | null) {
    this.boltzyYTPlayer = boltzyYTPlayer;
  }
  clearDashState = () => {};
  setDashState = (player: MediaPlayerClass) => {};

  getCurrentTime = () => {
    return this.boltzyYTPlayer?.getCurrentTime() ?? 0;
  };

  getDuration = () => {
    return this.boltzyYTPlayer?.getDuration() ?? 0;
  };

  isMuted = () => {
    return this.boltzyYTPlayer?.isMuted() ?? false;
  };

  isSubtitled = (): boolean => {
    // This actually isn't accurate after subtitles have been toggled off because track doesn't update
    // try {
    //   const current = this.boltzyYTPlayer?.getOption('captions', 'track');
    //   return Boolean(current && current.languageCode);
    // } catch (e) {
    //   console.warn(e);
    //   return false;
    // }
    return false;
  };

  getPlaybackRate = (): number => {
    return this.boltzyYTPlayer?.getPlaybackRate() ?? 1;
  };

  setPlaybackRate = (rate: number) => {
    this.boltzyYTPlayer?.setPlaybackRate(rate);
  };

  setSrcAndTime = async (src: string, time: number) => {
    let url = new window.URL(src);
    // Standard link https://www.youtube.com/watch?v=ID
    let videoId = new URLSearchParams(url.search).get('v');
    // Link shortener https://youtu.be/ID
    let altVideoId = src.split('/').slice(-1)[0].split('?')[0];
    this.boltzyYTPlayer?.cueVideoById(videoId || altVideoId, time);
    // this.boltzyYTPlayer?.cuePlaylist({listType: 'playlist', list: 'OLAK5uy_mtoaOGQksRdPbwlNtQ9IiK67wir5QqyIc'});
  };

  playVideo = async () => {
    setTimeout(() => {
      console.log('play yt');
      this.boltzyYTPlayer?.playVideo();
    }, 200);
  };

  pauseVideo = () => {
    this.boltzyYTPlayer?.pauseVideo();
  };

  seekVideo = (time: number) => {
    this.boltzyYTPlayer?.seekTo(time, true);
  };

  shouldPlay = () => {
    return (
      this.boltzyYTPlayer?.getPlayerState() ===
        window.YT?.PlayerState.PAUSED ||
      this.getCurrentTime() === this.getDuration()
    );
  };

  setMute = (muted: boolean) => {
    if (muted) {
      this.boltzyYTPlayer?.mute();
    } else {
      this.boltzyYTPlayer?.unMute();
    }
  };

  setVolume = (volume: number) => {
    this.boltzyYTPlayer?.setVolume(volume * 100);
  };

  getVolume = (): number => {
    const volume = this.boltzyYTPlayer?.getVolume();
    return (volume ?? 0) / 100;
  };

  setSubtitleMode = (mode?: TextTrackMode, lang?: string) => {
    // Show the available options
    // console.log(this.boltzyYTPlayer?.getOptions('captions'));
    if (mode === 'showing') {
      console.log(lang);
      //@ts-ignore
      this.boltzyYTPlayer?.setOption('captions', 'reload', true);
      //@ts-ignore
      this.boltzyYTPlayer?.setOption('captions', 'track', {
        languageCode: lang ?? 'en',
      });
    }
    if (mode === 'hidden') {
      // BUG this doesn't actually set the value of track
      // so we can't determine if subtitles are on or off
      // need to provide separate menu options
      //@ts-ignore
      this.boltzyYTPlayer?.setOption('captions', 'track', {});
    }
  };

  getSubtitleMode = () => {
    return 'hidden' as TextTrackMode;
  };

  isReady = () => {
    return Boolean(this.boltzyYTPlayer);
  };

  stopVideo = () => {
    this.boltzyYTPlayer?.stopVideo();
  };

  clearState = () => {
    return;
  };

  loadSubtitles = async (src: string) => {
    return;
  };

  syncSubtitles = (sharerTime: number) => {
    return;
  };

  getTimeRanges = (): { start: number; end: number }[] => {
    return [
      {
        start: 0,
        end:
          (this.boltzyYTPlayer?.getVideoLoadedFraction() ?? 0) *
          this.getDuration(),
      },
    ];
  };

  setLoop = (loop: boolean): void => {
    this.boltzyYTPlayer?.setLoop(loop);
  };

  getVideoEl = (): HTMLMediaElement => {
    return document.getElementById('leftYt') as HTMLMediaElement;
  };
}
