function pesquisarAtletas() {
    // pesquisaAtleta(): Função responsável por renderizar os resultados da pesquisa de atletas na seção "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");
    let descricaoPesquisa = document.getElementById("input-nome-atleta").value.toLowerCase();
    let resultadoDadosDoAtleta = "";
    let tags = "";
    let titulo = "";
    let descricao = "";
    
    // Se descrição da pequisa diferente de nulo/branco/undefined
    // Itera sobre cada atleta nos dados da pesquisa.
    // Para cada atleta, cria um elemento HTML com as informações relevantes e adiciona ao HTML da seção de resultados.
    if (!descricaoPesquisa || stringEstaVaziaOuNula(descricaoPesquisa)) {
        resultadoDadosDoAtleta = `<p class="p-mensagem">Nenhum atleta encontrado com a descrição informada!`;
    } else {
        if (!stringEstaVaziaOuNula(descricaoPesquisa) && dadosAtletas.length > 0) {
            for (let dado of dadosAtletas) {
                console.log(descricaoPesquisa);
                console.log(dado.titulo);
                console.log(dadosAtletas);
                console.log(dado.resumo_descricao);
                tags = dado.tags.toLowerCase();
                titulo = dado.titulo.toLowerCase();
                descricao = dado.resumo_descricao.toLowerCase();
                // se titulo, tags ou descricao possui a descrição da pesquisa informada então e atribui valores ao resultados na section
                if (tags.includes(descricaoPesquisa) || titulo.includes(descricaoPesquisa) || descricao.includes(descricaoPesquisa)) {
                    resultadoDadosDoAtleta += `
                    <div class="item-resultado">
                        <div class="div-imagem">
                            <img src="${dado.imagem}" alt="${dado.titulo}">
                        </div>
                        <div class="div-texto">
                            <h2>
                                <a href="${dado.link_insta}" target="_blank"> ${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta">${dado.resumo_descricao}</p>
                            <a href="${dado.link_wiki}" target="_blank">Mais Informações</a>
                        </div>
                    </div>
                    `;
                };
            };
        };
    };
    // Cria um elemento <div> para cada atleta, com as seguintes informações:
    // - Título: Link para o Instagram do atleta, com o nome do atleta como texto.
    // - Descrição: Resumo da descrição do atleta.
    // - Link para a Wikipedia do atleta.
    section.innerHTML = resultadoDadosDoAtleta;
};

function pesquisarAtletaPeloNome() {
    const inputPesquisa = document.getElementById('input-nome-atleta');
    const sectionResultados = document.getElementById('resultados-pesquisa');
    let resultadosFiltrados = dadosAtletas;

    inputPesquisa.addEventListener('input', (event) => {
        // Converte para minúsculas para comparação e ignorar case-sensitive
        const nomeParaPesquisar = event.target.value.toLowerCase();
        // Inicializa com todos os dados dos atletas caso o campo input de pesquisa for igual a vazio ou em branco lista todos
        console.log(nomeParaPesquisar);
        if (nomeParaPesquisar && !stringEstaVaziaOuNula(nomeParaPesquisar)) {
            resultadosFiltrados = dadosAtletas.filter(atleta => {
                return atleta.titulo.toLowerCase().includes(nomeParaPesquisar);
            });

            // Renderizar os resultados filtrados
            sectionResultados.innerHTML = resultadosFiltrados.map(atleta => `
            <div class="item-resultado">
            <h2>
                <a href="${atleta.link_insta}" target="_blank">${atleta.titulo}</a>
            </h2>
            <p class="descricao-meta">${atleta.resumo_descricao}</p>
                <a href="${atleta.link_wiki}" target="_blank">Mais Informações</a>
            </div>
            `).join('');
        } else {
            sectionResultados.innerHTML = "<p>Nenhum atleta encontra com o nome informador!</p>";
            return;
        };
    });
};

// Retornar verdadeiro ou falso sem a estring e vazia, nula, branco ou undefined
function stringEstaVaziaOuNula(str) {
    return str === null || str === undefined || str.trim() === "";
};

/* function pesquisarAtleta() {
    let section = document.getElementById("resultados-pesquisa");
    let dadosDoAtleta = "";

    for (let dado of dadosAtletas) {
        dadosDoAtleta += `
    <div class="item-resultado">
        <h2>
            <a href="${dado.link_insta}" target="_blank"> 
                ${dado.titulo}
            </a>
        </h2>
        <p class="descricao-meta">
            ${dado.resumo_descricao}
        </p>
        <a href="${dado.link_wiki}" target="_blank">
            Mais Informações
        </a>
    </div>
    `;
    }
    section.innerHTML = dadosDoAtleta;
} */
/*
section.innerHTML = `
    <div class="item-resultado">
        <h2>
            <a href="https://www.instagram.com/rebecarandrade/?hl=pt-br" target="_blank"> 
                Rebeca Andrade
            </a>
        </h2>
        <p class="descricao-meta">
            Rebeca Andrade é uma ginasta brasileira que conquistou o coração dos
            brasileiros e se tornou um dos maiores nomes do esporte nacional.
            Nascida em Guarulhos, ela superou diversas dificuldades para
            alcançar o topo do pódio olímpico
        </p>
        <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">
            Mais Informações
        </a>
    </div>
`;
*/
/*
console.log(dados);

for (let i = 0; i < dados.length; i++) {
    console.log(i + " - "+ dados[i]);
}

for (let nome of dados) {
    console.log(nome);
}

dados.forEach(fruta => console.log(dados));

dados.forEach(function (dados, index) {
    console.log(`${index + 1}. ${dados}`);
});

console.log (atletas);
console.log (atletas.nome);
console.log (atletas.resumo);
console.log (atletas.idade);
console.log (atletas.link);

console.log(dadosAtletas);
*/