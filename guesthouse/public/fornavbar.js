// this is to add a dropdown to the user badge
document.getElementById('user-menu-button').addEventListener('click', function() {
    const menu = document.querySelector('[role="menu"]');
    menu.addEventListener('click',()=>{
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden', 'opacity-0', 'scale-95');
            menu.classList.add('opacity-100', 'scale-100');
        } else {
            menu.classList.remove('opacity-100', 'scale-100');
            menu.classList.add('hidden', 'opacity-0', 'scale-95');
        }
    });
});