# Pokedex-PokeAPI

## Olá Mundo!!!👋




### Como foi feito:

- 🤔 Com o uso de JavaScript, eu contrui uma Pokedex que utiliza a API PokeApi para buscar informações sobre Pokemons. Para lidar com requisições assíncronas, estou utilizando funções assíncronas para conectar minha Pokedex com a API.

A função fetchPokemon é responsável por buscar as informações do Pokemon requisitado através da API PokeApi. Essa função utiliza o método fetch, que retorna uma Promise com a resposta da API. O método await é usado para aguardar o resultado dessa Promise, e o método json é chamado na resposta para converter o resultado em um objeto JSON.

A função renderPokemon é responsável por atualizar as informações do Pokemon no HTML da página, usando os dados recebidos da função fetchPokemon. Essa função atualiza a imagem, nome e número do Pokemon, usando os respectivos elementos do HTML.

Para buscar um Pokemon, é adicionado um ouvinte de eventos ao formulário da minha Pokedex, que é acionado quando o formulário é enviado. Quando o formulário é enviado, o valor inserido no campo de entrada é passado como argumento para a função renderPokemon.

Ao utilizar essa abordagem assíncrona, estou garantindo que a minha Pokedex possa lidar com requisições para a API de forma mais eficiente e segura, sem bloquear a interface do usuário. Além disso, o uso de funções assíncronas e Promises torna o código mais legível e fácil de manter no futuro.

- ⚡ Link para o site : [Pokedex](https://rianandrade.github.io/Pokedex-Com-PokeAPI/)


## Modelo:

<div align="center">
  <img src="https://github.com/RianAndrade/Pokedex-Com-PokeAPI/blob/main/images/pokedexModelo.png"  width="500"/>
</div>


### Redes Socias Para Contato: 
***

<div align="center">
<a href="https://www.instagram.com/riangabriel_rg_hk/?next=%2F" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:riangabrieldev@gmail.com?Subject=Ol%E1%2C%20te%20achei%20pelo%20seu%20Git"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/rian-andrade-52489425b/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
  </div>
