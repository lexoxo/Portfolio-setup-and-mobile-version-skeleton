function toogleNavBar() {
    const nav = document.getElementById('nav');
    if (nav.style.display !== 'none') nav.style.display = 'none';
    else nav.style.display = 'flex'
}

let links = document.querySelectorAll('.hamburger-menu a');
for( let i =0; i< links.length; i++) links[i].addEventListener('click',toogleNavBar);
document.querySelector('.close').addEventListener('click',toogleNavBar);
document.querySelector('.mob-menu img').addEventListener('click',toogleNavBar);