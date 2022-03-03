const menuBtn = document.querySelector('#menu-btn');

const menuList = document.querySelector('#menu-list');

menuBtn.onclick = () =>{
    menuList.classList.toggle('active');
    if(menuList.classList.contains('active')){
        menuBtn.classList.replace('fa-bars','fa-times');
    }else{
        menuBtn.classList.replace('fa-times','fa-bars');
    }
}

window.onscroll = () =>{
    menuList.classList.remove('active');
    if(menuList.classList.contains('active')){
        menuBtn.classList.replace('fa-bars','fa-times');
    }else{
        menuBtn.classList.replace('fa-times','fa-bars');
    }
}
