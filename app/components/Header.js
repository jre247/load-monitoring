import React from 'react';
import {Link} from 'react-router';
import Navigation from './navigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="header-container">
        <div>
          <Navigation className="header-nav" history={this.props.history} />
        </div>
        <div className="header-brand" >
          <span className="header-brandTxt">Load Monitor</span>
        </div>

      </div>
    );
  }
}

export default Header;
