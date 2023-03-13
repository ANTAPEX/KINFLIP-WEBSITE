let openNavDisplay = () =>
{
    document.querySelector('.navDisplay').style.display = 'block'
    document.querySelector('#openNavDisplay').style.width = '0px'
    document.querySelector('#closeNavDisplay').style.display = 'inline-block'
    document.querySelector('.body').style.height = '100vh'
    document.querySelector('.body').style.overflow = 'hidden'
}
let closeNavDisplay = () =>
{
    document.querySelector('.navDisplay').style.display = 'none'
    document.querySelector('#openNavDisplay').style.width = '1rem'
    document.querySelector('#closeNavDisplay').style.display = 'none'
    document.querySelector('.body').style.height = 'auto'
    document.querySelector('.body').style.overflow = 'auto'
}

// Register Drop down styles
let registerlinks = () =>
{
    var clicked = document.querySelector('.btn_list')
    if (clicked.style.display == 'none') {
        clicked.style.display = 'flex   ';
    }
    else {
        clicked.style.display = 'none';
    }
}

// Hamburger styles
let open_nav = () => 
{
    var clicked = document.querySelector('.nav_links')
    if (clicked.style.display != 'none')
    {
        clicked.style.display = 'none'
        
    }
    else
    {
        clicked.style.display = 'flex'
        clicked.style.flexDirection = 'column';
        clicked.style.justifyContent = 'center'
        clicked.style.alignItems = 'flex-start'
        clicked.style.gap = '20px';
        clicked.style.border = '1px solid var(--yellow)';
        clicked.style.padding = '12px 30px';
        clicked.style.width = '100%';
        clicked.style.height = '50vh';
        clicked.style.background = '#121212';
        clicked.style.position = 'absolute';
        clicked.style.left = '0';
        clicked.style.top = '90px';
    }
}

// Show FAQ answer
let arrowDown = (className) =>
{
    var clicked = document.querySelector("." + className + ' p')
    if (clicked.style.display != 'none') {
        clicked.style.display = 'none';
        document.querySelector("." + className + ' .chevron').style.transform = 'rotate(360deg)';
    }
    else{
        clicked.style.display = 'block';
        document.querySelector("." + className + ' .chevron').style.transform = 'rotate(90deg)';
    }
}


// Adding the countdown functionality
let eventDate = new Date('May 20, 2023 12:00:00').getTime(); // This is sample date - it can be changed

let countdown = setInterval(() => {
    let now = new Date().getTime(); 

    let left = eventDate - now;
    
    var days = Math.floor(left / (1000 * 60 * 60 * 24));
    var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((left % (1000 * 60)) / 1000);

    // Updating the time on THE faqs page
    let diff = (days) + " " + (hours) + " " + (minutes);;
    
    let timeleft = diff.split(" ")

    let day = timeleft[0];
    document.querySelector(".a").textContent = day[0];
    document.querySelector(".b").textContent = day[1];

    let hour = timeleft[1];
    document.querySelector(".c").textContent = hour[0];
    document.querySelector(".d").textContent = hour[1];

    let min = timeleft[2];
    document.querySelector(".e").textContent = min[0];
    document.querySelector(".f").textContent = min[1];
}, 1000);