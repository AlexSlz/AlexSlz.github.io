const menu = document.querySelector('#nav_btn_mobile')
const menuLinks = document.querySelectorAll('.nav_mobile')

menu.addEventListener('click', function() {

    if(menu.classList.value == "fa fa-bars") {
        menu.className = "fa fa-times";
    }else {
        menu.className = "fa fa-bars";
    }


    for (i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.toggle('open');
    }
});

