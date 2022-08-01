let navbar =document.querySelector(".navbar")
window.onscroll =() =>{
    if (scrollY >=700) {
        navbar.classList.add("fixed-top")        
    }
    else{
        navbar.classList.remove("fixed-top") 
    }
}