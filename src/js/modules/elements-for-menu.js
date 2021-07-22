const mainMenuSelector = document.querySelector('.nav-list');

const mainMenuElements = ["PSD WEBSITES", "UI KITS", "PREMIUM PSD FILES", "ABOUT", "BLOG"];
const displayMenuElements = function(elements) {
    elements.forEach(element => {
        const htmlForMenu = `
        <li> 
        <a class="main-menu-element"> ${element} </a>
        </li>
        `;
        mainMenuSelector.insertAdjacentHTML("beforeend",htmlForMenu);
    });
}
displayMenuElements(mainMenuElements);
console.log(mainMenuElements);

let isOpen = false;
const btnHamburger = document.querySelector('.btn-hamburger');
const blackNavBtn = document.querySelector('.black-nav-button');
const ulMEnuItems = document.querySelector('.nav-list');

const onOpenMenu = () => {
    btnHamburger.addEventListener('click', () => { 
       if(!isOpen) {
        ulMEnuItems.style.display = 'block';
        ulMEnuItems.style.width = '40%';
        ulMEnuItems.style.padding = '20px';
        blackNavBtn.style.backgroundColor = '#202529';
        btnHamburger.style.backgroundColor = '#202529';
        btnHamburger.classList.add('change');
        isOpen = true;
       }
       else {
        ulMEnuItems.style.display = 'none';
        blackNavBtn.style.backgroundColor = '#373c3f';
        btnHamburger.style.backgroundColor = '#373c3f';
        btnHamburger.classList.remove('change');
        isOpen = false;
       }
    });
}
export default onOpenMenu;





