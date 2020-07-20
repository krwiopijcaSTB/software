import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-list',
  template: `
    <div class="header">
      <!--Logo-->
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="logo">
      </div>
      <!--Koniec loga-->
    </div>
    <div>
      <hr>
    </div>
      <div class="container login-container">
        <div class="login_position">
          <div class="col-md-6 login-form-1">
            <h3>Login</h3>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email *" value="" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Your Password *" value="" />
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Login" />
              </div>
              <div class="form-group">
                <a href="#" class="ForgetPwd">Forget Password?</a>
              </div>
            </form>
          </div>
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
