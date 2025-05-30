    
      const galleryContainer = document.getElementById("gallery-container");

      quadros.forEach((quadro) => {
        const quadroElement = document.createElement("div");
        quadroElement.className = "quadro";

        quadroElement.innerHTML = `
        <a target="_blank" href="${quadro.link}">
        <img src="${quadro.link}" alt="${quadro.nome}" loading="lazy">
        </a>
        <div class="quadro-info">
            <h3>${quadro.nome}</h3>
            <p><span class="ano">Ano:</span> ${quadro.ano}</p>
            <!--p><span class="dimensoes">Dimensões:</span> ${quadro.wid} x ${quadro.heig} px</p-->
            <p class="posse"><span class="proprietario">Proprietário:</span> ${quadro.posse}</p>
        </div>
    `;

        galleryContainer.appendChild(quadroElement);
      });
    