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
                    }
                },
                legend: {
                    data: ['절감액', '개선 건수', '누적 효율'],
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
                        data: ['1분기', '2분기', '3분기', '4분기'],
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
                        name: '금액 (만원)',
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
                        name: '효율 (%)',
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
                        name: '절감액',
                        type: 'bar',
                        data: [28, 35, 42, 50],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#06b6d4' },
                                    { offset: 1, color: '#0891b2' }
                                ]
                            },
                            borderRadius: [8, 8, 0, 0]
                        }
                    },
                    {
                        name: '개선 건수',
                        type: 'bar',
                        data: [12, 18, 25, 30],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#8b5cf6' },
                                    { offset: 1, color: '#7c3aed' }
                                ]
                            },
                            borderRadius: [8, 8, 0, 0]
                        }
                    },
                    {
                        name: '누적 효율',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [5.6, 10.5, 15.8, 20.0],
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 10,
                        lineStyle: {
                            width: 3,
                            color: '#ec4899',
                            shadowBlur: 10,
                            shadowColor: '#ec4899'
                        },
                        itemStyle: {
                            color: '#ec4899',
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