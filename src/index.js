console.log('%c HI', 'color: firebrick')
fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => response.json())
    .then((data) => {
        const container = document.getElementById("dog-image-container")
        data.message.forEach((url) => {
            const image = document.createElement("img")
            image.src = url
            container.appendChild(image)
        })   
    })
    .catch((err) => console.error(err))

fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
        const list = document.getElementById("dog-breeds")
        const keys = Object.keys(data.message)
        keys.forEach((url) => {
            const li = document.createElement("li")
            li.innerText = url
            li.addEventListener('click', () => {
            li.style.color = "blue" 
            })
            list.appendChild(li)
        })
    })
    .catch((err) => console.error(err))



// fetch GETs data at the url passed in the first argument; returns a promise
// if promise fails -> catch -> console.error(error)
// if promise resolves, pass in json and parse to javascript; return that javascript
// do something with data