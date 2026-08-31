import { Component, model, output } from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

interface TemplateCategory {
  id: string;
  label: string;
}

export interface TemplateItem {
  id: string;
  src: string;
  label: string;
  category: string;
}

@Component({
  selector: 'templates-dialog',
  imports: [Dialog, Button],
  templateUrl: 'templates-dialog.component.html',
  styleUrl: 'templates-dialog.component.scss',
})
export class TemplatesDialogComponent {
  visible = model(false);
  templateSelected = output<TemplateItem>();
  activeCategory = 'all';

  readonly categories: TemplateCategory[] = [
    { id: 'all', label: 'All' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'thank-you', label: 'Thank You' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'christmas', label: 'Christmas' },
    { id: 'just-because', label: 'Just Because' },
  ];

  readonly templates: TemplateItem[] = [
    {
      id: 'birthday-1',
      src: '/birthday-1-front.png',
      label: 'Birthday Celebration',
      category: 'birthday',
    },
    {
      id: 'birthday-2',
      src: '/birthday-2-front.jpeg',
      label: 'Birthday 2',
      category: 'birthday',
    },
    {
      id: 'birthday-3',
      src: '/birthday-3-front.jpeg',
      label: 'Birthday 3',
      category: 'birthday',
    },
    {
      id: 'birthday-4',
      src: '/birthday-4-front.jpeg',
      label: 'Birthday 4',
      category: 'birthday',
    },
    {
      id: 'birthday-5',
      src: '/birthday-5-front.jpeg',
      label: 'Birthday 5',
      category: 'birthday',
    },
    {
      id: 'birthday-6',
      src: '/birthday-6-front.jpeg',
      label: 'Birthday 6',
      category: 'birthday',
    },
    {
      id: 'birthday-7',
      src: '/birthday-7-front.jpeg',
      label: 'Birthday 7',
      category: 'birthday',
    },
    {
      id: 'anniversary-1',
      src: '/anniversary-1-front.png',
      label: 'Anniversary Love',
      category: 'anniversary',
    },
    {
      id: 'anniversary-2',
      src: '/anniversary-2-front.png',
      label: 'Anniversary',
      category: 'anniversary',
    },
    {
      id: 'graduation-1',
      src: '/graduation-1-front.png',
      label: 'Graduation Day',
      category: 'graduation',
    },
    {
      id: 'congrats-1',
      src: '/congrats-1-front.png',
      label: 'Congratulations',
      category: 'thank-you',
    },
    {
      id: 'congrats-2',
      src: '/congrats-2-front.png',
      label: 'Thank You',
      category: 'thank-you',
    },
    {
      id: 'christmas-1',
      src: '/christmas-1-front.png',
      label: 'Christmas Cheer',
      category: 'christmas',
    },
    {
      id: 'just-because-1',
      src: '/just-because-1-front.png',
      label: 'Just Because',
      category: 'just-because',
    },
    {
      id: 'just-because-2',
      src: '/just-because-2-front.jpeg',
      label: 'Just Because 2',
      category: 'just-because',
    },
    {
      id: 'just-because-3',
      src: '/just-because-3-front.jpeg',
      label: 'Just Because 3',
      category: 'just-because',
    },
  ];

  get filteredTemplates(): TemplateItem[] {
    if (this.activeCategory === 'all') {
      return this.templates;
    }

    return this.templates.filter((template) => template.category === this.activeCategory);
  }

  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  close(): void {
    this.visible.set(false);
  }

  selectTemplate(template: TemplateItem): void {
    this.templateSelected.emit(template);
    this.visible.set(false);
  }
}
