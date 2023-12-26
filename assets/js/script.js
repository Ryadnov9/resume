function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
}
var mobileMenuItems = document.querySelectorAll('.mobile-menu a');
            mobileMenuItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    var mobileMenu = document.querySelector('.mobile-menu');
                    mobileMenu.style.display = 'none';
                });
            });
            
            document.addEventListener("DOMContentLoaded", function () {
                // Smooth scroll for internal links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
        
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });
            });