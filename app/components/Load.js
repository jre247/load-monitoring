import React from 'react';
import LoadStore from '../stores/LoadStore';
import LoadActions from '../actions/LoadActions';

class Load extends React.Component {
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
     
     setInterval(function(){
       LoadActions.getLoad();
     }, 2000);  
  }

  componentWillUnmount() {
    LoadStore.unlisten(this.onChange);
  }

  render() {
    let loadHistory = this.state.loadHistory.map((load, index) => {
      return (
        <div key={index} className="row">
          <div className="col-md-4">{load.time}</div>
          <div className="col-md-4">{load.uptime}</div>
        </div>
      );
    });
    
    return (
      <div className="Load-content">
          <h3>Load Monitor</h3>
          
          <div>
            {loadHistory}
          </div>
      </div>
    );
  }
}

export default Load;
