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
let registerDropdown = () =>
{
    document.querySelector('.dropdown').style.display = 'block'
}
let closeAllNavDropdown = () =>
{
    document.querySelector('.dropdown').style.display = 'none'
}