const sabre = document.getElementById('sabre')
let luz = document.getElementById('luz')
let som = new Audio('coolsaber.mp3')

function trocaSabre(cor) {
    if (cor === 'azul') {
        sabre.src = './midia/svg/sabre-obiwan.svg'
        sabre.classList.remove('mace', 'vader', 'darksaber')
        luz.classList.add('obi-wan')
        luz.classList.remove('yoda-luz',  'mace-luz',  'vader-luz', 'darksaber-luz') 
    }else if (cor === 'verde') {
        sabre.src = './midia/svg/sabre-yoda.svg'
        sabre.classList.remove('mace', 'vader', 'darksaber')
        luz.classList.add('yoda-luz')
        luz.classList.remove('obi-wan', 'mace-luz', 'vader-luz', 'darksaber-luz') 
    }else if (cor === 'roxo') {
        sabre.src = './midia/svg/sabre-mace-windu.svg'
        sabre.classList.add('mace',)
        sabre.classList.remove('vader', 'darksaber')
        luz.classList.add('mace-luz')
        luz.classList.remove('obi-wan', 'yoda-luz', 'vader-luz', 'darksaber-luz') 
    }else if (cor === 'vermelho') {
        sabre.src = './midia/svg/sabre-vader.svg'
        sabre.classList.add('vader',)
        sabre.classList.remove('mace', 'darksaber')
        luz.classList.add('vader-luz')
        luz.classList.remove('obi-wan', 'yoda-luz', 'mace-luz', 'darksaber-luz') 
        
    }else if (cor === 'preto') {
        sabre.src = './midia/svg/darksaber.svg'
        sabre.classList.add('darksaber')
        sabre.classList.remove('vader', 'mace')
        luz.classList.add('darksaber-luz')
        luz.classList.remove( 'obi-wan','yoda-luz', 'vader-luz', 'mace-luz') 
    }
}

sabre.addEventListener('click', function LigaDesliga() {
    this.classList.toggle('ligado')
    if (this.classList.contains('ligado')) {
        som.play()
        som.volume = 0.2
    } else{
        som.pause()
        som.currentTime = 0
    }
})



