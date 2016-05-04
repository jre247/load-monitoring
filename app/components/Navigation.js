import React from 'react';
import {Link} from 'react-router';
import {_} from 'underscore';

class Navbar extends React.Component {
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
      <div>
        <div className='Navigation' role="navigation">
            <Link className="Navigation-link" to="/">Load</Link>
        </div>
      </div>
    );

  }
}

export default Navbar;
