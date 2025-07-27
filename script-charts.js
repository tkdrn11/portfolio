// Chart initialization function with debugging
function initializeCharts() {
    console.log('Initializing charts...');
    
    // Check if ECharts is loaded
    if (typeof echarts === 'undefined') {
        console.error('ECharts is not loaded!');
        return;
    }
    
    // 3D Skills Chart
    const skillsChartElement = document.getElementById('3d-skills-chart');
    console.log('Skills chart element:', skillsChartElement);
    
    if (skillsChartElement) {
        try {
            // Clear any existing instance
            echarts.dispose(skillsChartElement);
            
            const skillsChart = echarts.init(skillsChartElement);
            console.log('Skills chart instance created');
            
            const skillsOption = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderColor: '#06b6d4',
                    borderWidth: 1,
                    textStyle: {
                        color: '#fff'
                    }
                },
                radar: {
                    indicator: [
                        { name: '품질관리', max: 100 },
                        { name: '신뢰성평가', max: 100 },
                        { name: '데이터분석', max: 100 },
                        { name: '프로세스개선', max: 100 },
                        { name: '비용절감', max: 100 },
                        { name: '리더십', max: 100 }
                    ],
                    shape: 'polygon',
                    splitNumber: 5,
                    axisName: {
                        color: '#94a3b8',
                        fontSize: 14
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(6, 182, 212, 0.05)', 'rgba(139, 92, 246, 0.05)']
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    }
                },
                series: [{
                    name: '역량',
                    type: 'radar',
                    data: [{
                        value: [95, 90, 85, 88, 92, 80],
                        name: '현재 역량',
                        symbol: 'circle',
                        symbolSize: 8,
                        lineStyle: {
                            width: 3,
                            color: '#06b6d4',
                            shadowBlur: 10,
                            shadowColor: '#06b6d4'
                        },
                        areaStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    { offset: 0, color: 'rgba(6, 182, 212, 0.4)' },
                                    { offset: 1, color: 'rgba(139, 92, 246, 0.1)' }
                                ]
                            }
                        },
                        itemStyle: {
                            color: '#06b6d4',
                            borderColor: '#fff',
                            borderWidth: 2,
                            shadowBlur: 10,
                            shadowColor: '#06b6d4'
                        }
                    }]
                }]
            };
            
            skillsChart.setOption(skillsOption);
            console.log('Skills chart option set');
            
            // Resize handler
            window.addEventListener('resize', () => {
                skillsChart.resize();
            });
        } catch (error) {
            console.error('Error initializing skills chart:', error);
        }
    }

    // Combo Chart
    const comboChartElement = document.getElementById('combo-chart');
    console.log('Combo chart element:', comboChartElement);
    
    if (comboChartElement) {
        try {
            // Clear any existing instance
            echarts.dispose(comboChartElement);
            
            const comboChart = echarts.init(comboChartElement);
            console.log('Combo chart instance created');
            
            const comboOption = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderColor: '#8b5cf6',
                    borderWidth: 1,
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function(params) {
                        let result = params[0].name + '<br/>';
                        params.forEach(function(item) {
                            if (item.seriesName === '불량품 사용비율') {
                                result += item.marker + item.seriesName + ': ' + item.value + '%<br/>';
                            } else {
                                result += item.marker + item.seriesName + ': ' + item.value + '건<br/>';
                            }
                        });
                        return result;
                    }
                },
                legend: {
                    data: ['양품', '불량', '불량품 사용비율'],
                    textStyle: {
                        color: '#94a3b8'
                    },
                    top: 10
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {
                            color: '#94a3b8'
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '수량 (건)',
                        axisLabel: {
                            formatter: '{value}',
                            color: '#94a3b8'
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: '비율 (%)',
                        min: 0,
                        max: 100,
                        axisLabel: {
                            formatter: '{value}%',
                            color: '#94a3b8'
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '양품',
                        type: 'bar',
                        data: [990, 840, 570, 131,676, 1124, 849],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#10b981' },
                                    { offset: 0.5, color: '#059669' },
                                    { offset: 1, color: '#047857' }
                                ]
                            },
                            borderRadius: [8, 8, 0, 0],
                            shadowBlur: 8,
                            shadowColor: 'rgba(16, 185, 129, 0.3)',
                            shadowOffsetY: 2
                        }
                    },
                    {
                        name: '불량',
                        type: 'bar',
                        data: [0, 0, 360, 523, 406, 857, 795],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#f87171' },
                                    { offset: 0.5, color: '#ef4444' },
                                    { offset: 1, color: '#dc2626' }
                                ]
                            },
                            borderRadius: [8, 8, 0, 0],
                            shadowBlur: 8,
                            shadowColor: 'rgba(239, 68, 68, 0.3)',
                            shadowOffsetY: 2
                        }
                    },
                    {
                        name: '불량품 사용비율',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [0, 0, 38.7, 80.0, 37.5, 43.3, 46.1],
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 8,
                        lineStyle: {
                            width: 3,
                            color: '#f59e0b',
                            shadowBlur: 10,
                            shadowColor: '#f59e0b'
                        },
                        itemStyle: {
                            color: '#f59e0b',
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    }
                ]
            };
            
            comboChart.setOption(comboOption);
            console.log('Combo chart option set');
            
            // Resize handler
            window.addEventListener('resize', () => {
                comboChart.resize();
            });
        } catch (error) {
            console.error('Error initializing combo chart:', error);
        }
    }

    // Skills Matrix removed - no longer needed
    
    console.log('All charts initialized');
}

// Multiple initialization strategies
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, waiting for ECharts...');
    
    // Try immediately
    if (typeof echarts !== 'undefined') {
        initializeCharts();
    } else {
        // Wait a bit for ECharts to load
        setTimeout(initializeCharts, 1000);
    }
});

// Also try on window load
window.addEventListener('load', function() {
    console.log('Window loaded');
    setTimeout(initializeCharts, 500);
});

// Export function for manual call
window.initializeCharts = initializeCharts;