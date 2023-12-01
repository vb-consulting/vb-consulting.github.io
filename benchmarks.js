(function() {

var defaultColorDarkTheme = "#b7c8d8";
var defaultBorderColorDarkTheme = "#6c757d";
var defaultColorLightTheme = "#666";
var defaultBorderColorLightTheme = "#666";

var round1Ctx = document.getElementById("round1").getContext("2d");
var chart1 = null;

var currentTheme = localStorage.getItem("theme");

var data = {
    instancesRound1: [{"data": [495.0, 5034.1, 37130.9, 339296.5], "label": "ADO.NET Raw Command reader"}, {"data": [639.7, 5423.3, 58851.2, 552605.7], "label": "Dapper (Buffered)"}, {"data": [628.5, 5500.2, 40917.8, 394465.7], "label": "Dapper (Unbuffered)"}, {"data": [707.2, 6237.7, 46829.8, 426856.1], "label": "EntityFrameworkCore 8 (SqlQueryRaw)"}, {"data": [558.8, 5679.0, 44330.7, 382996.1], "label": "Norm (Instances)"}],
    instancesRound2: [{"data": [490.5, 5040.9, 36444.5, 343798.5], "label": "ADO.NET Raw Command reader"}, {"data": [603.8, 5648.4, 57642.8, 565775.6], "label": "Dapper (Buffered)"}, {"data": [609.9, 5392.0, 42711.8, 377739.9], "label": "Dapper (Unbuffered)"}, {"data": [695.6, 5815.1, 48379.3, 409886.1], "label": "EntityFrameworkCore 8 (SqlQueryRaw)"}, {"data": [557.2, 5569.4, 45154.4, 393516.5], "label": "Norm (Instances)"}],
    instancesRound3: [{"data": [503.5, 5151.3, 37967.7, 359733.4], "label": "ADO.NET Raw Command reader"}, {"data": [619.6, 5662.8, 59366.8, 563630.2], "label": "Dapper (Buffered)"}, {"data": [626.4, 5574.7, 43085.0, 405477.0], "label": "Dapper (Unbuffered)"}, {"data": [719.2, 6063.8, 48504.1, 426661.6], "label": "EntityFrameworkCore 8 (SqlQueryRaw)"}, {"data": [564.6, 5596.5, 45148.0, 415766.6], "label": "Norm (Instances)"}],
    instancesRound4: [{"data": [494.2, 5139.8, 41697.1, 372974.6], "label": "ADO.NET Raw Command reader"}, {"data": [621.2, 5420.0, 59657.4, 608459.7], "label": "Dapper (Buffered)"}, {"data": [625.3, 5454.1, 43165.1, 408837.4], "label": "Dapper (Unbuffered)"}, {"data": [731.7, 6103.2, 48193.4, 431404.6], "label": "EntityFrameworkCore 8 (SqlQueryRaw)"}, {"data": [571.5, 5767.4, 45447.8, 405483.5], "label": "Norm (Instances)"}],
    instancesRound5: [{"data": [500.7, 5032.7, 38818.4, 364026.0], "label": "ADO.NET Raw Command reader"}, {"data": [672.1, 5580.5, 59944.7, 571801.5], "label": "Dapper (Buffered)"}, {"data": [667.8, 5506.1, 42938.3, 426777.0], "label": "Dapper (Unbuffered)"}, {"data": [743.6, 5841.9, 49094.9, 436627.3], "label": "EntityFrameworkCore 8 (SqlQueryRaw)"}, {"data": [598.1, 5775.5, 45965.6, 399363.9], "label": "Norm (Instances)"}],
}

var instancesRound = "instancesRound1";
var instancesxAxisType = "category";


function createOptions(title, yTitle, xAxisType, datasets) {
    return {
        type: "line",
        options: {
            tension: 0.1,
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            },
            scales: {
                y: {
                    title: {
                        text: yTitle,
                        display: true
                    }
                },
                x: {
                    type: xAxisType,
                    title: {
                        text: "number of records",
                        display: true
                    }
                }
            }
        },
        data: {
            labels: [10, 1000, 10000, 100000],
            datasets: datasets
        }
    };
}

function redraw() {
    if (currentTheme == "dark") {
        Chart.defaults.color = defaultColorDarkTheme;
        Chart.defaults.borderColor = defaultBorderColorDarkTheme;
    } else {
        Chart.defaults.color = defaultColorLightTheme;
        Chart.defaults.borderColor = defaultBorderColorLightTheme;
    }

    if (chart1) {
        chart1.destroy();
    }
    chart1 = new Chart(round1Ctx, createOptions(
        "Round " + instancesRound.substring(instancesRound.length-1) + (instancesxAxisType == "category" ? "" : " (" + instancesxAxisType + ")"), 
        "arithmetic mean in μs", 
        instancesxAxisType,
        data[instancesRound]));
}

for (let radio of document.querySelectorAll("input[name='radioInstanceRounds']")) {
    radio.onchange = function(e) {
        if (this.checked) {
            instancesRound = this.value;
            redraw();
        }
    }
}
for (let radio of document.querySelectorAll("input[name='radioInstanceType']")) {
    radio.onchange = function(e) {
        if (this.checked) {
            instancesxAxisType = this.value;
            redraw();
        }
    }
}


window._theme = function(theme) {
    currentTheme = theme;
    redraw();
}

setTimeout(function() {
    var resizetimeout = undefined
    window._onresize = function () {
        if (resizetimeout) {
            clearTimeout(resizetimeout)
        }
        resizetimeout = setTimeout(function() {
                redraw();
            resizetimeout = undefined;
        }, 250);
    }
}, 1000);


})();