// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#06b6d4', '#8b5cf6', '#ec4899']
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#8b5cf6',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typed.js initialization
const typed = new Typed('#typed-text', {
    strings: [
        '데이터 기반 의사결정으로 혁신을 주도합니다',
        '3년간 2억원의 비용 절감을 달성했습니다',
        '품질 관리의 새로운 기준을 제시합니다'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transform translate-x-full transition-transform duration-300';
mobileMenu.innerHTML = `
    <div class="flex justify-between items-center p-6 border-b border-white/10">
        <h2 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Menu</h2>
        <button id="close-menu" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
    <nav class="p-6">
        <ul class="space-y-6">
            <li><a href="#about" class="block text-xl text-white hover:text-cyan-400 transition-colors">소개</a></li>
            <li><a href="#experience" class="block text-xl text-white hover:text-cyan-400 transition-colors">경력</a></li>
            <li><a href="#skills" class="block text-xl text-white hover:text-cyan-400 transition-colors">기술</a></li>
            <li><a href="#education" class="block text-xl text-white hover:text-cyan-400 transition-colors">교육</a></li>
            <li><a href="#contact" class="block text-xl text-white hover:text-cyan-400 transition-colors">연락처</a></li>
        </ul>
    </nav>
`;
document.body.appendChild(mobileMenu);

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(0)';
});

document.getElementById('close-menu').addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(100%)';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.style.transform = 'translateX(100%)';
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// GSAP Animations
// Hero animation
gsap.from('.hero-card-inner', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from('.stat-bubble', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    delay: 1
});

// Section animations
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Timeline animations
gsap.utils.toArray('.timeline-item-modern').forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Initialize ECharts after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing charts...');
    
    // 3D Skills Chart
    const skillsChartElement = document.getElementById('3d-skills-chart');
    if (skillsChartElement) {
        console.log('Initializing skills chart...');
        const skillsChart = echarts.init(skillsChartElement);
    
    const option = {
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
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.8, [
                        { offset: 0, color: 'rgba(6, 182, 212, 0.4)' },
                        { offset: 1, color: 'rgba(139, 92, 246, 0.1)' }
                    ])
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
    
        skillsChart.setOption(option);
        window.addEventListener('resize', () => skillsChart.resize());
        console.log('Skills chart initialized');
    }

    // Combo Chart
    const comboChartElement = document.getElementById('combo-chart');
    if (comboChartElement) {
        console.log('Initializing combo chart...');
        const comboChart = echarts.init(comboChartElement);
    
    const option = {
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
                data: [2800, 3500, 4200, 5000],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#06b6d4' },
                        { offset: 1, color: '#0891b2' }
                    ]),
                    borderRadius: [8, 8, 0, 0]
                }
            },
            {
                name: '개선 건수',
                type: 'bar',
                data: [12, 18, 25, 30],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#8b5cf6' },
                        { offset: 1, color: '#7c3aed' }
                    ]),
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
    
        comboChart.setOption(option);
        window.addEventListener('resize', () => comboChart.resize());
        console.log('Combo chart initialized');
    }

    // Skills Matrix
    const matrixChartElement = document.getElementById('skills-matrix');
    if (matrixChartElement) {
        console.log('Initializing matrix chart...');
        const matrixChart = echarts.init(matrixChartElement);
    
    const hours = ['품질관리', '데이터분석', '프로세스개선', '신뢰성평가', '비용절감'];
    const days = ['2022', '2023', '2024'];
    
    const data = [
        [0, 0, 75], [0, 1, 85], [0, 2, 95],
        [1, 0, 70], [1, 1, 80], [1, 2, 85],
        [2, 0, 72], [2, 1, 82], [2, 2, 88],
        [3, 0, 78], [3, 1, 85], [3, 2, 90],
        [4, 0, 80], [4, 1, 88], [4, 2, 92]
    ];
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            position: 'top',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: '#06b6d4',
            borderWidth: 1,
            textStyle: {
                color: '#fff'
            }
        },
        animation: true,
        grid: {
            height: '70%',
            top: '10%'
        },
        xAxis: {
            type: 'category',
            data: days,
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(255, 255, 255, 0.02)', 'rgba(255, 255, 255, 0.05)']
                }
            },
            axisLabel: {
                color: '#94a3b8'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            },
            axisLabel: {
                color: '#94a3b8'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '0%',
            inRange: {
                color: ['#0891b2', '#06b6d4', '#8b5cf6', '#ec4899']
            },
            textStyle: {
                color: '#94a3b8'
            }
        },
        series: [{
            name: '성장도',
            type: 'heatmap',
            data: data.map(function (item) {
                return [item[1], item[0], item[2] || '-'];
            }),
            label: {
                show: true,
                color: '#fff'
            },
            itemStyle: {
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    
        matrixChart.setOption(option);
        window.addEventListener('resize', () => matrixChart.resize());
        console.log('Matrix chart initialized');
    }
});

// Wait for particles to load
window.addEventListener('load', () => {
    console.log('All resources loaded');
});

// Mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});