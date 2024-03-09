const toggler = document.querySelector('.btn');
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
    document.querySelector(".hamburger").classList.toggle("is-active");
})