import React from 'react';
import LoadStore from '../stores/loadStore';
import LoadActions from '../actions/loadActions';
import Chart from './chart';

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
    if(this.state.loadHistory.length == 0)
      return null;
      
    let loadHistory = this.state.loadHistory.map((load, index) => {
      return (
        <div key={index} className="row">
          <div className="col-md-6">{load.time}</div>
          <div className="col-md-6">{load.uptime}</div>
        </div>
      );
    });
    
    var propsData = {data: this.state.loadHistory, x: "time", y: "uptime", title: "Load"};
    
    return (
      <div className="Load-content">
          <h3>Load Monitor</h3>
          
          <div className="row">      
            <div className="col-md-6">
              {loadHistory}
            </div>
            <div className="col-md-6">
              <Chart {...propsData}> </Chart>
            </div>
          </div>
      </div>
    );
  }
}

export default Load;
