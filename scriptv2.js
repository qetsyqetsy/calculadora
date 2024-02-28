// objeto con elementos html 

const elements = {
    calcular: document.getElementById('calcular'),
    error: document.getElementById('error'),
    flujo: document.getElementById('flu'),
    mantenimiento: document.getElementById('man'),
    input: document.getElementById('peso'),
  }

// vincular event listeners a elementos DOM

elements.input.addEventListener('keyup', teclaEnter);
elements.calcular.addEventListener('click', botonClick); 

// función para tecla enter 

function teclaEnter(evento) {
    if (evento.code === 'Enter') {
        elements.calcular.click();
    }
}

// función al hacer click

function botonClick() {
    const peso = parseFloat(elements.input.value);
    const peso2 = elements.input.value; 

    // validar si el valor ingresado no es un número 

    if (isNaN(peso)) {
        elements.error.style.display = 'block';
        return; 
    }

    // validar el peso y mostrar menasje de error 

        if (peso <=0) {
            elements.error.style.display = 'block';
            return;
        }
        
       
       
    
    elements.error.style.display = 'none';

    // calcular hidratación y mostrar resultados 

    const {flujo, mantenimiento} = calcflujo(peso);
    elements.flujo.textContent = flujo;
    elements.mantenimiento.textContent = mantenimiento;
    elements.flujo.style.display = 'block';
    elements.mantenimiento.style.display = 'block'; 
    
}

// cálculo 

    // holliday-segar

    // si tiene <= 10 kg

function calcflujo(peso) {
    if (peso <= 10) {
        return {
            flujo: `${(peso * 100 / 24).toFixed(2)} cc/hr`,
            mantenimiento: `m+m/2 ${((peso * 100 / 24) * 1.5).toFixed(2)} cc/hr`,
        };

    // si tiene <= 20 kg

    } else if (peso <= 20) {
        const hbase = 10 * 100;
        const adicional = (peso -10) * 50;
        const voldiario = hbase + adicional;
        return{
            flujo: `${(voldiario / 24).toFixed(2)} cc/hr`,
            mantenimiento: `m+m/2 ${((voldiario / 24) * 1.5).toFixed(2)} cc/hr`,
        };

    // si tiene <= 30 kg

    } else if (peso <= 30) {
        const hbase = 10 * 100;
        const adicional1 = (peso - 10) * 50;
        const adicional2 = (peso - 20) * 20; 
        const voldiario = hbase + adicional1 + adicional2;
        return {
            flujo: `${(voldiario / 24).toFixed(2)} cc/hr`,
            mantenimiento: `m/m+2 ${((voldiario / 24) * 1.5).toFixed(2)} cc/hr`,
        };

    // mantenimiento

    } else {
        const mantenimiento = ((peso * 4) + 7) / (peso + 90);
        return {
            flujo: `${(mantenimiento * 1500).toFixed(2)} cc`,
            mantenimiento: `${(mantenimiento * 2000).toFixed(2)} cc`
        };
    }
}