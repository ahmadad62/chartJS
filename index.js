let myChart = document.getElementById("myChart").getContext('2d');
console.log(myChart);

let massPopChart = new Chart(myChart, {
    type: 'bar', //type: bar, line, area, pie, bubble, radar, polar, scatter
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ]
        }],
    },
    options: {}

});