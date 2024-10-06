function simularCrescimento() {
    
    const anoInicial = parseInt(document.getElementById('ano-inicial').value);
    const populacaoInicial = parseInt(document.getElementById('populacao').value);
    const taxaCrescimento = parseFloat(document.getElementById('taxa-crescimento').value) / 100;
    const anoFinal = parseInt(document.getElementById('ano-final').value);
    
    
    if (isNaN(anoInicial) || isNaN(populacaoInicial) || isNaN(taxaCrescimento) || isNaN(anoFinal)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

   
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    
    resultado.innerHTML += `Ano ${anoInicial} -> População: ${populacaoInicial.toFixed(0)}<br>`;

    
    let populacaoAtual = populacaoInicial;
    for (let ano = anoInicial + 1; ano <= anoFinal; ano++) {
        populacaoAtual *= (1 + taxaCrescimento);
    }

    
    resultado.innerHTML += `Ano ${anoFinal} -> População: ${populacaoAtual.toFixed(0)}<br>`;
}
