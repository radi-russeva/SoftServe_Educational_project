const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
var rootElement = document.documentElement;
const scrollToTop = () => {
    scrollToTopBtn.addEventListener('click', () => {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })
    });
}

export default scrollToTop;
