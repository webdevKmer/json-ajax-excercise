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
        <small class="pet-specie"><em>${pet.species}</em></small>
        <h2>Foods</h2>
        <div class="food">
            <ul class="food-likes"><em>Likes</em>
            ${pet.foods.likes.map((item) => {
                return `<li>${item}</li>`
            }).join('')}
            </ul>
            <ul class="food-dislikes"><em>Dislikes</em>
            ${pet.foods.dislikes.map((item) => {
                return `<li>${item}</li>`
            }).join('')}
            </ul>
        </div>
        </article>
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