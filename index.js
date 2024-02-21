var hamburgerBtn = document.querySelector(".hamburger-btn")
var menu = document.querySelector(".menu")
var dropDownMenu = document.querySelector(".hamburger-menu")


//Create a function to open and close the Hamburger menu
//'aria-expanded" starts true - set Attribute to true

function openClose (e) {
        // use classList to return the class-form as an array. 
    dropDownMenu.classList.toggle("show-menu") // use classList to return the class form as an array.
    //focus on button for event
    hamburgerBtn.focus()

    if (dropDownMenu.classList.contains("show-menu")){
        //document.body.addEventListener('click', clickAnywhere,true)
        hamburgerBtn.setAttribute("aria-expanded", true); //true open menu
    } else {
        hamburgerBtn.setAttribute("aria-expanded", false); //false close menu
        //document.body.addEventListener('click', onClick, false)
    }
}  
hamburgerBtn.onclick = openClose
console.log('submited')

function clickAnywhere(e) {
    //if (hamburgerBtn.getAttribute('aria-expanded') == true) {
    if (e.target.classList.contains("menu")) {
    //if (e.target.classList.contains("hamburgerBtn")) {
   console.log(e.target, 'was clicked')
    //}
    } else {
    dropDownMenu.classList.toggle("show-menu") // use classList to return the class form as an array.
    //focus on button for event
    hamburgerBtn.focus()
        hamburgerBtn.setAttribute("aria-expanded", false);
        //document.body.removeEventListener('click', clickAnywhere, true)
    
    }
}




    










