import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';

type EditorTool = 'templates' | 'images' | 'text' | 'stickers';
type CardPage = 'front' | 'back';

interface UploadItem {
  src: string;
  alt: string;
}

interface CardPageConfig {
  src: string;
  width: number;
  height: number;
  label: string;
}

@Component({
  selector: 'demo',
  imports: [RouterLink, Card],
  templateUrl: 'demo.component.html',
  styleUrl: 'demo.component.scss',
})
export class DemoComponent {
  activeTool: EditorTool = 'images';
  activePage: CardPage = 'front';
  zoom = 100;

  readonly cardPages: Record<CardPage, CardPageConfig> = {
    front: {
      src: '/birthday-1-front.png',
      width: 1478,
      height: 1064,
      label: 'Front cover',
    },
    back: {
      src: '/birthday-1-back.png',
      width: 1492,
      height: 1054,
      label: 'Back cover',
    },
  };

  // A5 landscape height at 96dpi (559px), shown at ~93% for the editor canvas
  private readonly cardDisplayHeight = 520;

  readonly pageList = [
    { id: 'front' as CardPage, src: this.cardPages.front.src, label: this.cardPages.front.label },
    { id: 'back' as CardPage, src: this.cardPages.back.src, label: this.cardPages.back.label },
  ];

  readonly tools: { id: EditorTool; label: string }[] = [
    { id: 'templates', label: 'Templates' },
    { id: 'images', label: 'Images' },
    { id: 'text', label: 'Text' },
    { id: 'stickers', label: 'Stickers' },
  ];

  readonly uploads: UploadItem[] = [
    { src: '/birthday-1-front.png', alt: 'Birthday card front' },
    { src: '/birthday-1-back.png', alt: 'Birthday card back' },
    { src: '/landing-hero.png', alt: 'Guinness pint' },
    { src: '/trebol.png', alt: 'Shamrock' },
    { src: '/landing-heart.png', alt: 'Irish heart' },
    { src: '/birthday-1-front.png', alt: 'Landscape' },
  ];

  selectTool(tool: EditorTool): void {
    this.activeTool = tool;
  }

  selectPage(page: CardPage): void {
    this.activePage = page;
  }

  get activeCard(): CardPageConfig {
    return this.cardPages[this.activePage];
  }

  get activeCardWidth(): number {
    const card = this.activeCard;
    return Math.round(this.cardDisplayHeight * (card.width / card.height));
  }

  get activeCardHeight(): number {
    return this.cardDisplayHeight;
  }

  zoomIn(): void {
    this.zoom = Math.min(this.zoom + 10, 150);
  }

  zoomOut(): void {
    this.zoom = Math.max(this.zoom - 10, 60);
  }
}
