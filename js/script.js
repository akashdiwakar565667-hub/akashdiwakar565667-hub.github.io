// ==================== CHARACTER DATA ====================
const characters = [
    {
        name: "Saitama",
        description: "The One Punch Man - Unstoppable force with unmatched power",
        icon: "💪",
        power: 100,
        speed: 100,
        intelligence: 50
    },
    {
        name: "Naruto Uzumaki",
        description: "The Hero of the Hidden Leaf Village with unlimited potential",
        icon: "🌀",
        power: 95,
        speed: 90,
        intelligence: 85
    },
    {
        name: "Ichigo Kurosaki",
        description: "Soul Reaper protector with incredible zanpakuto abilities",
        icon: "⚔️",
        power: 90,
        speed: 85,
        intelligence: 75
    }
];

const powers = [
    {
        name: "One Punch",
        description: "Unbeatable power that defeats any opponent with a single punch",
        icon: "👊",
        level: 100
    },
    {
        name: "Rasengan",
        description: "Spinning vortex of chakra that can destroy anything in its path",
        icon: "🌪️",
        level: 85
    },
    {
        name: "Getsuga Tensho",
        description: "Devastating spiritual energy slash that tears through dimensions",
        icon: "⚡",
        level: 80
    },
    {
        name: "Fire Style Fireball",
        description: "Massive fireball jutsu that engulfs the battlefield",
        icon: "🔥",
        level: 75
    }
];

const gallery = [
    {
        title: "Legendary Battle",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff006e;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238338ec;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad1)'/%3E%3Ccircle cx='200' cy='150' r='80' fill='%23ffd60a' opacity='0.3'/%3E%3Cpolygon points='200,80 280,180 200,200 120,180' fill='%23fff' opacity='0.2'/%3E%3C/svg%3E"
    },
    {
        title: "Power Unleashed",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233a86ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff006e;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad2)'/%3E%3Crect x='50' y='50' width='300' height='200' fill='none' stroke='%23ffd60a' stroke-width='3'/%3E%3Ccircle cx='200' cy='150' r='50' fill='%23ffd60a' opacity='0.4'/%3E%3C/svg%3E"
    },
    {
        title: "Sacred Transformation",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238338ec;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%233a86ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad3)'/%3E%3Cpolygon points='200,50 350,200 250,250 150,250 50,200' fill='%23ffd60a' opacity='0.3'/%3E%3C/svg%3E"
    }
];

// ==================== DOM ELEMENT REFERENCES ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const scrollToTopBtn = document.getElementById('scrollToTop');
const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');
const charactersGrid = document.getElementById('charactersGrid');
const powersGrid = document.getElementById('powersGrid');
const galleryGrid = document.getElementById('galleryGrid');

// ==================== INITIALIZE PAGE ====================
document.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
    renderPowers();
    renderGallery();
    setupEventListeners();
});

// ==================== NAVIGATION ====================
function setupEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact form submission
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ==================== FORM HANDLING ====================
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Validate
    if (!name || !email || !message) {
        showFormError('Please fill out all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormError('Please enter a valid email');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });

    // Show success message
    contactForm.style.display = 'none';
    contactSuccess.style.display = 'block';

    // Reset form and show again after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        contactSuccess.style.display = 'none';
    }, 3000);
}

function showFormError(message) {
    alert(message);
}

