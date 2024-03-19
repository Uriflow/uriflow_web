const showLegend = true
const dataValue = [0,500,1000]
const labels =[
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00','00:00'
];
const data = {
  labels: labels,
  datasets: [{
    label:'尿液量(c.c)',
    data: [0,100,150,400,500,550,700,1000],
    pointStyle: 'circle',
    pointRadius: 5,
    pointHoverRadius: 10,
    backgroundColor: 'rgba(62,173,58,1)',
    borderColor: 'rgba(62,173,58,1)',
  }]
};

const config = {
  type: 'line',
  data,
  options: {
    plugins:{
      legend:{
        display: showLegend
      }
    }
  }
};

var urineChart = new Chart(
  document.getElementById("urineChart"),
  config
);