import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public resultado:String ="resultado";
public precoAlcool
public precoGasolina

calcular(){
  //validar se os campos foram preenchidos
  if(this.precoAlcool && this.precoGasolina){
    let pAlcool = parseFloat(this.precoAlcool)
    let pGasolina = parseFloat(this.precoGasolina)

    let res = pAlcool / pGasolina
    if( res >= 0.7){
      this.resultado = " Melhor Utilizar Gasolina "
    }   else{
      this.resultado = "Melhor Utilizar Alcool"
    }
   
  }else{
    this.resultado= "Preencha corretamente os campos!"
  }

}
  constructor() {}

}
