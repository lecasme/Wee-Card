import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from '../../../data/services/storage.service';
import { GetMeUseCase } from '../../../domain/usecases/get-me-use-case';
import { isWorkerRole } from '../../components/user/dialogs/user-schedule-utils';
import { User } from '../../../domain/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private getMeUseCase: GetMeUseCase
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path ?? '';
    const isLogin = path === 'login';
    const token = this.storageService.getToken();

    if (!token) {
      if (!isLogin) {
        this.router.navigate(['/login']);
      }
      return isLogin;
    }

    const user = this.getMeUseCase.execute();
    const home = getDefaultAppRoute(user);

    if (isLogin) {
      this.router.navigate([home], { replaceUrl: true });
      return false;
    }

    if (user?.updatePassword && path !== 'password') {
      this.router.navigate(['/password'], { replaceUrl: true });
      return false;
    }

    if (!user?.updatePassword && path === 'password') {
      this.router.navigate([home], { replaceUrl: true });
      return false;
    }

    const main = route.pathFromRoot.some(segment => segment.routeConfig?.path === 'main');

    if (home === '/worker' && main) {
      this.router.navigate([home], { replaceUrl: true });
      return false;
    }

    if (home === '/main' && path === 'worker') {
      this.router.navigate([home], { replaceUrl: true });
      return false;
    }

    return true;
  }
}

export function getDefaultAppRoute(user: Pick<User, 'role' | 'updatePassword'> | null | undefined): string {
  if (user?.updatePassword) {
    return '/password';
  }

  return isWorkerRole(user?.role) ? '/worker' : '/main';
}
