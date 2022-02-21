import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToAbout() {
    var aboutPage = document.getElementById('about');

    aboutPage?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
