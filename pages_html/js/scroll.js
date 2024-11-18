let lastScroll = 0; //Track the last scroll position
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Get the current scroll position
    if (currentScroll > lastScroll) {
        // If the scroll position is greater than the last scroll position, hide the header
        header.classList.remove('show');
    } else {
        // If the scroll position is less than or equal to the last scroll position, show the header
        header.classList.add('show');
    }
    lastScroll = currentScroll; // Update the last scroll position
});