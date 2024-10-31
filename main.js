// Initialize Lucide icons
lucide.createIcons();

// Navigation
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});

// Projects Data
const projects = [
    {
        title: 'Artist Website',
        description: 'A Beautifully designed Website For a Client',
        image: './Assets/art.png',
        tags: ['HTML', 'JavaScript', 'CSS', 'Git'],
        liveUrl: 'https://thusrnx.vercel.app/index.html',
        githubUrl: 'https://github.com/khalidev18/Afute_Art_Website'
    },
    {
        title: 'Bank Landing Page',
        description: 'A Bank Website Made For Seamless User Experience',
        image: './Assets/elysium.png',
        tags: ['HTML', 'JavaScript', 'CSS', 'Git'],
        liveUrl: 'https://elysium-bank.vercel.app/',
        githubUrl: 'https://github.com/khalidev18/Bank-Landing-page'
    },
    {
        title: 'Task Management App',
        description: 'Real-time task management application with collaborative features',
        image: './Assets/task.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
        liveUrl: 'https://task-management-main.vercel.app/',
        githubUrl: 'https://github.com/khalidev18/Task_management_app'
    },
    {
        title: 'Todo List App',
        description: 'Super Useful TodoList App That Saves Your Data With Local Storage',
        image: './Assets/todolist.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma'],
        liveUrl: 'https://my-todo-list-app-rust.vercel.app/',
        githubUrl: 'https://github.com/khalidev18/My-Todo-List-app'
    },
    {
        title: 'Modern Weather Application',
        description: 'Responsive weather App that imports its data from CORS API',
        image: './Assets/weather.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma'],
        liveUrl: 'https://weather-app-kz.netlify.app/',
        githubUrl: 'https://github.com/khalidev18/My-weather-app'
    },
    {
        title: 'Burger Resturant Website',
        description: 'A Beautiful Burger House Website Fit For The Grandest Burger King',
        image: './Assets/burger house.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma'],
        liveUrl: 'https://my-burger-website.vercel.app/',
        githubUrl: 'https://github.com/khalidev18/my-burger-website'
    }
];

// Render Projects
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectHTML = `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <a href="${project.liveUrl}" class="btn btn-primary" target="_blank">
                        <i data-lucide="external-link"></i>
                    </a>
                    <a href="${project.githubUrl}" class="btn btn-primary" target="_blank">
                        <i data-lucide="github"></i>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    projectsGrid.insertAdjacentHTML('beforeend', projectHTML);
});

// Skills Data
const skills = [
    {
        category: 'Frontend Development',
        icon: 'layout',
        items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'JavaScript']
    },
    {
        category: 'Backend Development',
        icon: 'server',
        items: ['Node.js','PhP']
    },
    {
        category: 'Database',
        icon: 'database',
        items: ['mySQL', 'Firebase']
    },
    {
        category: 'DevOps & Tools',
        icon: 'settings',
        items: ['Git', 'Github', 'Figma', 'Netlify', 'vercel',]
    }
];

// Render Skills
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    const skillHTML = `
        <div class="skill-card">
            <div class="skill-header">
                <i data-lucide="${skill.icon}" class="skill-icon"></i>
                <h3 class="skill-title">${skill.category}</h3>
            </div>
            <div class="skill-list">
                ${skill.items.map(item => `<span class="tag">${item}</span>`).join('')}
            </div>
        </div>
    `;
    skillsGrid.insertAdjacentHTML('beforeend', skillHTML);
});

// Experience Data
const experiences = [
    {
        title: 'Frontend Developer',
        company: 'Hazeezah Stores Ltd.',
        period: '2022 - 2023',
        description: 'Developed responsive web applications and improved performance metrics by 40%.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Git',]
    },
    {
        title: 'Freelancer',
        company: '',
        period: '2022 - Present',
        description: 'Built and maintained multiple client projects using modern web technologies.',
        technologies:  ['HTML', 'CSS', 'JavaScript', 'Git','PHP','mySql']
    }
];

// Render Experience
const timeline = document.querySelector('.timeline');
experiences.forEach(exp => {
    const expHTML = `
        <div class="timeline-item">
            <div class="timeline-header">
                <div>
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div class="timeline-company">
                        <i data-lucide="briefcase"></i>
                        ${exp.company}
                    </div>
                </div>
                <div class="timeline-period">
                    <i data-lucide="calendar"></i>
                    ${exp.period}
                </div>
            </div>
            <p class="timeline-description">${exp.description}</p>
            <div class="project-tags">
                ${exp.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    timeline.insertAdjacentHTML('beforeend', expHTML);
});

// Initialize Lucide icons after dynamic content
lucide.createIcons();

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});