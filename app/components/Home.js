import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
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
