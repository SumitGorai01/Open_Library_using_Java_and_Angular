import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements AfterViewInit  {

  @ViewChild('carousel', { static: true })
  carousel!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    $(this.carousel.nativeElement).carousel({
      interval: 1000, // Adjust interval time as needed (in milliseconds)
      pause: 'hover', // Pause on hover
      wrap: true // Enable wrapping of slides
    });
  }
}
