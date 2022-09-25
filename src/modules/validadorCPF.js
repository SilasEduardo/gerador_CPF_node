
export default   class validadorCPF{
   constructor(cpf){
       this.cpf = cpf;
   }
   get cpfLimpo(){
       if(this.cpf === undefined)return;
       return this.cpf.replace(/\D+/g, '')
   }

   cpfparcial(){
       if(this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo)return false
       if(this.cpfLimpo.length !== 11) return false;
       let cpfParcial = this.cpfLimpo.slice(0, -2)
       return cpfParcial
   }

   static criaDigito(digitoParcial){
       const cpfArray = Array.from(digitoParcial)
       let regrecivo = cpfArray.length + 1;
       
       let digito = cpfArray.reduce((ac, val)=>{
           ac += (regrecivo * val)

           regrecivo--

           return ac
       }, 0)
       
       digito = 11 - (digito % 11)

       return digito < 9 ? digito : 0
   }

   validarCPF (){
       const digito1 = this.criaDigito(this.cpfparcial())
       const digito2 = this.criaDigito(this.cpfparcial() + digito1) 

       const cpfNovo = this.cpfparcial() + digito1 + digito2


       if(cpfNovo === this.cpfLimpo){
           return true
       }
       else{
           return false
       }
   }
}

console.log('Cheguei aqui')