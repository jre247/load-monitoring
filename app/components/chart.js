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
    
    var width = this.props.width || 700,
      height = this.props.height || 300,
      margins = {
        left: this.props.marginLeft || 100, 
        right: this.props.marginRight || 100, 
        top: this.props.marginTop || 50, 
        bottom: this.props.marginBottom || 50
      },
      xScale = this.props.xScale || "time",
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
        var date = new Date(d[self.props.x]);
        //var dateAsSec = date.getTicks();
        
       // var parseDate = d3.time.format("%YM%m").parse;
        return date;
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
          xScale={xScale}
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
