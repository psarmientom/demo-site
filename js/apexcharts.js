var options = {
    chart: {
      // type: 'line'
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125,45]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

//   Heatmap 
var options = {
    series: [{
    name: 'Marine',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: '100% Stacked Bar'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#barChart"), options);
  chart.render();

// Polar Area Chart 

var options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#polarChart"), options);
  chart.render();
