const email = document.querySelector('.email')
const password = document.querySelector('.password')
const submit = document.querySelector('.submit')

submit.addEventListener('click' , e =>{
    e.preventDefault()

    if(email.value === '' && password.value === ''){
        alert('fill the areal')
    }

    if(email.value == 'admin' && password.value == 'admin'){
        localStorage.setItem('isauth' , 'true')
        window.open('index.html' , '_self')
    }else{
        localStorage.setItem('isauth' , 'false')
        email.value = ''
        password.value = ''
    }
})

window.addEventListener('load' , () =>{
    if(localStorage.getItem('isauth') === 'true'){
        window.open('index.html' , '_self')
    }else{
        return
    }
})