import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], 
})
export class EditarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
