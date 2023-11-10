const form = document.querySelector('#formIdade');
form.addEventListener('submit', formula);

function zeroAEsquerda(num){
  return num >=10 ? num : `0${num}`;
}


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
      return
    };

    const dataAtual = new Date()
    const AnoAtual = dataAtual.getFullYear()
    const calcularAno = AnoAtual - ano;
   
     

    const dataNascimento = new Date(ano , mesValue1, dayValue1);
    const diaAtual = new Date()
    const diferencaDias = Math.floor((diaAtual - dataNascimento) / (1000 * 60 * 60 * 24));

    const resultado = `Sua idade é <strong>${calcularAno}</strong> anos <br> E seus dias de vida é um total de <strong>${diferencaDias}</strong> dias `
    
  setResultado(resultado )
    
  
  
};
function createP(){
  const p = document.createElement('p')
  return p;
};





function setResultado(msg, isValid){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = ''
  
  let p = createP()// criando um const e atribuindo ela o valor da funcao createP( fucao criada para criar add uma tag p )

  p.innerHTML = msg
  resultado.appendChild(p)// adicionar  a tag p criada na funcao createP dentro do id "resultado"

}