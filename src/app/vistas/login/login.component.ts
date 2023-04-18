import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [AppComponent, IonicModule, CommonModule, FormsModule, ReactiveFormsModule], 
  providers: [ApiService,HttpClient],
  
})
export class LoginComponent  implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  constructor(private api: ApiService) { }

  ngOnInit(): void {}

  onLogin(form: any){
    
    console.log(form.usuario, form.password);
    this.api.loginByEmail(form).subscribe(data =>{
        console.log(data);
      });
  }
 

}
