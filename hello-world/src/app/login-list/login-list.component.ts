import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-list',
  template: `
    <div class="header">
      <!--Logo-->
      <div class="logo">
        <img src="../../images/logo.png" alt="logo">
      </div>
      <!--Koniec loga-->
    </div>
    <div>
      <hr>
    </div>
    <div class="container">
      <div id="login_panel">
        <form action="">
          <div class="login">
            <label for="login">Login:<br>
              <input type="text" name="login" id="login"></label>
          </div>
          <div class="login">
            <label for="password">Hasło:<br>
              <input type="password" name="password" id="password"></label>
          </div>
          <div class="login">
            <input type="button" value="Zaloguj się" name="login_button" id="login_button">
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class LoginListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
