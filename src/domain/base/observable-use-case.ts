import { Observable } from 'rxjs';

export interface ObservableUseCase<S, T> {
  execute(params: S): Observable<T>;
}

export interface SyncUseCase<S, T> {
  execute(params: S): T;
}
