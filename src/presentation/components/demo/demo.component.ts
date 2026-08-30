import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type EditorTool = 'templates' | 'images' | 'text' | 'stickers';
type CardPage = 'front' | 'back';

interface UploadItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'demo',
  imports: [RouterLink],
  templateUrl: 'demo.component.html',
  styleUrl: 'demo.component.scss',
})
export class DemoComponent {
  activeTool: EditorTool = 'images';
  activePage: CardPage = 'front';
  zoom = 100;

  readonly cardFrontSrc = '/birthday-1-front.png';
  readonly cardBackSrc = '/birthday-1-back.png';

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

  zoomIn(): void {
    this.zoom = Math.min(this.zoom + 10, 150);
  }

  zoomOut(): void {
    this.zoom = Math.max(this.zoom - 10, 60);
  }
}
