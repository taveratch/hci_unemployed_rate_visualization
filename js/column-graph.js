google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Male', 'Female'],
        ['2006', 1.6, 1.4],
        ['2007', 1.5, 1.2],
        ['2008', 1.5, 1.3],
        ['2009', 1.5, 1.4],
        ['2010', 1.1, 1],
        ['2011', 0.7, 0.6],
        ['2012', 0.7, 0.6],
        ['2013', 0.8, 0.7],
        ['2014', 0.9, 0.8],
        ['2015', 0.9, 0.9]
    ]);

    var options = {
        chart: {
            title: 'Thailand Umemployment rate',
            subtitle: 'Year 2006 - 2015',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('column-graph'));

    chart.draw(data, options);
}