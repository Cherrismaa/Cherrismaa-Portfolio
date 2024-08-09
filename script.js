<script>
    document.addEventListener('DOMContentLoaded', () => {
        const navControls = document.querySelectorAll('.nav-control');
        const sections = document.querySelectorAll('section, footer');

        navControls.forEach(control => {
            control.addEventListener('click', () => {
                const targetId = control.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                        behavior: 'smooth'
                    });

                    // Update active navigation control
                    navControls.forEach(nav => nav.classList.remove('active-nav'));
                    control.classList.add('active-nav');
                }
            });
        });
    });
</script>
