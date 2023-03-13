var logins = document.querySelectorAll('.login')
var signups = document.querySelectorAll('.signup')
var wrp_1 = document.querySelector('.wrapper_1')
var wrp_2 = document.querySelector('.wrapper_2')
var icon_login = document.querySelector('.icon__login')
var cls = document.querySelector('.close')

wrp_1.style.display = 'none'
wrp_2.style.display = 'none'
cls.style.display = 'none'


icon_login.addEventListener('click', function () {
    wrp_1.style.display = 'block'
    cls.style.display = 'block'
    if (wrp_1.style.display = 'block') {
        wrp_2.style.display = 'none'
    } else if (wrp_1.style.display = 'none') {
        wrp_2.style.display = 'block'
    }
})

cls.addEventListener('click', function () {
    wrp_1.style.display = 'none'
    wrp_2.style.display = 'none'
    cls.style.display = 'none'
})

logins.forEach(function (login) {
    login.addEventListener('click', function () {
        wrp_2.style.display = 'none'
        wrp_1.style.display = 'block'
    })
})

signups.forEach(function (signup) {
    signup.addEventListener('click', function () {
        wrp_1.style.display = 'none'
        wrp_2.style.display = 'block'
    })
})



