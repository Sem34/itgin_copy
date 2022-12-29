/* Template Name: Cristino - Responsive Personal Template
   Author: Cruxthemes
   Email: cruxthemes@gmail.com
   Website: http://www.cruxtab.com
   Version: 1.5.0
   Created: May 2020
   File Description: Main JS file of the template
*/

/************************/
/*       INDEX          */
/*=======================
 *  01.  Loader         *
 *  02.  Menu           *
 *  03.  Scrollspy      *
 *  04.  Magnific Popup *
 *  05.  Owl Carousel   *
 *  06.  Back to top    *
 *  07.  Feather Icon   *
 =======================*/

// Preloader
window.onload = function loader() {
    setTimeout(() => {
        document.getElementById('preloader').style.visibility = 'hidden';
        document.getElementById('preloader').style.opacity = '0';
    }, 350);
}



// Menu sticky
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        console.log(document.body.scrollTop);
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Feather icon
feather.replace()

//custom changes 10.11.2022
let btnWeb = document.querySelector('.btn_web');
let btnLang = document.querySelector('.btn_lang');
let btnOther = document.querySelector('.btn_other');

let tableCloud = document.getElementById('pills-cloud');
let tableLang = document.getElementById('pills-smart');
let tableOther = document.getElementById('pills-apps');

btnLang.onclick = function () {
    btnWeb.classList.remove('active');
    btnLang.classList.add('active');
    tableCloud.classList.remove('active');
    tableCloud.classList.remove('show');
    tableLang.classList.add('show');
    tableLang.classList.add('active');
    btnOther.classList.remove('active');
    tableOther.classList.remove('show');
    tableOther.classList.remove('active');

};

btnWeb.onclick = function () {
    btnWeb.classList.add('active');
    btnLang.classList.remove('active');
    tableCloud.classList.add('show');
    tableCloud.classList.add('active');
    tableLang.classList.remove('active');
    tableLang.classList.remove('show');
    btnOther.classList.remove('active');
    tableOther.classList.remove('show');
    tableOther.classList.remove('active');
};
btnOther.onclick = function () {
    btnOther.classList.add('active');
    btnLang.classList.remove('active');
    btnWeb.classList.remove('active');
    tableOther.classList.add('active');
    tableOther.classList.add('show');
    tableLang.classList.remove('active');
    tableLang.classList.remove('show');
    tableCloud.classList.remove('active');
    tableCloud.classList.remove('show');
}
