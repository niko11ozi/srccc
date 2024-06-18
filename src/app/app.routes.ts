import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DollsComponent } from './dolls/dolls.component';
import { DevelopmentalComponent } from './developmental/developmental.component';
import { FiguresComponent } from './figures/figures.component';
import { ToysComponent } from './toys/toys.component';
import { CarsComponent } from './cars/cars.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path:'home',
        component:MainComponent,
        title:'home'
    },
    {
        path:'dolls',
        component:DollsComponent,
        title:'dolls'
    },
    {
        path:'developmental',
        component:DevelopmentalComponent,
        title:'developmental'
    },
    {
        path:'figures',
        component:FiguresComponent,
        title:'figures'
    },
    {
        path:'toys',
        component:ToysComponent,
        title:'toys'
    },
    {
        path:'cars',
        component:CarsComponent,
        title:'cars'
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        title:'Details'
    }
    
];
