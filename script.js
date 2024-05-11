const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const mintuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = '11 oct 2024'

function coutDown(){
    const data_lance = new Date(lancamento)
    const hoje = new Date()

    const total_segundos = (data_lance - hoje)/1000

    const finalDias = Math.floor(total_segundos/60/60/24);
    const finalHoras = Math.floor(total_segundos/60/60)%24;
    const finalMinutos = Math.floor(total_segundos/60)%60;
    const finalSegundos = Math.floor(total_segundos)%60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    mintuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo(tempo){
    return tempo < 10? "0" + tempo : tempo;

}

coutDown()
setInterval(coutDown, 1000)
