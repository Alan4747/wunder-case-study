import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  users: any = [];
  startPage: any;
  paginationLimit: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private socket: Socket) {
    this.startPage = 0;
    this.paginationLimit = 5;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = this.socket.ioSocket.receiveBuffer;
  }

  userDetail(userInfo: any) {

    this.router.navigate(['/profile'], {
      relativeTo: this.activatedRoute,
      queryParams: {user: JSON.stringify(userInfo)}
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

  showMoreUsers() {
    this.paginationLimit = Number(this.paginationLimit) + 5;
  }
}
