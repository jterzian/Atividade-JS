document.addEventListener('DOMContentLoaded', () => {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const calcularBtn = document.getElementById('calcularBtn');
    const valorImcEl = document.getElementById('valorImc'); 
    const classificacaoImcEl = document.getElementById('classificacaoImc'); 

    calcularBtn.addEventListener('click', () => {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        // Limpar resultados anteriores (boa prática!)
        valorImcEl.textContent = "";
        classificacaoImcEl.textContent = "";
        valorImcEl.style.color = "#333";
        classificacaoImcEl.style.color = "#333";

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        if (altura > 3) {
            alert("Por favor, insira a altura em metros (ex: 1.75).");
            return;
        }

        const imc = peso / (altura * altura);
        valorImcEl.textContent = `Seu IMC: ${imc.toFixed(2)}`;

        let classificacao = '';
        let cor = '#333';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            cor = '#3498db'; // Azul claro
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
            cor = '#2ecc71'; // Verde
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
            cor = '#f1c40f'; // Amarelo
        } else if (imc < 34.9) {
            classificacao = 'Obesidade Grau I';
            cor = '#e67e22'; // Laranja
        } else if (imc < 39.9) {
            classificacao = 'Obesidade Grau II';
            cor = '#e74c3c'; // Vermelho
        } else {
            classificacao = 'Obesidade Grau III (Mórbida)';
            cor = '#c0392b'; // Vermelho escuro
        }
        
        classificacaoImcEl.textContent = `Classificação: ${classificacao}`;
        
        classificacaoImcEl.style.color = cor;
        valorImcEl.style.color = cor;
    });
});