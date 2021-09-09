import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  userDetail() {
    this.router.navigateByUrl('/profile').then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

}
