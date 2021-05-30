import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Tênis Nike Revolution', weight: 'R$40.958,00' },
  { position: 2, name: 'Tênis Nike Mc Trainer', weight: 'R$36.908,00' },
  { position: 3, name: 'Camisa Nike Academy', weight: 'R$35.958,00' },
  { position: 4, name: 'Camiseta Adidas Core 18', weight: 'R$32.958,00' },
  { position: 5, name: 'Moletom Burn Básico', weight: 'R$29.958,00' },
  { position: 6, name: 'Mochila Burn Daily', weight: 'R$27.998,00' },
  { position: 7, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 8, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 9, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 10, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 11, name: 'Mochila Burn Daily',weight: 'R$4.958,00'},
  { position: 12, name: 'Mochila Burn Daily',weight: 'R$4.958,00'},
  { position: 13, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 14, name: 'Mochila Burn Daily', weight: 'R$4.958,00'},
  { position: 15, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 16, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 17, name: 'Mochila Burn Daily',weight: 'R$4.958,00'},
  { position: 18, name: 'Mochila Burn Daily',weight: 'R$4.958,00'},
  { position: 19, name: 'Mochila Burn Daily', weight: 'R$4.958,00' },
  { position: 20, name: 'Mochila Burn Daily',weight: 'R$4.958,00' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