// ==================== RENDER CHARACTERS ====================
function renderCharacters() {
    charactersGrid.innerHTML = characters.map((character, index) => `
        <div class="character-card">
            <div class="character-icon">${character.icon}</div>
            <h3 class="character-name">${character.name}</h3>
            <p class="character-description">${character.description}</p>
            <div class="character-stats">
                <div class="stat">
                    <div class="stat-label">Power</div>
                    <div class="stat-value">${character.power}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">Speed</div>
                    <div class="stat-value">${character.speed}</div>
                </div>
                <div class="stat">
                    <div class="stat-label">IQ</div>
                    <div class="stat-value">${character.intelligence}</div>
                </div>
            </div>
        </div>
    `).join('');

    // Add animation stagger
    document.querySelectorAll('.character-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// ==================== RENDER POWERS ====================
function renderPowers() {
    powersGrid.innerHTML = powers.map((power, index) => {
        const fillPercentage = (power.level / 100) * 100;
        return `
            <div class="power-card" style="--index: ${index}">
                <div class="power-icon">${power.icon}</div>
                <h3 class="power-name">${power.name}</h3>
                <p class="power-description">${power.description}</p>
                <div class="power-level">
                    <span class="power-level-label">Level:</span>
                    <div class="power-bar">
                        <div class="power-bar-fill" style="--fill: ${fillPercentage}%"></div>
                    </div>
                    <span>${power.level}%</span>
                </div>
            </div>
        `;
    }).join('');

    // Add animation stagger
    document.querySelectorAll('.power-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
}

// ==================== RENDER GALLERY ====================
function renderGallery() {
    galleryGrid.innerHTML = gallery.map((item, index) => `
        <div class="gallery-item" onclick="handleGalleryClick(${index})">
            <img src="${item.image}" alt="${item.title}" class="gallery-image">
            <div class="gallery-overlay">
                <div class="gallery-title">${item.title}</div>
            </div>
        </div>
    `).join('');
}

// ==================== GALLERY INTERACTIONS ====================
function handleGalleryClick(index) {
    const item = gallery[index];
    console.log('Gallery item clicked:', item);
    showGalleryModal(item);
}

function showGalleryModal(item) {
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease-out;
        backdrop-filter: blur(5px);
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2rem;
        border-radius: 20px;
        max-width: 600px;
        max-height: 80vh;
        overflow: auto;
        animation: slideInUp 0.5s ease-out;
        position: relative;
    `;

    modalContent.innerHTML = `
        <button onclick="this.closest('[data-modal]').remove()" style="
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: #fff;
            font-size: 2rem;
            cursor: pointer;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        ">×</button>
        <img src="${item.image}" alt="${item.title}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
        <h2 style="color: #ffd60a; margin-bottom: 1rem;">${item.title}</h2>
        <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6;">
            This is an incredible moment from the anime universe. The power and spectacle of this moment represents 
            the pinnacle of combat and determination shown throughout the series.
        </p>
    `;

    modal.setAttribute('data-modal', 'true');
    modal.appendChild(modalContent);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    document.body.appendChild(modal);
}

// ==================== SCROLL TO SECTION ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== MOUSE PARALLAX EFFECT ====================
document.addEventListener('mousemove', (e) => {
    const starElement = document.querySelector('.stars');
    if (starElement) {
        const moveX = (e.clientX / window.innerWidth) * 10;
        const moveY = (e.clientY / window.innerHeight) * 10;
        starElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// ==================== ADD KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('[data-modal]');
        if (modal) modal.remove();
    }

    // Arrow keys for navigation
    if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    } else if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    }
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.character-card, .power-card, .gallery-item').forEach(el => {
            observer.observe(el);
        });
    }, 100);
});

// ==================== CONSOLE LOGGING ====================
console.log('🎌 Welcome to Anime Universe!');
console.log('📊 Total Characters: ' + characters.length);
console.log('⚡ Total Powers: ' + powers.length);
console.log('🖼️ Gallery Items: ' + gallery.length);

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
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

// Smooth scroll performance optimization
window.addEventListener('scroll', debounce(() => {
    // Optimize animations on scroll
    const scrollPos = window.scrollY;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });
}, 10));

// ==================== THEME TOGGLE (Optional Enhancement) ====================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Initialize theme
initThemeToggle();

// ==================== ACCESSIBILITY IMPROVEMENTS ====================
// Focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ==================== SERVICE WORKER REGISTRATION ====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('Service Worker registration failed:', err);
        });
    });
}

console.log('✅ All functions loaded and working correctly!');