import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacet',
  standalone: true,
  imports: [StarComponent , FormsModule],
  templateUrl: './contacet.component.html',
  styleUrl: './contacet.component.css'
})
export class ContacetComponent {
  UserName:string ='';
  UserAge!:number;
  UserEmail:string ='';
  UserPassword:string ='';
}
