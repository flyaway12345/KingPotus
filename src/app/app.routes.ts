import { Routes } from '@angular/router';
import { KingPotusComponent } from './body/king-potus/king-potus.component';
import { Error404Component } from './app/error404/error404.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
    {path: '' ,component: BodyComponent},
    {path: '**' ,component: Error404Component}
];
