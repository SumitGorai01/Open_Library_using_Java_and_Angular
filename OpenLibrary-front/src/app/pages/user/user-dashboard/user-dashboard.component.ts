import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit  {//AfterViewInit

  @ViewChild('carousel', { static: true })
  carousel!: ElementRef;

  constructor() { }
  ngOnInit(): void {
    
    // throw new Error('Method not implemented.');
  }

  // ngAfterViewInit() {
  //   $(this.carousel.nativeElement).carousel({
  //     interval: 1000, // Adjust interval time as needed (in milliseconds)
  //     pause: 'hover', // Pause on hover
  //     wrap: true // Enable wrapping of slides
  //   });
  // }
}
