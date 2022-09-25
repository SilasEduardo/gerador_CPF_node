import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';
import geraCPF from './modules/GeraCPF'


(function(){
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf()
})();