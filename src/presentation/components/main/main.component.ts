import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'main',
  imports: [
    RouterOutlet
  ],
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
