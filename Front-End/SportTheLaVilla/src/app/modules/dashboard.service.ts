import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Janeiro',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Fevereiro',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Março',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Abril',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Maio',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  /* Ajustar valores */
  cards() {
    return [71, 78, 39, 66];
  }


  /*  */
  pieChart() {
    return [{
      name: 'Calçados',
      y: 35,
 /*      sliced: true,
      selected: true distancia a area selecionada do restante */
    }, {
      name: 'Roupas',
      y: 15
    }, {
      name: 'Suplementação',
      y: 15
    }, {
      name: 'Equipamentos',
      y: 15
    }, {
      name: 'Safari',
      y: 15
    }, {
      name: 'Infantil',
      y: 5
    }];
  }
}
