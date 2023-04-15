const pokemonName = document.querySelector('.pokemon__name')
const pokemonNum = document.querySelector('.pokemon__nunber')
const pokemonIMG = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const inp = document.querySelector('.input__search')


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data =  await APIResponse.json();
    return data;
}
const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNum.innerHTML = data.id;
    pokemonIMG.src = data['sprites']['versions']['generation-v']['black-white']["animated"]['front_default']

}

form.addEventListener("submit", (event) => {

    event.preventDefault();
    renderPokemon(inp.value.toLowerCase())
    inp.value = "";

});