import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    fnCancel(e) {
        try {
            this.router.navigate(['/']);
        } catch (ex) {
            console.log(ex.message);
        }
    }

  ngOnInit() {

  }
}
