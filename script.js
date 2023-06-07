let search = document.querySelector('.searchbar');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    admin.classList.remove('active');
    register.classList.remove('active');
    shipping.classList.remove('active');
}



let favorite = document.querySelector('.favorite');

document.querySelector('#favorite').onclick = () => {
    favorite.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    admin.classList.remove('active');
    register.classList.remove('active');
    shipping.classList.remove('active');
}



let checkout = document.querySelector('.checkout');

document.querySelector('#checkout').onclick = () => {
    checkout.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    login.classList.remove('active');
    admin.classList.remove('active');
    register.classList.remove('active');
    shipping.classList.remove('active');
}


let login = document.querySelector('.login');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    admin.classList.remove('active');
    register.classList.remove('active');
    shipping.classList.remove('active');
}


let admin = document.querySelector('.admin');

document.querySelector('#admin').onclick = () => {
    admin.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    register.classList.remove('active');
    shipping.classList.remove('active');
}



let register = document.querySelector('.register');

document.querySelector('#register').onclick = () => {
    register.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    admin.classList.remove('active');
    shipping.classList.remove('active');


}




let shipping = document.querySelector('.shipping');

document.querySelector('#shipping').onclick = () => {
    shipping.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    admin.classList.remove('active');
    register.classList.remove('active');


}








window.onscroll = () => {
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
    admin.classList.remove('active');
    register.classList.remove('active');
    shipping.classList.remove('active');
}