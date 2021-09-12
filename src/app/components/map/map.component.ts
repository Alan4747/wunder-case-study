import {AfterViewInit, Component, Input} from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  map: any;
  @Input('coordinates') coordinates: any;

  constructor() {
    console.log(this.coordinates);
  }

  ngAfterViewInit() {
    this.initMap();

  }

  private initMap(): void {

    this.map = leaflet.map('map',).setView([17.3850, 78.4867], 15);
    this.map.zoomControl.remove();
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    leaflet.marker([17.3850, 78.4867]).addTo(this.map);
  }

}
