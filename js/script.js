const container = document.querySelector('.container')
const select = document.querySelector('#qtd')
let pokemonCount = 0

const mudarValor = () => {
    pokemonCount = Number(select.options[select.selectedIndex].value)
    container.innerHTML = "";
    fetchPokemons()
}


const getPokemons = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIResponse.json()
    createCard(data)
}

const createCard = (pokemonData) => {
    const data = pokemonData
    const card = document.createElement('article')
    card.setAttribute('class', 'card')
    const pokeCard = `
        <img class="card-image" src="${data['sprites']['front_default']}" alt="${data['name']}">
        <div class="card-text">
            <span class="id">#${data.id}</span>
            <h3 class="name">${data.name.toUpperCase().slice(0, 1) + data.name.slice(1)}</h3>
        </div>
        `
    card.innerHTML = pokeCard
    container.appendChild(card)
}

const fetchPokemons = async () => {
    for (let i = 1; i < pokemonCount + 1; i++){
        await getPokemons(i)
    }
}