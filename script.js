// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Update active class on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight * 0.25) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Mobile menu toggle
const sidebar = document.querySelector('.sidebar');
const showSidebarBtn = document.getElementById('showSidebarBtn');
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && !e.target.closest('.sidebar')) {
        sidebar.classList.add('hidden');
        showSidebarBtn.style.display = 'block';
    }
});

// Auto-close mobile menu on link click
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden');
            showSidebarBtn.style.display = 'block';
        }
    });
});

// Sidebar toggle button
document.getElementById('closeSidebarBtn').addEventListener('click', () => {
    sidebar.classList.add('hidden');
    showSidebarBtn.style.display = 'block';
});

showSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    showSidebarBtn.style.display = 'none';
});

// Message form toggle
document.getElementById('messageMeBtn').addEventListener('click', () => {
    document.getElementById('messageFormContainer').style.display = 'block';
});

document.getElementById('closeFormBtn').addEventListener('click', () => {
    document.getElementById('messageFormContainer').style.display = 'none';
});

// Message form submission
document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:gourabchowdhury16@gmail.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
    window.location.href = mailtoLink;

    document.getElementById('messageFormContainer').style.display = 'none';
});