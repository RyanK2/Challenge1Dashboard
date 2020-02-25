 var options = {
  chart: {
    type: 'bar',
    height: 450,
    width: '100%',
    background: '#f4f4f4',
    foreColor: '#333'
  },
  series: [{
    name: 'sales',
    data: [40,20,19,43]
  }],
  xaxis: {
    categories: [6,8,4,8]
  }
};

var chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render(); 