//Sticky Menu
const menuWrapper=document.querySelector('.menu__wrapper')
window.onscroll=()=>{
    if(window.pageYOffset>=50){
        menuWrapper.classList.add('fixed-top','fadeInDown');
    }else{
        menuWrapper.classList.remove('fixed-top','fadeInDown');
    }
    
}   
