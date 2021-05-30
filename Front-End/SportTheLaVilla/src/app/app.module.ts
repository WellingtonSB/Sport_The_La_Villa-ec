import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './paginas/home/home.component';


import { CommonModule } from '@angular/common';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AreaComponent } from './shared/widgets/area/area.component';
import { CardComponent } from './shared/widgets/card/card.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    CadastrarComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,

    /*  */
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule
    /*  */
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
