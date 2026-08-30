import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { TemplatesDialogComponent, TemplateItem } from '../templates/templates-dialog.component';

type EditorTool = 'templates' | 'images' | 'text' | 'stickers';
type CardPage = 'front' | 'back';

interface CardPageConfig {
  src: string;
  width: number;
  height: number;
  label: string;
}

@Component({
  selector: 'demo',
  imports: [RouterLink, Card, TemplatesDialogComponent],
  templateUrl: 'demo.component.html',
  styleUrl: 'demo.component.scss',
})
export class DemoComponent {
  activeTool: EditorTool = 'images';
  activePage: CardPage = 'front';
  zoom = 100;
  templatesDialogVisible = false;

  cardPages: Record<CardPage, CardPageConfig> = {
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

  get pageList(): { id: CardPage; src: string; label: string }[] {
    return [
      { id: 'front', src: this.cardPages.front.src, label: this.cardPages.front.label },
      { id: 'back', src: this.cardPages.back.src, label: this.cardPages.back.label },
    ];
  }

  readonly tools: { id: EditorTool; label: string }[] = [
    { id: 'templates', label: 'Templates' },
    { id: 'images', label: 'Images' },
    { id: 'text', label: 'Text' },
    { id: 'stickers', label: 'Stickers' },
  ];

  selectTool(tool: EditorTool): void {
    this.activeTool = tool;

    if (tool === 'templates') {
      this.templatesDialogVisible = true;
    }
  }

  selectPage(page: CardPage): void {
    this.activePage = page;
  }

  applyTemplate(template: TemplateItem): void {
    const img = new Image();
    img.onload = () => {
      this.cardPages.front = {
        ...this.cardPages.front,
        src: template.src,
        width: img.naturalWidth,
        height: img.naturalHeight,
      };
      this.activePage = 'front';
    };
    img.src = template.src;
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
