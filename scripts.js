let rationChart = document.getElementById('rationchart');

let barChart = new Chart(rationChart, {
  type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Vegetables','Chicken','Fruits','Rice'],
    datasets:[{
      label:'Rations',
      data:[20,32,40,10]
    }]
  },
  options:{}
}

  );