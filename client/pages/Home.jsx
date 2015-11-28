let test = new ReactiveDict();
test.set('audioPlayerData', {});

Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      audioPlayerData: test.get('audioPlayerData')
    }
  },

  doit() {
    test.set('audioPlayerData', {
      command: 'play',
      url: 'http://...' // put your own mp3 on a server
    })
  },

  render() {
    return <div>
      <AudioPlayer audioPlayerData={this.data.audioPlayerData} />
      <button onClick={this.doit}>Play (fails on iOS)</button>
    </div>
  }
});
