
          // Function to fetch real-time sales data
          const fetchRealTimeData = async () => {
            try {
              const response = await fetch("/sales/realTimeData");
              const salesData = await response.json();

              // Extract categories (product names) and series (total sales amounts)
              const categories = salesData.map(item => item._id);
              const dataSeries = salesData.map(item => item.totalSales);

              // Update the chart with the new data
              updateBarChart(categories, dataSeries);
            } catch (error) {
              console.error("Error fetching real-time sales data:", error);
            }
          };

          // Function to update the bar chart with new data
          const updateBarChart = (categories, dataSeries) => {
            const barChartOptions = {
              series: [{
                data: dataSeries
              }],
              chart: {
                type: 'bar',
                height: 350,
                toolbar: { show: false }
              },
              colors: ['#FE9900', '#5DE2E7', '#BFD641', '#DFC57B', '#E7DDFF'],
              plotOptions: {
                bar: {
                  distributed: true,
                  borderRadius: 4,
                  borderRadiusApplication: 'end',
                  horizontal: false,
                }
              },
              dataLabels: { enabled: false },
              yaxis: {
                title: { text: "Total Sales Amount" }
              },
              xaxis: {
                categories: categories
              }
            };

            const chart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
            chart.render();
          };

          // Initially fetch the data
          fetchRealTimeData();

          
//Area-chart
var options = {
    series: [{
    name: 'Matugga',
    type: 'line',
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


