import {ChangeDetectorRef, Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LogoutUseCase} from "../../../domain/usecases/logout-use-case";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {SearchService} from "../../services/search.service";
import {GetMeUseCase} from "../../../domain/usecases/get-me-use-case";
import {User} from "../../../domain/models/user";
import {GetConfigurationUseCase} from "../../../domain/usecases/get-configuration-use-case";
import {CommonModule} from "@angular/common";
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TagModule } from 'primeng/tag';
import {Local} from '../../../domain/models/local';
import {GetLocalsUseCase} from '../../../domain/usecases/get-locals-use-case';
import {GetSelectedLocalUseCase} from '../../../domain/usecases/get-selected-local-use-case';
import {SaveSelectedLocalUseCase} from '../../../domain/usecases/save-selected-local-use-case';
import {LocalService} from '../../services/local.service';

@Component({
  selector: 'main',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule,
    AvatarModule,
    MenuModule,
    TagModule,
    PanelMenuModule
  ],
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent {

  searchControl = new FormControl('');
  user: User | null = null;

  locals: Local[] = [];
  selectedLocal: Local | null = null;
  menuLocals: any = [];
  isConfigReady = false;

  menuPRFL = [
    {
      label: 'Perfil',
      items: [
        {
          label: 'Información',
          icon: 'ti ti-info-circle text-xl',
          command: () =>  this.router.navigate(['/main/help'])
        },
        {
          label: 'Cerrar sesión',
          icon: 'ti ti-door text-xl',
          command: () => this.logout()
        },
        {
          separator: true
        }
      ]
    }
  ];

  private destroy$ = new Subject<void>();

  constructor(private router: Router,
              private getMeUseCase: GetMeUseCase,
              private getConfigurationUseCase: GetConfigurationUseCase,
              private getLocalsUseCase: GetLocalsUseCase,
              private getSelectedLocalUseCase: GetSelectedLocalUseCase,
              private saveSelectedLocalUseCase: SaveSelectedLocalUseCase,
              private logoutUseCase: LogoutUseCase,
              private searchService: SearchService,
              private localService: LocalService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.user = this.getMeUseCase.execute()
    this.searchControl.valueChanges
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe(value => {
        this.searchService.setSearchTerm(value || '');
      });

    this.getConfigurationUseCase.execute().subscribe(_ => {
      this.locals = this.getLocalsUseCase.execute();
      this.selectedLocal = this.getSelectedLocalUseCase.execute();
      if (this.selectedLocal) {
        this.localService.setLocal(this.selectedLocal);
      }
      this.menuLocals = [
        {
          label: 'Locales',
          items: this.locals.map(local => ({
            label: local.address,
            command: () => this.onLocalChange(local)
          }))
        }
      ];
      this.isConfigReady = true;
      this.cd.detectChanges();
    });
  }

  onLocalChange(local: Local) {
    this.selectedLocal = this.saveSelectedLocalUseCase.execute(local);
    this.locals = this.getLocalsUseCase.execute();
    if (this.selectedLocal) {
      this.localService.setLocal(this.selectedLocal);
    }
  }

  getInitials(firstName: string, lastName: string): string {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  }


  logout() {
    this.logoutUseCase.execute().subscribe({
      next: (result) => {
        if (result) {
          this.router.navigate(['/login']);
        } else {}
      },
      error: (err) => {}
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
