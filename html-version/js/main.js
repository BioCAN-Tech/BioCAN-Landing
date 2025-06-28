// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize all interactive components
    initializeNavigation();
    initializePainPointCarousel();
    initializeProblemVisualization();
    initializeFeatures();
    initializeEmailForms();
    initializeAnimations();
    initializeParticles();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.getElementById('navigation');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Handle scroll effect on navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('glass-nav');
            nav.classList.remove('py-6');
            nav.classList.add('py-4');
        } else {
            nav.classList.remove('glass-nav');
            nav.classList.remove('py-4');
            nav.classList.add('py-6');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });
}

// Pain Point Carousel functionality
function initializePainPointCarousel() {
    const painPoints = [
        { 
            stat: '70%', 
            text: 'are underemployed or in misaligned roles',
            icon: 'target'
        },
        { 
            stat: '65%', 
            text: "don't know what career paths exist",
            icon: 'brain'
        },
        { 
            stat: '58%', 
            text: 'feel underprepared for industry roles',
            icon: 'trending-up'
        }
    ];
    
    let currentIndex = 0;
    const carousel = document.getElementById('pain-point-carousel');
    const dots = document.querySelectorAll('.pain-point-dot');
    
    function updatePainPoint(index) {
        const painPoint = painPoints[index];
        
        carousel.innerHTML = `
            <div class="pain-point-content">
                <div class="flex items-center justify-center mb-6">
                    <div class="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                        <i data-lucide="${painPoint.icon}" class="w-8 h-8 text-white"></i>
                    </div>
                    <div class="pain-point-stat">${painPoint.stat}</div>
                </div>
                <p class="pain-point-text">${painPoint.text}</p>
            </div>
        `;
        
        // Update dots
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Reinitialize icons
        lucide.createIcons();
    }
    
    // Initialize first pain point
    updatePainPoint(0);
    
    // Auto-rotate pain points
    setInterval(() => {
        currentIndex = (currentIndex + 1) % painPoints.length;
        updatePainPoint(currentIndex);
    }, 3000);
    
    // Manual dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updatePainPoint(index);
        });
    });
}

