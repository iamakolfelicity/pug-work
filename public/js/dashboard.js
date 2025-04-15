var barChartOptions = {
    series: [{
    data: [70,50,40,30,10]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    }
  },
 colors:[
    '#FE9900',
'#5DE2E7',
'#BFD641',
'#DFC57B',
'#E7DDFF'
 ],
  plotOptions: {
    bar: {
        distributed:true,
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false
  },

  yaxis:{
    title:{
        text:"total sales in tonnes"
    }
  },
  xaxis: {
    categories: ['Beans','Cow-peas','Soy-beans','Maize-grains','Ground-nuts'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  chart.render();

//Area-chart
var options = {
    series: [{
    name: 'Matugga',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],   
  }, {
    name: 'Maganjo',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar:{
        show:false
    }
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Maganjo',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Matugga',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);
  chart.render();


