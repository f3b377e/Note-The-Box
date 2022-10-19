// https://github.com/typpo/quickchart-js

import QuickChart from 'quickchart-js'


export default class chartApi{
    dataMachine : Int32List;
    chart : QuickChart;

    public constructor (dataMachine: Int32List){
        this.dataMachine = dataMachine;
        this.chart = new QuickChart();
        this.chart.setWidth(250)
        this.chart.setHeight(250);
        this.chart.setVersion('2');
        this.chart.setBackgroundColor("")

        this.chart.setConfig({
            "type": "radar",
            "data": {
              "datasets": [
                {
                  "label": "Matrix",
                  "backgroundColor": "rgba(152, 252, 174, 0.1)",
                  "borderColor": "#28a745",
                  "pointBackgroundColor": "rgba(152, 252, 174)",
                  "data": [
                    5.6,
                    5.6,
                    5.5,
                    4.5,
                    4.4
                  ],
                  "fill": true,
                  "spanGaps": false,
                  "lineTension": 0,
                  "pointRadius": 2,
                  "pointHoverRadius": 2,
                  "pointStyle": "circle",
                  "borderDash": [
                    0,
                    0
                  ],
                  "barPercentage": 0.9,
                  "categoryPercentage": 0.8,
                  "type": "radar",
                  "borderWidth": 3,
                  "hidden": false
                }
              ],
              "labels": [
                "Enumeration",
                "Real Life",
                "CVE",
                ["Custom","Exploitation"],
                "CTF-Like"
              ]
            },
            "options": {
              "title": {
                "display": false,
                "text": "",
                "position": "top",
                "fontSize": 12,
                "fontFamily": "sans-serif",
                "fontColor": "#666666",
                "fontStyle": "bold",
                "padding": 10,
                "lineHeight": 1.2
              },
              "layout": {
                "padding": {
                  "left": 0,
                  "right": 0,
                  "top": 0,
                  "bottom": 0
                }
              },
              "legend": {
                "display": false,
                "position": "top",
                "align": "center",
                "fullWidth": true,
                "reverse": false,
                "labels": {
                  "fontSize": 12,
                  "fontFamily": "sans-serif",
                  "fontColor": "#666666",
                  "fontStyle": "normal",
                  "padding": 10
                }
              },
              "scales": {
                "xAxes": [
                  {
                    "id": "X1",
                    "display": false,
                    "position": "bottom",
                    "type": "category",
                    "stacked": false,
                    "distribution": "linear",
                    "gridLines": {
                      "display": true,
                      "color": "rgb(51,54,60)",
                      "borderDash": [
                        0,
                        0
                      ],
                      "lineWidth": 1,
                      "drawBorder": true,
                      "drawOnChartArea": true,
                      "drawTicks": true,
                      "tickMarkLength": 10,
                      "zeroLineWidth": 1,
                      "zeroLineColor": "rgba(0, 0, 0, 0.25)",
                      "zeroLineBorderDash": [
                        0,
                        0
                      ]
                    },
                    "angleLines": {
                      "display": false,
                      "color": "rgba(0, 0, 0, 0.1)",
                      "borderDash": [
                        0,
                        0
                      ],
                      "lineWidth": 1
                    },
                    "pointLabels": {
                      "display": false,
                      "fontColor": "#666",
                      "fontSize": 10,
                      "fontStyle": "normal"
                    },
                    "ticks": {
                      "display": false,
                      "fontSize": 12,
                      "fontFamily": "sans-serif",
                      "fontColor": "#666666",
                      "fontStyle": "normal",
                      "padding": 0,
                      "stepSize": null,
                      "minRotation": 0,
                      "maxRotation": 50,
                      "mirror": false,
                      "reverse": false
                    },
                    "scaleLabel": {
                      "display": false,
                      "labelString": "Axis label",
                      "lineHeight": 1.2,
                      "fontColor": "#666666",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "fontStyle": "normal",
                      "padding": 4
                    }
                  }
                ],
                "yAxes": [
                  {
                    "id": "Y1",
                    "display": false,
                    "position": "left",
                    "type": "linear",
                    "stacked": false,
                    "distribution": "linear",
                    "gridLines": {
                      "display": true,
                      "color": "rgba(0, 0, 0, 0.1)",
                      "borderDash": [
                        0,
                        0
                      ],
                      "lineWidth": 1,
                      "drawBorder": false,
                      "drawOnChartArea": false,
                      "drawTicks": false,
                      "tickMarkLength": 10,
                      "zeroLineWidth": 1,
                      "zeroLineColor": "rgba(0, 0, 0, 0.25)",
                      "zeroLineBorderDash": [
                        0,
                        0
                      ]
                    },
                    "angleLines": {
                      "display": false,
                      "color": "rgba(0, 0, 0, 0.1)",
                      "borderDash": [
                        0,
                        0
                      ],
                      "lineWidth": 1
                    },
                    "pointLabels": {
                      "display": false,
                      "fontColor": "#666",
                      "fontSize": 10,
                      "fontStyle": "normal"
                    },
                    "ticks": {
                      "display": false,
                      "fontSize": 12,
                      "fontFamily": "sans-serif",
                      "fontColor": "#666666",
                      "fontStyle": "normal",
                      "padding": 0,
                      "stepSize": null,
                      "minRotation": 0,
                      "maxRotation": 50,
                      "mirror": false,
                      "reverse": false
                    },
                    "scaleLabel": {
                      "display": false,
                      "labelString": "Axis label",
                      "lineHeight": 1.2,
                      "fontColor": "#666666",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "fontStyle": "normal",
                      "padding": 4
                    }
                  }
                ]
              },
              "scale": {
                "id": "radial",
                "display": true,
                "stacked": false,
                "backdropColor": "rgba(0, 0, 0, 0)",
                "distribution": "linear",
                "gridLines": {
                  "display": true,
                  "color": "rgba(0, 0, 0, 0.2)",
                  "borderDash": [
                    0,
                    0
                  ],
                  "lineWidth": 1,
                  "drawBorder": false,
                  "drawOnChartArea": false,
                  "drawTicks": false,
                  "tickMarkLength": 10,
                  "zeroLineWidth": 1,
                  "zeroLineColor": "rgba(0, 0, 0, 0.25)",
                  "zeroLineBorderDash": [
                    0,
                    0
                  ]
                },
                "angleLines": {
                  "display": true,
                  "color": "rgba(0, 0, 0, 0.2)",
                  "borderDash": [
                    0,
                    0
                  ],
                  "lineWidth": 1
                },
                "pointLabels": {
                  "display": true,
                  "fontColor": "rgba(255, 255, 255, 0.4)",
                  "fontSize": 11,
                  "fontStyle": "normal"
                },
                "ticks": {
                  "display": false,
                  "fontSize": 12,
                  "fontFamily": "sans-serif",
                  "fontColor": "#666666",
                  "fontStyle": "normal",
                  "padding": 0,
                  "minRotation": 0,
                  "maxRotation": 50,
                  "mirror": false,
                  "reverse": false,
                  "min": 0,
                  "max": 10,
                  "stepSize": 2,
                },
                "scaleLabel": {
                  "display": false,
                  "labelString": "Axis label",
                  "lineHeight": 1.2,
                  "fontColor": "#666666",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "fontStyle": "normal",
                  "padding": 4
                }
              },
              "plugins": {
                "datalabels": {
                  "display": false,
                  "align": "center",
                  "anchor": "center",
                  "backgroundColor": "#eee",
                  "borderColor": "#ddd",
                  "borderRadius": 6,
                  "borderWidth": 1,
                  "padding": 4,
                  "color": "#666666",
                  "font": {
                    "family": "sans-serif",
                    "size": 10,
                    "style": "normal"
                  }
                },
                "googleSheets": {},
                "airtable": {},
                "tickFormat": ""
              },
              "cutoutPercentage": 50,
              "rotation": -1.5707963267948966,
              "circumference": 6.283185307179586,
              "startAngle": -3.5707963267948966
            }
          });
    }

    public getUrl() : string { return this.chart.getUrl(); }
}
