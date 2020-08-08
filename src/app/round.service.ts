import { Injectable } from '@angular/core';
import { Round } from './model/round';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  
  private _roundStorage: Round[] = [];

  constructor() { }

  addRound(round: Round): void {
    this._roundStorage.push(round);
  }

  getRounds(): Observable<Round[]> {
    return of(this._roundStorage);
  }
}
