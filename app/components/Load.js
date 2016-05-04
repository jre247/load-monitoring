import React from 'react';
import LoadStore from '../stores/LoadStore';
import LoadActions from '../actions/LoadActions';
import ReactDOM from 'react-dom';
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;


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
  
  renderLineChart() {
    var data = this.state.loadHistory;
    if(!data)
      return null;
    
    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "User sample",
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: 'uptime',
          name: 'uptime',
          color: '#ff7f0e'
        }
      ],
      // your x accessor
      x = function(d) {
        return d.index;
      }
      
    ReactDOM.render(
      <Chart
        title={"Taiwan refuse disposal"}
        width={width}
        height={height}
        margins= {margins}
        >
        <LineChart
          margins= {margins}
          title={"Taiwan refuse disposal"}
          data={data}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={"time"}
        />
      </Chart>
    , document.getElementById('line-chart')
    )
    
  }

  render() {
    this.renderLineChart();
    
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
          
          <div id="line-chart"> </div>
      </div>
    );
  }
}

export default Load;
