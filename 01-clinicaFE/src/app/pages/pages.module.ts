import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,    // Sólo importo ésto porque nada más uso el router-oulet
    FormsModule,      // Para los formularios ngModel
    ComponentsModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ]
})

export class PagesModule { }
