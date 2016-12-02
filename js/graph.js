export const init = (type, eleId, rawData, title, subtitle) => {
    google.charts.load('current', { 'packages': type });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(rawData);

        var options = {
            chart: {
                title: title,
                subtitle: subtitle,
            }
        };

        var chart = new google.charts.Bar(document.getElementById(eleId));

        chart.draw(data, options);
    }
}