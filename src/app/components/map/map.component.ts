import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  map: any;
  @Input() coordinates: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();

  }

  private initMap(): void {
    this.map = leaflet.map('map',).setView([this.coordinates.latitude, this.coordinates.longitude], 17);
    this.map.zoomControl.remove();
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    leaflet.marker([this.coordinates.latitude, this.coordinates.longitude]).addTo(this.map);
  }

}
