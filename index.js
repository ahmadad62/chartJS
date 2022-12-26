let myChart = document.getElementById("myChart").getContext('2d');

//Global Options
Chart.defaults.font.family = 'sans-serif';
Chart.defaults.font.size = 16;
Chart.defaults.font.color = '#888'

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
            ],
            // backgroundColor:'green',
            backgroundColor: [
                'rgb(255, 99, 136,0.6)',
                'rgb(54, 162, 86,0.6)',
                'rgb(255, 206, 192,0.6)',
                'rgb(75, 192, 255,0.6)',
                'rgb(153, 102, 255,0.6)',
                'rgb(153, 159, 64,0.6)',
                'rgb(255, 99, 132,0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Largest Cities in the Massachusetts',
                    color: '#911',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                    padding: { top: 0, left: 0, right: 0, bottom: 0 }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: '',
                    color: '#191',
                    font: {
                        family: 'Times',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: { top: 30, left: 0, right: 0, bottom: 0 }
                }
            }
        }
    },

});