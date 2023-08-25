const menuMobileButtonOpen01 = document.getElementById('menuMobileButtonOpen01')
const menuMobileButtonOpen02 = document.getElementById('menuMobileButtonOpen02')
const menuMobileButtonOpen03 = document.getElementById('menuMobileButtonOpen03')
const navClick = document.querySelector('nav')
let open = true;
function openMenuMobile() {
    if (open == true) {
        menuMobileButtonOpen01.style.transform = 'rotate(45deg)'
        menuMobileButtonOpen02.style.display = 'none';
        menuMobileButtonOpen03.style.transform = 'rotate(-45deg)'
        menuMobileButtonOpen03.style.marginTop = '-5px';
        navClick.style.opacity = '1';
        open = false;
    } else {
        menuMobileButtonOpen01.style.transform = 'rotate(0deg)'
        menuMobileButtonOpen02.style.display = 'block';
        menuMobileButtonOpen03.style.transform = 'rotate(0deg)'
        menuMobileButtonOpen03.style.marginTop = '2px';
        navClick.style.opacity = '0';
        open = true;
    }
}
/* alert('Open menu'); */