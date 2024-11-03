// script.js  
const translations = {  
    en: {  
        title: "hooks1's website",  
        link: "y bilibili personal space"  
    },  
    zh: {  
        title: "hooks1的网站",  
        link: "我的bilibili个人空间"  
    }  
};  
  
function changeLanguage(lang) {  
    document.getElementById('title').textContent = translations[lang].title;  
    document.getElementById('description').textContent = translations[lang].description;  
}
document.addEventListener('DOMContentLoaded', () => {  
    const navbarToggle = document.getElementById('navbar-toggle');  
    const navbarMenu = document.querySelector('.navbar-menu');  
  
    navbarToggle.addEventListener('click', () => {  
        navbarMenu.classList.toggle('active');  
    });  
});
