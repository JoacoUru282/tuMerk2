import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,HttpClientModule],
  providers: [ApiService]
})
export class AppComponent {
  constructor() {}
}
