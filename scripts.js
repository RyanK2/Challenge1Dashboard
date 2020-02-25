var options = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'amount',
    data: [40,20,19,43]
  }],
  xaxis: {
    categories: [bread,rice,chicken,salad]
  }
}

var chart = new ApexCharts(document.querySelector("#rationFood"), options);

chart.render();