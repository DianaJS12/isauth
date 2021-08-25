const base = JSON.parse(localStorage.getItem('SingleUser'))
const title = document.querySelector('.title')
const container = document.querySelector('.center-block')

const temp = base.map(({name , image}) =>{
    container.innerHTML = `
    <div class="card">
        <div class="card-image">
            <img src="${image}" alt="">
        </div>
        <div class="card-body">
            <h2>${name}</h2>

        </div>
    </div>
    `

    title.innerHTML = name
})