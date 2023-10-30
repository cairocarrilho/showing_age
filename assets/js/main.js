const form = document.querySelector('#formIdade');
form.addEventListener('submit', formula);

function formula(e){
  e.preventDefault();
  
  const inputAno = document.querySelector('#anoAtual')
  const ano = Number(inputAno.value) 

  const dia = document.querySelector('#diaMes');
  const dayValue= dia.options[dia.selectedIndex].value
  const dayValue1 = dayValue

  const mes = document.querySelector('#mes');
  const mesValue= mes.options[mes.selectedIndex].value
  const mesValue1 = mesValue

  
    if(dayValue1 === ''){
      setResultado('Dia não selecionado, selecione um dia ', false);
      return;
    };

    if(mesValue1 === ''){
      setResultado("Mês não selecionado, selecione um mês" , false);
      return;
    };
    if(!ano){
      setResultado("Ano invalido ", false);
      return;
    };

  
  
};
function createP(){
  const p = document.createElement('p')
  return p;
};

function dateAtual(ano, mes, dia ){

return ano,mes,dia  
}


function setResultado(msg, isValid){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  
  const p = createP()

  p.innerHTML = msg
  resultado.appendChild(p)

}