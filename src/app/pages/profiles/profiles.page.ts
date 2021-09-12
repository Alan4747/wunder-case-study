import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  data: any = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private socket: Socket) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.data = this.socket.ioSocket.receiveBuffer;
  }

  userDetail(userInfo: any) {
    console.log(userInfo);
    this.router.navigate(['/profile'], {
      relativeTo: this.activatedRoute,
      queryParams: {user: JSON.stringify(userInfo)}
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

}
