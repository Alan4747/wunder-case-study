import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  constructor(private router: Router, private  userService: UsersService) {
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
