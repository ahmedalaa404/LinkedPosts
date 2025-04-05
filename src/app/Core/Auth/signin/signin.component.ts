import { Component } from '@angular/core';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { OutletContext, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
