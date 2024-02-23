var hamburgerBtn = document.querySelector(".hamburger-btn")
var dropDownMenu = document.querySelector(".hamburger-menu")


//Create a function to open and close the Hamburger menu
//'aria-expanded" starts true - set Attribute to true

hamburgerBtn.onclick = function() {
        // use classList to return the class-form as an array. 
    dropDownMenu.classList.toggle("show-menu") // use classList to return the class form as an array.
    //focus on button for event
    hamburgerBtn.focus()

    if (dropDownMenu.classList.contains("show-menu")){
        hamburgerBtn.setAttribute("aria-expanded", true); //true open menu
    } else {
        hamburgerBtn.setAttribute("aria-expanded", false); //false close menu  
    }
}  
    //close the dropdown menu when click off menu
document.body.onclick = function(e) {
    
    if (e.target === hamburgerBtn || dropDownMenu.contains(e.target))  {
        return }
    // use classList to return the class form as an array.
    dropDownMenu.classList.remove("show-menu") 
    
    //focus on button for event
    hamburgerBtn.focus()
    hamburgerBtn.setAttribute("aria-expanded", false);
}

document.onkeyup = function(e) {
    if (e.key !== "Escape")
    return
    hamburgerBtn.setAttribute("aria-expanded", false);
    dropDownMenu.classList.remove("show-menu") 
    hamburgerBtn.focus()
}

             
    



    










