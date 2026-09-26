document.addEventListener('DOMContentLoaded', function () {

    /* ==========================================
       1. CENTRALIZED CHECKOUT LINK MANAGEMENT
       ========================================== */
    const checkoutURL = "https://hop.clickbank.net/?affiliate=pshree786&vendor=jointgen&v=cb&tid=carti";
    
    // Target ONLY links with the class 'checkout-btn'
    const ctaButtons = document.querySelectorAll('.checkout-btn');
    
    ctaButtons.forEach(function(btn) {
        // 1. Force href to void so the long URL never shows on hover
        btn.setAttribute('href', 'javascript:void(0)');
        
        // 2. Intercept the click and redirect
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // Stops any default browser action
            
            // Debug line: Open browser Console (F12) to see if this prints
            console.log("CTA Clicked! Redirecting to:", checkoutURL); 
            
            // Redirect in the same tab
            window.location.href = checkoutURL; 
        });
    });

    /* ==========================================
       2. FAQ ACCORDION (single open)
       ========================================== */
    document.querySelectorAll('.fq').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.parentElement, wasOpen = item.classList.contains('open');
            document.querySelectorAll('.fitem').forEach(function (i) {
                i.classList.remove('open');
                i.querySelector('.fq').setAttribute('aria-expanded', 'false');
            });
            if (!wasOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
        });
    });

    /* ==========================================
       3. MOBILE MENU
       ========================================== */
    var tog = document.querySelector('.mtog');
    if (tog) tog.addEventListener('click', function () {
        document.getElementById('mainNav').classList.toggle('open');
    });

    /* ==========================================
       4. SMOOTH SCROLL + CLOSE MENU
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = a.getAttribute('href');
            // Ignore empty hashes to prevent top-of-page jumps
            if (href === '#') return;
            
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ 
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80, 
                    behavior: 'smooth' 
                });
                var nav = document.getElementById('mainNav');
                if (nav) nav.classList.remove('open');
            }
        });
    });

    /* ==========================================
       5. HEADER SHADOW ON SCROLL
       ========================================== */
    var header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(27,58,47,0.08)' : 'none';
        });
    }
});