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
    if(this.state.loadHistory.length == 0){
      return (
        <div className="spinner">
          <img src="/css/images/ajax-loader.gif"  />
        </div>
      );
    }
      
    var propsData = {
      data: this.state.loadHistory, 
      x: "time", 
      y: "uptime", 
      title: "Load",
      width: 1000
    };
    
    var loadHistoryCount = this.state.loadHistory.length;
    var latestLoad = this.state.loadHistory[loadHistoryCount - 1];
    
    return (
      <div className="load-content">
          <div className="form-group latest-load">
            <label className="col-sm-2 control-label">Latest Load: </label>
            <div className="col-sm-10">
              <p>{latestLoad.uptime}</p>
            </div>
          </div>
          
          <div className="row">                
            <div className="col-md-12">
              <Chart {...propsData}> </Chart>
            </div>
          </div>
      </div>
    );
  }
}

export default Load;
