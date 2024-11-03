document.addEventListener('DOMContentLoaded', () => {  
    const navbarToggle = document.getElementById('navbar-toggle');  
    const navbarMenu = document.querySelector('.navbar-menu');  
  
    navbarToggle.addEventListener('click', () => {  
        navbarMenu.classList.toggle('active');  
    });  
});
