import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "Kamal";
  password = "1234";
  message = false;


  constructor(private router: Router, private ps: ProductsService) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    if (loginForm.value.username == this.username && loginForm.value.password == this.password) {
      this.ps.isAuthentificated = true;
      this.router.navigate(["products"]);
    } else {
      this.message = true;
    }
  }
}
