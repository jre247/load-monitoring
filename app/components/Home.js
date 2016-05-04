import React from 'react';
import LoadStore from '../stores/LoadStore';
import LoadActions from '../actions/LoadActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = LoadStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }
  
  componentDidMount() {
     LoadStore.listen(this.onChange);
     LoadActions.getLoad();
  }

  componentWillUnmount() {
    LoadStore.unlisten(this.onChange);
  }

  render() {

    return (
      <div className="Home-content">
          <h3>Load Monitor</h3>
      </div>
    );
  }
}

export default Home;
