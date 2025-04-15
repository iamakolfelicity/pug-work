let sidebarOpen =false

let sidebar = document.getElementById("sidebar")

function Opensidebar(){
    if(sidebarOpen){
        sidebar.classList.toggle("show")
    }
}
//bar chart
var barOptions = {
    series: [{
    data: [40,30,50,70,55]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{show:false}
  },
  colors: [
    "#A0C4FF",
    "#B9FBC0",
    "#FDFFB6",
    "#DAB6FC",
    "#FFC48C"
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
  legend:{
    show:false
  },
  xaxis: {
    categories: ['beans','cow-peas','maize grains','soy-beans','groundnuts'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);
  chart.render();

  //pie-charts
  var pieOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  labels: ['beans','cow-peas','maize grains','soy-beans','groundnuts'], // Optional: Add labels for categories
    legend: {
        position: 'top'},
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

  var chart = new ApexCharts(document.querySelector("#pie-chart"), pieOptions);
  chart.render();



