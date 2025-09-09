const navButton = document.querySelector("#ham-btn");

//Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    //CODE TO THE NAVIGATION BAR
    navBar.classList.toggle('show');
})

// CODE FOR THE NAVIGATION BAR
const navBar = document.querySelector('#nav-bar');