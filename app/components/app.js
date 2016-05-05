import React from 'react';
import Footer from './footer';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <div className="App-container">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
