const firstAnimals = "https://learnwebcode.github.io/json-example/animals-1.json"
const secondAnimals = "https://learnwebcode.github.io/json-example/animals-2.json"

let petList = document.querySelector('.pet-list')
const petName = document.querySelector('.pet-name')
const petSpecie = document.querySelector('.pet-specie')
const foodLikes = document.querySelector('.food-likes')
const foodDislikes = document.querySelector('.food-dislikes')
const loadPetsBtn = document.querySelector('#load-pets')

const loadData = async (link) => {
    const response = await fetch(link)
    const data = await response.json()
    data.forEach(pet => {
        let newPetHTML = `
        <article class="pet">
        <h1 class="pet-name">${pet.name}</h1>
        <small class="pet-specie">${pet.species}</small>
        <h2>Foods</h2>
        <ul class="food-likes">Likes
        ${pet.foods.likes.map((item) => {
            return `<li>${item}</li>`
        }).join('')}
        </ul>
        <ul class="food-dislikes">Dislikes
        ${pet.foods.dislikes.map((item) => {
            return `<li>${item}</li>`
        }).join('')}
        </ul>
        </article>
        <hr>
    `
    petList.innerHTML += newPetHTML
    });
}

let counter = 0
loadPetsBtn.addEventListener('click', () => {
    counter++
    if(counter>=3){
        loadPetsBtn.style.display = "none"
    }
    loadData(`https://learnwebcode.github.io/json-example/animals-${counter}.json`)
    console.log(counter);
})