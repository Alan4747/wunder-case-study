import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = 'male';
  age = 29;
  array = [];

  constructor() {
  }

  ngOnInit() {
    this.getAgeIndicatorPositions();
  }

  getAgeIndicatorPositions() {
    const ageRoundedDown = this.age - (this.age % 4);
    console.log(ageRoundedDown);
    for (let i = 1; i < ageRoundedDown / 4; i++) {
      this.array.push(`${(i * 400) / ageRoundedDown}%`);
    }
    console.log(this.array);
    return this.array;
  };

}
