import React from 'react';
import ReactDOM from 'react-dom';
var D3Chart = require('react-d3-core').Chart;
var D3LineChart = require('react-d3-basic').LineChart;
import Utilities from '../utilities';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderLineChart();
  }
  
  componentWillReceiveProps(){
    this.renderLineChart();
  }

  componentWillUnmount() {
 
  }
  
  renderLineChart() {   
    var self = this;
    var data = this.props.data;
    
    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = self.props.title,
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: self.props.y,
          name: Utilities.capitalizeFirstLetter(self.props.y),
          color: self.props.color || '#ff7f0e'
        }
      ],
      // your x accessor
      x = function(d) {
        return d[self.props.x];
      }
      
    ReactDOM.render(
      <D3Chart
        title={"Taiwan refuse disposal"}
        width={width}
        height={height}
        margins= {margins}
        >
        <D3LineChart
          margins= {margins}
          title={"Taiwan refuse disposal"}
          data={data}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={"time"}
        />
      </D3Chart>
    , document.getElementById('line-chart')
    )
    
  }

  render() {
    return (
       <div id="line-chart"> </div>
    );
  }
}

export default Chart;
