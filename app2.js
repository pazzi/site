const galleryContainer = document.getElementById('gallery-container');

// Agrupa os quadros por ano
const quadrosPorAno = quadros.reduce((acc, quadro) => {
    const ano = quadro.ano === '????' ? 'Ano desconhecido' : quadro.ano;
    if (!acc[ano]) {
        acc[ano] = [];
    }
    acc[ano].push(quadro);
    return acc;
}, {});

// Ordena os anos (do mais recente para o mais antigo)
const anosOrdenados = Object.keys(quadrosPorAno).sort((a, b) => {
    if (a === 'Ano desconhecido') return 1;
    if (b === 'Ano desconhecido') return -1;
    return b.localeCompare(a);
});

// Renderiza os quadros agrupados por ano
anosOrdenados.forEach(ano => {
    // Cria um cabeçalho para o ano
    const anoHeader = document.createElement('h2');
    anoHeader.className = 'ano-header';
    anoHeader.textContent = ano;
    galleryContainer.appendChild(anoHeader);

    // Cria um container para os quadros deste ano
    const anoContainer = document.createElement('div');
    anoContainer.className = 'ano-container';
    
    // Adiciona os quadros deste ano
    quadrosPorAno[ano].forEach(quadro => {
        const quadroElement = document.createElement('div');
        quadroElement.className = 'quadro';
        
        quadroElement.innerHTML = `
            <img src="${quadro.link}" alt="${quadro.nome}" loading="lazy">
            <div class="quadro-info">
                <h3>${quadro.nome}</h3>
                <p><span class="dimensoes">Dimensões:</span> ${quadro.wid} x ${quadro.heig} px</p>
                <p class="posse"><span class="proprietario">Proprietário:</span> ${quadro.posse}</p>
            </div>
        `;
        
        anoContainer.appendChild(quadroElement);
    });

    galleryContainer.appendChild(anoContainer);
});