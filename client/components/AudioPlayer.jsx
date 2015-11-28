AudioPlayer = React.createClass({
  propTypes: {
    audioPlayerData: React.PropTypes.object.isRequired
  },

  getDefaultProps() {
    return {
      track: {}
    }
  },

  audioEvents: {
    loadstart({src}) {
      if (/\.mp3$/.test(src)) {
        console.log('load start');
        //Dispatcher.dispatch('USER_STARTED_PLAYBACK');
      }
    },

    playing() {
    },

    pause() {
    },

    ended() {
    },

    error(event) {
      console.dir(event);
    },

    timeupdate() {
    },

    stalled() {
      console.warn('stalled');
    },

    canplay() {
      console.log('can play');
    }
  },

  componentDidMount() {
    const audio = this.refs.audio;

    // Set up events
    _.each(this.audioEvents, (callback, key) => {
      audio.addEventListener(key, callback.bind(this, audio));
    });
  },

  componentWillReceiveProps(newProps) {
    console.log('got new props:', newProps);
    const audio = this.refs.audio;
    const {command, url, seekTo} = newProps.audioPlayerData;

    switch (command) {
      case 'play':
        if (audio.src !== url) {
          // Doesn't match the URL we're currently streaming
          audio.pause();
          audio.src = url;
          audio.play();
        } else {
          // This track is being played after having been paused
          audio.play();
        }

        break;

      case 'pause':
        audio.pause();
        break;

      case 'stop':
        audio.pause();
        audio.src = '';
        break;

      case 'seek':
        audio.currentTime = seekTo;
        break;
    }
  },

  render() {
    return <div>
      <audio controls ref="audio" src="" />
    </div>
  }
});
