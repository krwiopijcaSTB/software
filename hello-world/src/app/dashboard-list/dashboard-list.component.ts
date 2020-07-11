import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  template: `
    <!--Nagłówek-->
    <div class="header">
      <!--Logo-->
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="logo">
      </div>
      <!--Koniec loga-->
      <!--Menu rozwijane-->
      <div class="user_menu">
        <ul id="nick">
          <li><p><img src="../../assets/images/tors.png"> Nick <img src="../../assets/images/strzalka.png"></p>
            <ul class="choice">
              <li style="border-top: 0px"><a href="">Zmień hasło</a></li>
              <li><a href="">Aktywne sesje</a></li>
              <li><a href="">Wyloguj wszystkie sesje</a></li>
              <li><hr></li>
              <li><a href="">Wyloguj się</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!--Koniec menu rozwijanego-->
    </div>
    <div>
      <hr>
    </div>
    <!--Koniec nagłówka-->
    <!--Elementy na stronie-->
    <div class="container">
        <a href="accounts.html" title="Accounts">
        <div class="element" id="first_element">
          <img src="../../assets/images/osoba.png" alt="Person icon">
          <span>Accounts</span>
        </div>
    </a>
    <a href="">
      <div class="element" id="second_element">
        <img src="../../assets/images/banknot.png" alt="Banknote icon">
        <span>Payments</span>
      </div>
    </a>
    <a href="">
      <div class="element" id="third_element">
        <img src="../../assets/images/metka.png" alt="Tag icon">
        <span>Offers</span>
      </div>
    </a>
    <a href="">
      <div class="element" id="fourth_element">
        <img src="../../assets/images/topologia.png" alt="Topology icon">
        <span>Processes</span>
      </div>
    </a>

    <!--Tutaj dodawać kolejne elementy w:




   <a href="">
        <div class="============" id="============">
            <img src="../../assets/images/===========" alt="=============">
            <span>=============</span>
        </div>
    </a>



    Uzupełnić dane w miejscach oznaczonych znakami "=",
    nadać id i ustalić kolor tła i obramowania w stylach css, w zakładce:
    /*kolory kafelek*/-->

    </div>
  `,
  styles: [
  ]
})
export class DashboardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
