
//  <div id="chartContainer" style="height: 300px; width: 100%;"></div>

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 60, label: "Income"},
                {y: 40, label: "Expenses"},
            
            ]
        }]
    });
    chart.render();