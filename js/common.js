// Load jQuery from CDN
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
script.integrity = 'sha256-/JqT3SQfawRcv/BIHPThkB1b7R3JZ6p3xj6q0Y9Q2Q=';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);



/**
 * Redirect /programs/ to /programs/diplomas/
 */
// function chellsey_programs_redirect() {
//     if ( is_page('programs') ) {
//         wp_safe_redirect( home_url('/programs/diplomas/'), 301 );
//         exit;
//     }
// }
// add_action('template_redirect', 'chellsey_programs_redirect');


// new code 
// Redirect /programs/ to /programs/diplomas/
if (
    window.location.pathname === '/programs/' ||
    window.location.pathname === '/programs'
) {
    window.location.replace('/programs/diplomas/');
}

// Redirect /admissions/ to /admissions/admissions-process/
if (
    window.location.pathname === '/admissions/' ||
    window.location.pathname === '/admissions'
) {
    window.location.replace('/admissions/admissions-process/');
}

// Redirect /spa-services/ to /spa-services/facial-treatment/
if (
    window.location.pathname === '/spa-services/' ||
    window.location.pathname === '/spa-services'
) {
    window.location.replace('/spa-services/facial-treatment/');
}

// document.addEventListener('DOMContentLoaded', function () {
//     const path = window.location.pathname.replace(/\/+$/, '');

//     if (path === '/spa-services') {
//         window.location.replace('/spa-services/facial-treatment/');
//     }
// });
