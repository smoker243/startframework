import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContacetComponent } from './components/contacet/contacet.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent  },
    {path:'about' , component:AboutComponent  },
    {path:'portfolio' , component:PortfolioComponent },
    {path:'contacet' , component:ContacetComponent },
    {path:'**' , component:NotfoundComponent },
];
