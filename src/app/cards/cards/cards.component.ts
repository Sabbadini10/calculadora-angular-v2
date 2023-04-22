import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  resultado : string = '';
  datoFinal: string ="";


  agregarNumero(num: number) {
    this.resultado += num.toString();
  }

  agregarOperador(operator: string) {
    this.resultado += ' ' + operator + ' ';
  }

  agregarMasMenos(operator: string) {
      this.resultado += ' ' + operator + ' ';
  }

  calcular() {
    // Verificar si el resultado actual es vacío
    if (this.resultado === '') {
      this.resultado = 'Error';
      return;
    }

    // Verificar si hay dos operadores consecutivos

    const operadores = ['+', '-', '*', '/'];
  for (let i = 0; i < operadores.length - 1; i++) {
    const currentOp = operadores[i];
    const nextOp = operadores[i + 1];
    if (this.resultado.includes(nextOp) && this.resultado.endsWith(currentOp)) {
      this.resultado = 'Error';
      return;
    }
  }
    // Si todo está bien, evaluar la operación
    this.resultado = eval(this.resultado);
    this.datoFinal = eval(this.resultado)
  }




  borrar() {
    this.resultado = '';
  }


}
