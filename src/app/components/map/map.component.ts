import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  map: any;
  @Input() coordinates: any;

  constructor() {
  }

  ngOnInit() {
    setTimeout(async () => {
      await this.initMap();
    }, 1000);
  }

  ngOnDestroy() {
    this.map.remove();
  }

  async initMap() {
    this.map = await new Leaflet.Map('map', {
      attributionControl: false,
      dragging: true,
    }).setView([this.coordinates.latitude, this.coordinates.longitude], 16);
    this.map.zoomControl.remove();
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    Leaflet.marker([this.coordinates.latitude, this.coordinates.longitude]).addTo(this.map);

  }

}
