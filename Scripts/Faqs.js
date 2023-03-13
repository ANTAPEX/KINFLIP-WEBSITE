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