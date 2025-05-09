/*=============== SHOW MENU ===============*/
// Select DOM elements for the navigation menu, toggle, and close buttons
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Check if the navToggle element exists, then add a click event listener
if(navToggle){
    navToggle.addEventListener('click', () =>{
        // Add the 'show-menu' class to navMenu to display the menu
        navMenu.classList.add('show-menu')
    })
}

// Check if the navClose element exists, then add a click event listener
if(navClose){
    navClose.addEventListener('click', () =>{
        // Remove the 'show-menu' class from navMenu to hide the menu
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Select all navigation links
const navLink = document.querySelectorAll('.nav__link')

// Define a function to remove the 'show-menu' class when a nav link is clicked
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Hide the menu by removing the 'show-menu' class
    navMenu.classList.remove('show-menu')
}

// Attach click event listeners to each navigation link
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER HOME ===============*/ 
// Initialize Swiper instance for the home section with pagination settings
const swiperHome = new Swiper('.home__swiper', {
    pagination: {
        el: ".swiper-pagination",  // Selector for the pagination element
        clickable: true,           // Allow pagination bullets to be clickable
        // Custom rendering for pagination bullets
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
      },
    // Uncomment the following code to enable autoplay with a delay of 5000ms
    // autoplay: {
    //    delay: 5000
    // }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
// Function to change header background based on scroll position
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add 'bg-header' class if the scroll position is greater than 50 pixels
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}

// Attach scroll event listener to the window to trigger bgHeader function
window.addEventListener('scroll', bgHeader)

/*=============== SHOW SCROLL UP ===============*/ 
// Function to show or hide the scroll-up button based on scroll position
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // Add 'show-scroll' class if scrolled more than 350 pixels
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

// Attach scroll event listener to the window to trigger scrollUp function
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Select all sections with an ID for active link highlighting
const sections = document.querySelectorAll('section[id]')

// Function to highlight the active link based on scroll position
const scrollActive = () =>{
    const scrollDown = window.scrollY  // Get the current scroll position

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight, // Get the height of the section
              sectionTop = current.offsetTop - 58, // Calculate top position of the section with offset
              sectionId = current.getAttribute('id'), // Get the id of the current section
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') // Find corresponding nav link

        // If the current scroll position is within the section range, mark the link as active
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}

// Attach scroll event listener to the window to trigger scrollActive function
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Initialize ScrollReveal instance for revealing elements on scroll
const sr = ScrollReveal({
    origin: 'top',           // Set origin direction for the animation
    distance: '60px',       // Distance to move the element
    duration: 2000,         // Duration of the animation
    delay: 300,             // Delay before starting the animation
    // reset: true, // Uncomment to reset animations on scroll
})

// Define reveal animations for various elements in the home section
sr.reveal('.home__bg', {scale: 1.1, opacity: 1}) // Reveal background with scale and opacity effects
sr.reveal('.home__swiper', {origin: 'right', distance: '300px', delay: 800}) // Reveal swiper from the right
sr.reveal('.home__data', {origin: 'bottom', distance: '120px', delay: 1600}) // Reveal home data from the bottom
sr.reveal('.swiper-pagination-bullet', {origin: 'top', delay: 1800, opacity: 0}) // Reveal pagination bullets
sr.reveal('.home__button', {origin: 'top', delay: 2200}) // Reveal button from the top
sr.reveal('.about__data, .contact__content', {origin: 'left'}) // Reveal about and contact data from the left
sr.reveal('.about__video, .contact__img', {origin: 'right'}) // Reveal video and contact image from the right
sr.reveal('.models__card', {interval: 100}) // Reveal models cards with intervals
sr.reveal('.info__img', {distance: '120px'}) // Reveal info images with a distance effect
sr.reveal('.info__number', {origin: 'bottom', distance: '80px', delay: 800}) // Reveal numbers from the bottom
sr.reveal('.info__group', {interval: 100, delay: 1300}) // Reveal info group with intervals and delay
sr.reveal('.footer__container') // Reveal footer container
