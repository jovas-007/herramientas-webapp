import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
///DEFINIENDO VARIABLES
  public type: string="";

  constructor() { }

  ngOnInit(): void {
  }
public login (){
  console.log("login");
}

}
1