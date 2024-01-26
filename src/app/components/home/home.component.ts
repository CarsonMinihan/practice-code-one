import { Component, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
  public imagesList = [
    './assets/images/img1.jpg',
    './assets/images/img2.jpg',
    './assets/images/img3.jpg',
    './assets/images/img4.jpg',
    './assets/images/img5.jpg',
    './assets/images/img6.jpg',
  ]
   

  ngOnInit(): void {
    // customElements.define('div', image);
    // let images = ["assets/images/img1.jpg"]
  }
}
