import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  indicatorArr = [];
  userInfo: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      this.userInfo = param.get('user');
      this.userInfo = JSON.parse(this.userInfo);
    });
    this.ageIndicatorBottom(this.userInfo.dob.age);
  }

  ageIndicatorBottom(age: any) {
    const roundingAge = age - (age % 4);
    for (let i = 1; i < roundingAge / 4; i++) {
      this.indicatorArr.push(`${(i * 400) / roundingAge}%`);
    }
    return this.indicatorArr;
  };

}
