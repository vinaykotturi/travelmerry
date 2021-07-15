let toggle = document.getElementById("toggle");
let links = document.getElementById('links');
let hero = document.getElementById('hero');
let close = document.getElementById('close');
let open = document.getElementById('open');

function showmenu() {
      function hamMenu() {
        hero.style.transform = 'translateY(216px)';
        links.style.zIndex = '0'; 
        close.style.display = 'block';
        open.style.display = 'none';
    }
    hamMenu();
    
}

function closeMenu() {
    function closeHam(){
        hero.style.transform = 'translateY(0px)';
        open.style.display = 'block';
        close.style.display = 'none';
    }
    closeHam();
}