//Sticky Menu
const menuWrapper=document.querySelector('.menu__wrapper')
window.onscroll=()=>{
    if(window.pageYOffset>=50){
        menuWrapper.classList.add('fixed-top','fadeInDown');
    }else{
        menuWrapper.classList.remove('fixed-top','fadeInDown');
    }
    
}   

//Scroll Spy

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#main'
  })

  var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})