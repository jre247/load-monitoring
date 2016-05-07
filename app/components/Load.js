import React from 'react';
import LoadStore from '../stores/loadStore';
import LoadActions from '../actions/loadActions';
import Chart from './chart';

class Load extends React.Component {
  constructor(props) {
    super(props);
    this.interval = 10000;
    this.state = LoadStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    //High load generated an alert - load = {value}, triggered at {time}
    
    var load = state.load;
    
    if(!this.state.history){
      this.state.history = [];
    }   
    this.state.history.push(load);
    
    this.setState({
      load: load,
      isInitialized: true,
      history: this.state.history
    });
  }
  
  componentDidMount() {
     LoadStore.listen(this.onChange);
     
     LoadActions.getLoad();
     
     setInterval(function(){
       LoadActions.getLoad();
     }, this.interval);  
  }

  componentWillUnmount() {
    LoadStore.unlisten(this.onChange);
  }

  render() {
    if(!this.state.isInitialized){
      return (
        <div className="spinner">
          <img src="/css/images/ajax-loader.gif"  />
        </div>
      );
    }
      
    var propsData = {
      data: this.state.history, 
      x: "time", 
      y: "uptime", 
      title: "Load",
      width: 1000
    };
    
    
    return (
      <div className="load-content container-fluid">
          <div className="form-group latest-load">
            <label className="col-sm-2 control-label">Uptime: </label>
            <div className="col-sm-4">
              <p>{this.state.load.uptime}</p>
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
