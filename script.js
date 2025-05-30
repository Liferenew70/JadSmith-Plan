// bienvenue
  window.addEventListener("load", function () {
    setTimeout(() => {
      // Masquer le préloader
      const preloader = document.getElementById("preloader-text");
      preloader.style.display = "none";

      // Afficher le message de bienvenue
      const welcome = document.getElementById("welcome-message");
      welcome.style.opacity = "1";

      // Le masquer après 3 secondes
      setTimeout(() => {
        welcome.style.opacity = "0";
      }, 3000);
    }, 2500);
  });



// Preloader functionality
  window.addEventListener("load", function () {
    setTimeout(() => {
      const preloader = document.getElementById("preloader-text");
      preloader.style.display = "none";
    }, 2500); // un peu plus que l'animation pour garantir le retrait
  });

document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 70; // Adjust for fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Toggle sections
    document.querySelectorAll('.toggle-section').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            const icon = this.querySelector('i');
            
            if (target.style.display === 'none') {
                target.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
                this.textContent = ' Réduire';
                this.prepend(icon);
            } else {
                target.style.display = 'none';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
                this.textContent = ' Développer';
                this.prepend(icon);
            }
        });
    });

    // Dark/Light mode toggle
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
    
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
        localStorage.setItem('darkMode', 'enabled');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
        localStorage.setItem('darkMode', 'disabled');
    }

    // Level cards interaction
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            const allCards = document.querySelectorAll(`.level-card[data-level="${level}"]`);
            
            // Reset all cards of this level
            document.querySelectorAll('.level-card').forEach(c => {
                c.classList.remove('border-primary', 'border-3');
            });
            
            // Highlight clicked card and others of same level
            allCards.forEach(c => {
                c.classList.add('border-primary', 'border-3');
            });
        });
    });

    // Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Format mailto link
        const mailtoLink = `mailto:afterbac2K24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        // Alerte et redirection
        alert("Vous serez dirigé vers Gmail pour finaliser l'envoi.");
        window.location.href = mailtoLink;

        // Optionnel : réinitialiser le formulaire
        contactForm.reset();
    });
}


    // Add fade-in animation to sections as they appear
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});