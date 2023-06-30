
//Inicializaciones
window.onload=check;
function check() {
  document.getElementById("radioDefault").checked = true;

  document.getElementById("inputTitulo").value = tituloCUSTOM;

  document.getElementById("inputTituloFontSize").value = tituloFontSizeCUSTOM;

  document.getElementById("inputTituloFontWeight").value = tituloFontWeightCUSTOM;

  document.getElementById('inputTituloFontFamily').value = tituloFontFamilyCUSTOM;

  document.getElementById('inputTituloColor').value = tituloColorCUSTOM;

  

}

//Utilidad
function onlyNumbers(event) {
    const key = event.key;
    const currentValue = event.target.value + key;
    const isValid = /^\b([1-9]|[1-8][0-9]|9[0-6])\b/.test(currentValue); 
    return isValid;
  }


//Datos compartidos

//valor inicial 
chartType = 'bar';

let datosCUSTOM = [44, 55, 41, 17, 15];
let categoriasCUSTOM = ['Feb', 'Mar', 'Abr', 'May', 'Jun'];
let alturaCUSTOM = 350;

tituloCUSTOM = 'Ventas últimos 5 meses';
//document.getElementById("inputTitulo").placeholder = tituloCUSTOM;

tituloFontSizeCUSTOM = 32 //14 es el valor default que trae apexcharts al parecer
//document.getElementById("inputTituloFontSize").value = tituloFontSizeCUSTOM;

tituloFontWeightCUSTOM = 900 //900 es el valor default que trae apexcharts al parecer
//document.getElementById("inputTituloFontWeight").value = tituloFontWeightCUSTOM;

tituloFontFamilyCUSTOM = 'sans-serif'
//document.getElementById("inputTituloFontFamily").value = tituloFontFamilyCUSTOM;

tituloColorCUSTOM = '#555555'

nombreSerieCUSTOM = 'Ventas';

// Datos del gráfico de barras ********************************************************************************************
//*************************************************************************************************************************
var barOptions = {
  series: [{
    name: nombreSerieCUSTOM,
    data: datosCUSTOM
  }],
  chart: {
    type: 'bar',
    height: alturaCUSTOM
  },
  labels: categoriasCUSTOM,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val
    }
  },
  title: {
    text: tituloCUSTOM,
    align: 'left',
    style: {
        fontSize:  tituloFontSizeCUSTOM,
        fontWeight:  tituloFontWeightCUSTOM,
        fontFamily:  tituloFontFamilyCUSTOM,
        color: tituloColorCUSTOM
    }
  },
};
// Datos del gráfico de líneas ********************************************************************************************
//*************************************************************************************************************************
var lineOptions = {
  series: [{
    name: nombreSerieCUSTOM,
    data: datosCUSTOM
  }],
  chart: {
    height: alturaCUSTOM,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: tituloCUSTOM,
    align: 'left',
    style: {
        fontSize:  tituloFontSizeCUSTOM,
        fontWeight:  tituloFontWeightCUSTOM,
        fontFamily:  tituloFontFamilyCUSTOM,
        color: tituloColorCUSTOM
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: categoriasCUSTOM,
  }
};
// Datos del gráfico de donut ********************************************************************************************
//************************************************************************************************************************
var donutOptions = {
  series: datosCUSTOM, //no es compatible con name:
  chart: {
    type: 'donut',
    height: alturaCUSTOM
  },
  labels: categoriasCUSTOM,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val.toFixed(1) + "%"
    },
    style: {
      fontSize: '16px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      colors: ['#123456']
    },
  },
  title: {
    text: tituloCUSTOM,
    align: 'left',
    style: {
        fontSize:  tituloFontSizeCUSTOM,
        fontWeight:  tituloFontWeightCUSTOM,
        fontFamily:  tituloFontFamilyCUSTOM,
        color: tituloColorCUSTOM
    }
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), barOptions);
chart.render();

// Función para cambiar entre el gráfico de barras y el gráfico de donut
function changeChartType(type) {

    chartType = type;

  //console.log(chart)
  if (type === 'donut') {
    chart.destroy();
    console.log(donutOptions);

    donutOptions.title.text = tituloCUSTOM;

    donutOptions.title.style = {
        fontSize:  tituloFontSizeCUSTOM,
        fontWeight:  tituloFontWeightCUSTOM,
        fontFamily:  tituloFontFamilyCUSTOM,
        color:  tituloColorCUSTOM
      };
    
    chart = new ApexCharts(document.querySelector("#chart"), donutOptions);
    chart.render();
  }

  if (type === 'bar') {
    chart.destroy();
    barOptions.title.text = tituloCUSTOM;

    barOptions.title.style = {
        fontSize:  tituloFontSizeCUSTOM,
        fontWeight:  tituloFontWeightCUSTOM, //'bold',
        fontFamily:  tituloFontFamilyCUSTOM,
        color:  tituloColorCUSTOM
      };

    chart = new ApexCharts(document.querySelector("#chart"), barOptions);
    chart.render();
  }

  if (type === 'line') {
    chart.destroy();
    lineOptions.title.text = tituloCUSTOM;

    lineOptions.title.style = {
        fontSize:  tituloFontSizeCUSTOM,
        fontWeight:  tituloFontWeightCUSTOM, //'bold',
        fontFamily:  tituloFontFamilyCUSTOM,
        color:  tituloColorCUSTOM
      };

    chart = new ApexCharts(document.querySelector("#chart"), lineOptions);
    chart.render();
  }

}


function cambiarTitulo() {
    var valor = document.getElementById("inputTitulo").value; // Obtener el valor del campo de entrada

    tituloCUSTOM = valor;
    tituloFontSizeCUSTOM = document.getElementById("inputTituloFontSize").value;

    if (chartType === 'donut') {
        changeChartType('donut');
    }

    if (chartType === 'bar') {
        changeChartType('bar');
    }

    if (chartType === 'line') {
        changeChartType('line');
    }
    
}


function cambiarTituloFontSize() {
    var valor = document.getElementById("inputTituloFontSize").value; // Obtener el valor del campo de entrada

    tituloFontSizeCUSTOM = valor;

    if (chartType === 'donut') {
        changeChartType('donut');
    }

    if (chartType === 'bar') {
        changeChartType('bar');
    }

    if (chartType === 'line') {
        changeChartType('line');
    }
    
}

function cambiarTituloFontWeight(event) {

    const inputValue = event.target.value;
    const validValues = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

    if (!validValues.includes(inputValue)) {
        inputValue = '500'; // Change the input value if it's not a valid value
    }

    tituloFontWeightCUSTOM = inputValue;

    if (chartType === 'donut') {
        changeChartType('donut');
    }

    if (chartType === 'bar') {
        changeChartType('bar');
    }

    if (chartType === 'line') {
        changeChartType('line');
    }

}


function cambiarTituloFontFamily(event) {

    const inputValue = event.target.value;



    tituloFontFamilyCUSTOM = inputValue;

    if (chartType === 'donut') {
        changeChartType('donut');
    }

    if (chartType === 'bar') {
        changeChartType('bar');
    }

    if (chartType === 'line') {
        changeChartType('line');
    }

}




function cambiarTituloColor(event) {

  const inputValue = event.target.value;

  tituloColorCUSTOM = inputValue;

  if (chartType === 'donut') {
      changeChartType('donut');
  }

  if (chartType === 'bar') {
      changeChartType('bar');
  }

  if (chartType === 'line') {
      changeChartType('line');
  }

}