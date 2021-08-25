const name = document.querySelector('.name')
const image = document.querySelector('#image')
const button = document.querySelector('.submit')
const container = document.querySelector('.card-result')
const signout = document.querySelector('.signout')

window.addEventListener('load' , () =>{
    if(!localStorage.getItem('user')){
        localStorage.setItem('user' , JSON.stringify([]))
    }else{
        const data = JSON.parse(localStorage.getItem('user'))

        

        const newdatawithid  = data.map((item , index) =>{
            return{
                ...item,
                id:index
            }
        })
        localStorage.setItem('user' , JSON.stringify([...newdatawithid]))

        const newdata = JSON.parse(localStorage.getItem('user'))

        console.log(newdata);

        const template = newdata.reduce((total , {name , image , id}) =>{
            return total + cardtemplate(name , image , id)
        }, ' ')

        container.innerHTML = template
    }
})

button.addEventListener('click' , e =>{
    e.preventDefault()

    if(name.value !== '' && image.value !== ''){
        const user = JSON.parse(localStorage.getItem('user'))
        localStorage.setItem('user' ,JSON.stringify(
            [
                ...user,
                {
                    name:name.value,
                    image:image.value
                }

            ]
        ))
    }
    window.location.reload()
})


function cardtemplate(name , image , id){
    return `
    <div class="card-person">
        <div class="card-center">
            <img src="${image}" alt="">
            <i>${name}</i>
            <div class="tools">
                <i class="fas fa-user-edit " data-id="${id}" onclick ="Edit(${id})"></i>
                <i class="fas fa-trash" data-id="${id}" onclick ="Delete(${id})"></i>
                <i class="fas fa-caret-square-down" data-id="${id}" onclick ="  More(${id})"></i>
            </div>
        </div>
    </div>
    `
}

function Delete(id){
    const base = JSON.parse(localStorage.getItem('user'))

    const DeletedBase = base.filter(item => item.id !==id)

    localStorage.setItem('user' , JSON.stringify([...DeletedBase]))
    window.location.reload()
}


function Edit(id){
    const base = JSON.parse(localStorage.getItem('user'))

    const filtered = base.map(item =>{
        if(item.id === id){
            return {
                ...item,
                name:prompt('new name')
            }
        }else{
            return item
        }
    })
    localStorage.setItem('user' , JSON.stringify([...filtered]))
    window.location.reload()
}

function More(id){
    const base =JSON.parse(localStorage.getItem('user'))
    localStorage.setItem('SingleUser' , JSON.stringify([base[id]]))

    window.open('single.html' , '_self')
}


window.addEventListener('load' , () =>{
    if(localStorage.getItem('isauth' === 'false')){
        window.open('auth.html' , '_self')
    }else{
        return
    }
})


signout.addEventListener('click' , e =>{
    e.preventDefault()

    localStorage.setItem('isauth' , 'false')
    window.location.reload()
})