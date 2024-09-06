
function(pesquisar) {
    let section = document.getElementById ("resultados-pesquisa")
console.log (section);

let resultados = ""

for (let dado of dados){
resultados += `
<div class="item-resultado">
    <div>
            <h2>
                <a href="#" target="_blank"> $ {dado.titulo}</a>
            </h2>
            <p class="descricao-meta">$ {dado.descricao}</p>
            <a href= "${dado.link}" target="_blank" >Mais informações</a>
        </div>
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> Café Tropical</a>
            </h2>
            <p class="descricao-meta">Uma explosão de sabores tropicais em cada xícara! Nosso Café Tropical te transporta para paraísos quentes, com notas vibrantes de frutas exóticas como maracujá e abacaxi. Seu aroma intenso e sabor equilibrado fazem dele a escolha perfeita para quem busca uma experiência refrescante e vibrante.</p>
            <a href="https://www.mokaclube.com.br/produto/cafe-tropical-250g/" target="_blank" >Mais informações</a>
        </div>
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> Eldorado Geisha </a>
            </h2>
            <p class="descricao-meta">Descubra a raridade do café Geisha! Cultivado em microlotes e processado com o máximo cuidado, nosso Eldorado Geisha oferece uma experiência sensorial única. Com notas florais delicadas e um sabor complexo, este café é perfeito para os apreciadores mais exigentes.</p>
            <a href="https://www.mokaclube.com.br/produto/cafe-eldorado-geisha-250g/" target="_blank" >Mais informações</a>
        </div>
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> Bela Vista</a>
            </h2>
            <p class="descricao-meta">Este é o café da Fazenda Bela Vista, de Patrocínio-MG. Uma escolha duríssima, quase como ficar entre Ronaldo, Ronaldinho e Romário pra Copa. Um café que joga tranquilo, com vantagem no placar; que toca de lado e corre pro abraço calminho como camomila, lima e mel.</p>
            <a href="https://www.mokaclube.com.br/produto/cafe-bela-vista-250g/" target="_blank" >Mais informações</a>
        </div>
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> Café Fazenda</a>
            </h2>
            <p class="descricao-meta">Vindo de uma zona de cafés complexos, esse grão de maturação lenta entrega uma bebida que esbanja doçura. Seus sensoriais de frutas brancas, como cacau e cupuaçu, com o toque de acidez málica, formam o equilíbrio perfeito que pode ser sentido com extrema clareza no paladar. Beba.</p>
            <a href="https://www.mokaclube.com.br/produto/cafe-fazenda-serra-250g/" target="_blank" >Mais informações</a>
        </div>
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> Fazenda Rodomunho</a>
            </h2>
            <p class="descricao-meta">O café da Fazenda Rodomunho tem quatro gerações na lavoura. Gente que saiu da Itália em busca do café perfeito. Hoje, lá em Rio Parnaíba, no alto do Cerrado Mineiro, onde os ventos fabricam “mini tornados” no cafezal, eles cultivam mais de 20 variedades arábica e três espécies exóticas. Aventure-se por esse paraíso fermentado com seus sensoriais de uva e mel.</p>
            <a href="https://www.mokaclube.com.br/produto/cafe-fazenda-rodomunho-250g/" target="_blank" >Mais informações</a>
        </div>
        </div>
    `
    }

    section.innerHTML = resultados 

}