// Problem Visualization functionality
function initializeProblemVisualization() {
    const problemStats = [
        {
            percentage: 70,
            title: 'Underemployed or Misaligned',
            description: 'Life science graduates are stuck in roles that don\'t match their skills or career goals',
            detail: 'Despite having advanced degrees, most graduates end up in positions that underutilize their education and potential.',
            impact: 'Lost talent, reduced innovation, career stagnation'
        },
        {
            percentage: 65,
            title: 'Unaware of Career Paths',
            description: 'Students don\'t know what career opportunities exist in their field',
            detail: 'The life sciences offer diverse career paths beyond traditional research, but most students only know about academia.',
            impact: 'Missed opportunities, limited career exploration'
        },
        {
            percentage: 58,
            title: 'Feel Underprepared',
            description: 'Lack industry-specific skills for modern biotech careers',
            detail: 'Academic training often doesn\'t align with industry needs, leaving graduates feeling unprepared for real-world challenges.',
            impact: 'Longer job searches, lower starting salaries'
        }
    ];
    
    let currentStatIndex = 0;
    const display = document.getElementById('problem-stat-display');
    const prevBtn = document.getElementById('problem-prev');
    const nextBtn = document.getElementById('problem-next');
    
    function updateProblemStat(index) {
        const stat = problemStats[index];
        
        display.innerHTML = `
            <div class="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 border-b border-white/10">
                <div class="flex flex-col lg:flex-row lg:items-end lg:space-x-6 space-y-4 lg:space-y-0">
                    <div class="text-7xl md:text-8xl font-bold gradient-primary leading-none">
                        ${stat.percentage}%
                    </div>
                    <div class="flex-1">
                        <h3 class="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                            ${stat.title}
                        </h3>
                        <p class="text-gray-300 text-lg leading-relaxed">
                            ${stat.description}
                        </p>
                    </div>
                </div>
            </div>
            <div class="p-8">
                <div class="border-l-4 border-red-400 pl-6 py-4 bg-red-500/5 rounded-r-2xl">
                    <div class="flex items-start space-x-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <i data-lucide="alert-triangle" class="w-6 h-6 text-white"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold text-red-400 mb-3">Impact</h4>
                            <p class="text-gray-300 leading-relaxed text-lg">
                                ${stat.impact}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        lucide.createIcons();
    }
    
    // Initialize first stat
    updateProblemStat(0);
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        currentStatIndex = (currentStatIndex - 1 + problemStats.length) % problemStats.length;
        updateProblemStat(currentStatIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentStatIndex = (currentStatIndex + 1) % problemStats.length;
        updateProblemStat(currentStatIndex);
    });
    
    // Auto-rotate problem stats
    setInterval(() => {
        currentStatIndex = (currentStatIndex + 1) % problemStats.length;
        updateProblemStat(currentStatIndex);
    }, 8000);
}

// Features functionality
function initializeFeatures() {
    const mainFeatures = [
        {
            phase: 'DISCOVER',
            title: 'AI-Powered Career Assessment',
            description: 'Intelligent matching of skills, interests, and market opportunities with real-time industry intelligence.',
            icon: 'brain',
            color: 'from-blue-500 to-cyan-500',
            features: [
                'Skills gap analysis with industry data',
                'Personality & interest profiling',
                'Market opportunity mapping',
                'Real-time industry intelligence'
            ]
        },
        {
            phase: 'DEVELOP',
            title: 'Personalized Career Roadmaps',
            description: 'Step-by-step guidance with interactive milestones and skill development programs.',
            icon: 'target',
            color: 'from-purple-500 to-pink-500',
            features: [
                'Custom learning pathways',
                'Interactive milestone tracking',
                'Skill development programs',
                'Progress analytics & insights'
            ]
        },
        {
            phase: 'DEPLOY',
            title: 'Automated Job Application System',
            description: 'AI-assisted career deployment with automated applications and industry connections.',
            icon: 'rocket',
            color: 'from-green-500 to-emerald-500',
            features: [
                'AI resume & cover letter generation',
                'Mass application automation',
                'Industry event recommendations',
                'Live trend monitoring'
            ]
        }
    ];
    
    const additionalFeatures = [
        {
            icon: 'search',
            title: 'Industry Happenings',
            description: 'AI gathers live data on industry trends and suggests relevant events.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: 'users',
            title: 'Expert Network Access',
            description: 'Connect with industry professionals and thought leaders.',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: 'trending-up',
            title: 'Career Analytics',
            description: 'Track your progress with detailed career advancement metrics.',
            color: 'from-teal-500 to-blue-500'
        }
    ];
    
    // Render main features
    const mainFeaturesContainer = document.getElementById('main-features');
    mainFeaturesContainer.innerHTML = mainFeatures.map((feature, index) => `
        <div class="feature-card animate-slide-up" style="animation-delay: ${index * 0.2}s;">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-bold mb-6">
                ${feature.phase}
            </div>
            
            <div class="feature-icon bg-gradient-to-r ${feature.color} mb-6">
                <i data-lucide="${feature.icon}" class="w-10 h-10 text-white"></i>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4">
                ${feature.title}
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
                ${feature.description}
            </p>
            
            <div class="space-y-3">
                ${feature.features.map(item => `
                    <div class="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-blue-400"></i>
                        ${item}
                    </div>
                `).join('')}
            </div>
            
            <div class="absolute top-4 right-4">
                <div class="glass-card px-3 py-1 rounded-full">
                    <span class="text-xs text-blue-400 font-medium">AI-Powered</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Render additional features
    const additionalFeaturesContainer = document.getElementById('additional-features');
    additionalFeaturesContainer.innerHTML = additionalFeatures.map((feature, index) => `
        <div class="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: ${index * 0.1}s;">
            <div class="w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i data-lucide="${feature.icon}" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">${feature.title}</h3>
            <p class="text-gray-300 text-sm leading-relaxed">${feature.description}</p>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Email form functionality
function initializeEmailForms() {
    // Hero email form
    const heroForm = document.getElementById('hero-email-form');
    const heroEmail = document.getElementById('hero-email');
    const heroSubmitBtn = document.getElementById('hero-submit-btn');
    const heroSuccess = document.getElementById('hero-success');
    
    heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (heroEmail.value.trim()) {
            heroSubmitBtn.style.display = 'none';
            heroSuccess.classList.remove('hidden');
            heroEmail.value = '';
            
            setTimeout(() => {
                heroSubmitBtn.style.display = 'inline-flex';
                heroSuccess.classList.add('hidden');
            }, 3000);
        }
    });
    
    // Waitlist email form
    const waitlistForm = document.getElementById('waitlist-email-form');
    if (waitlistForm) {
        const waitlistEmail = document.getElementById('waitlist-email');
        const waitlistSubmitBtn = document.getElementById('waitlist-submit-btn');
        const waitlistSuccess = document.getElementById('waitlist-success');
        
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (waitlistEmail.value.trim()) {
                waitlistSubmitBtn.style.display = 'none';
                waitlistSuccess.classList.remove('hidden');
                waitlistEmail.value = '';
                
                setTimeout(() => {
                    waitlistSubmitBtn.style.display = 'inline-flex';
                    waitlistSuccess.classList.add('hidden');
                    hideEmailForm();
                }, 3000);
            }
        });
    }
    
    // Contact form (for contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const contactSubmitBtn = document.getElementById('contact-submit-btn');
        const contactSuccess = document.getElementById('contact-success');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (firstName && lastName && email && subject && message) {
                contactSubmitBtn.style.display = 'none';
                contactSuccess.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                setTimeout(() => {
                    contactSubmitBtn.style.display = 'inline-flex';
                    contactSuccess.classList.add('hidden');
                }, 3000);
            }
        });
    }
}

// Show/Hide email form functions
function showEmailForm() {
    document.getElementById('waitlist-cta').classList.add('hidden');
    document.getElementById('email-form-section').classList.remove('hidden');
    document.getElementById('waitlist-email').focus();
}

function hideEmailForm() {
    document.getElementById('email-form-section').classList.add('hidden');
    document.getElementById('waitlist-cta').classList.remove('hidden');
}

// Scroll functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation system
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .glass-card, .feature-card').forEach(el => {
        observer.observe(el);
    });
}

// Particle system
function initializeParticles() {
    // Hero particles
    const heroParticles = document.getElementById('particles');
    if (heroParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-blue-400/30 rounded-full';
            particle.style.left = `${(i * 5.3) % 100}%`;
            particle.style.top = `${(i * 7.1) % 100}%`;
            particle.style.animation = `float ${3 + (i % 3)}s ease-in-out infinite`;
            particle.style.animationDelay = `${i * 0.1}s`;
            heroParticles.appendChild(particle);
        }
    }
    
    // Problem section particles
    const problemParticles = document.getElementById('problem-particles');
    if (problemParticles) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-2 h-2 bg-red-400/20 rounded-full';
            particle.style.left = `${(i * 6.7) % 100}%`;
            particle.style.top = `${(i * 8.3) % 100}%`;
            particle.style.animation = `float ${4 + (i % 3)}s ease-in-out infinite`;
            particle.style.animationDelay = `${i * 0.2}s`;
            problemParticles.appendChild(particle);
        }
    }
    
    // Connection lines for early interest section
    const connectionLines = document.getElementById('connection-lines');
    if (connectionLines) {
        for (let i = 0; i < 8; i++) {
            const line = document.createElement('div');
            line.className = 'absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent';
            line.style.left = `${20 + i * 10}%`;
            line.style.height = '100%';
            line.style.animation = `pulse 3s ease-in-out infinite`;
            line.style.animationDelay = `${i * 0.5}s`;
            connectionLines.appendChild(line);
        }
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        document.querySelectorAll('.floating-element').forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${parallax * speed}px)`;
        });
    });
    
    // Navbar scroll effect (already handled in navigation)
    
    // Smooth reveal animations
    const revealElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale-in');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        revealObserver.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize any size-dependent elements if needed
    lucide.createIcons();
}, 250));

// Error handling
window.addEventListener('error', (e) => {
    console.error('Script error:', e.error);
});

// Performance optimization
if ('IntersectionObserver' in window) {
    // Use Intersection Observer for better performance
} else {
    // Fallback for older browsers
    console.warn('IntersectionObserver not supported, using fallback');
} 