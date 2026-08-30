import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface GalleryCard {
  category: string;
  title: string;
  subtitle: string;
  variant: string;
}

@Component({
  selector: 'landing',
  imports: [RouterLink],
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss'],
})
export class LandingComponent {
  menuOpen = false;
  activeFilter = 'All';

  readonly filters = [
    'All',
    'Birthday',
    'Thank You',
    'Anniversary',
    'Graduation',
    'Christmas',
    'Just Because',
  ];

  readonly cards: GalleryCard[] = [
    { category: 'Birthday', title: 'Happy Birthday', subtitle: 'Make it a big one', variant: 'birthday' },
    { category: 'Anniversary', title: 'Happy Anniversary', subtitle: 'For the two of you', variant: 'anniversary' },
    { category: 'Graduation', title: 'Congrats!', subtitle: 'You did it', variant: 'graduation' },
    { category: 'Christmas', title: 'Nollaig Shona Duit', subtitle: 'Merry Christmas', variant: 'christmas' },
    { category: 'Just Because', title: 'Just Because', subtitle: 'A little surprise', variant: 'because' },
    { category: 'Thank You', title: 'Thank You!', subtitle: 'From the heart', variant: 'thanks' },
  ];

  get filteredCards(): GalleryCard[] {
    if (this.activeFilter === 'All') {
      return this.cards;
    }
    return this.cards.filter((card) => card.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
