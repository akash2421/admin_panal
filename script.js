 const  sidemenu = document.querySelector("aside");
 const menuicon = document.querySelector("#menu-btn")
 const closeicon = document.querySelector("#close-btn");

 menuicon.addEventListener('click', () => {
    sidemenu.style.display = 'block'
 })

 closeicon.addEventListener('click', () => {
    sidemenu.style.display = 'none'
 })