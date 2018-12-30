import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../usuarios/login/userlogin';
import { Router} from '@angular/router';
import { LoginService } from '../../usuarios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserLogin = new UserLogin()

  constructor(private loginService:LoginService,private router:Router ) { }

  ngOnInit() {
  }

  userLogin(){
    this.loginService.userLogin(this.usuario)
      .subscribe( usuario => {
        this.router.navigate(['/main'])
      }

    )
  }

}
