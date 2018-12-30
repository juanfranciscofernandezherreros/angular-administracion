import { Component, OnInit } from '@angular/core';
import { User} from '../../usuarios/signup/user';
import { Router , ActivatedRoute } from '@angular/router';
import { SignUpService } from '../../usuarios/signup/signup.service';


@Component({
  selector: 'app-form',
  templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit {

  usuario: User = new User()

  constructor(private signUpService:SignUpService,private router:Router , private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
  }

  userRegistration(user:User):void{
    this.signUpService.userRegistration(this.usuario)
    .subscribe( countries => {
      this.router.navigate(['/main'])
    }

    )
  }


}
