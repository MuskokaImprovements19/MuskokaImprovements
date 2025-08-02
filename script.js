// Function to ensure page starts at the top after reload
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function() {
    // Immediately set the page to the top without scrolling
    window.scrollTo(0, 0);
    setTimeout(() => { window.scrollTo(0, 0); }, 1);

    // Intersection Observer for video autoplay (only relevant for index.html)
    const video = document.getElementById('home-video');
    if (video) {
        let videoWasPaused = false;

        video.addEventListener('pause', () => {
            videoWasPaused = true;
        });

        video.addEventListener('play', () => {
            videoWasPaused = false;
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !videoWasPaused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });

        observer.observe(video);

        if (video.getBoundingClientRect().top < window.innerHeight && !videoWasPaused) {
            video.play();
        }
    }

    // Ensure the page is scrolled to the top after it loads completely
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
    });

    // Show the appropriate footer based on the current page
    const isRealEstatePage = window.location.pathname.includes('real-estate.html');
    document.getElementById('footer').style.display = isRealEstatePage ? 'none' : 'flex';
    document.getElementById('footer-real-estate').style.display = isRealEstatePage ? 'flex' : 'none';
});

// Function to scroll to the bottom of the page
function scrollToBottom() {
    const footer = document.getElementById(window.location.pathname.includes('real-estate.html') ? 'footer-real-estate' : 'footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}