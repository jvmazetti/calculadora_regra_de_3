document.querySelector('.calcular').addEventListener('click', function () {
    const num1 = parseFloat(document.querySelector('.num1').value);
    const num2 = parseFloat(document.querySelector('.num2').value);
    const num3 = parseFloat(document.querySelector('.num3').value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0){
        document.querySelector('.resultado').textContent = 'Inválido';
        return;
    }

    let resultado = (num3 * num2) / num1;

    if (Number.isInteger(resultado)) {
        document.querySelector('.resultado').textContent = resultado;
    }else{
        document.querySelector('.resultado').textContent = resultado.toFixed(2);
    }
});