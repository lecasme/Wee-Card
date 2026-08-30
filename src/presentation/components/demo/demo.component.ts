import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'demo',
  imports: [],
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss']
})
export class DemoComponent {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
