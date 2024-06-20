document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling when clicking on navigation links
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Function to set active link based on scroll position
    function setActiveLink() {
        const fromTop = window.scrollY + 100;

        // Remove active class from all links
        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the appropriate link based on scroll position
        document.querySelectorAll('.section').forEach(section => {
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                const navLink = document.querySelector(`#navbar a[href="#${section.id}"]`);
                navLink.classList.add('active');
            }
        });
    }

    // Function to handle hover effect and set active menu item on hover
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });

        anchor.addEventListener('mouseleave', function() {
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            // Check if the corresponding section is not in view
            if (!(section.offsetTop <= window.scrollY + 100 &&
                section.offsetTop + section.offsetHeight > window.scrollY + 100)) {
                this.classList.remove('active');
            }
        });
    });

    // Set active link initially
    setActiveLink();

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);
});
