function PopupMenu(){
    const button = document.getElementById('MobileMenu')
    const menu = document.getElementById('menu')

    button.classList.toggle('active')
    menu.classList.toggle('active')
}