import React from 'react';
import AppSettingStore from '../stores/AppSettingStore';
import AppSettingActions from '../actions/AppSettingActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppSettingStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  //this method will only get called when the first page route is loaded. Subsequent page route changes will
  //fire componentWillReceiveProps
  componentDidMount() {
    AppSettingStore.listen(this.onChange);
    AppSettingActions.getAppSettings();
  }

  componentWillUnmount() {
    AppSettingStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var hashtag = this.state.appSettingsDictionary["Wedding Hashtag"];

    return (
      <div className="Home-content">
          <h3>Middletown, CT</h3>

          <div className="wedding-hashtag">
            {hashtag}
          </div>
      </div>
    );
  }
}

export default Home;
