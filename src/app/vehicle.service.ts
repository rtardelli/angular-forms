import { Injectable } from '@angular/core';
import { Vehicle } from './model/vehicle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private _vehicleStorage: Vehicle[] = [];

  constructor() { }

  addVehicle(user: Vehicle): void {
    this._vehicleStorage.push(user);
  }

  getVehicles(): Observable<Vehicle[]> {
    return of(this._vehicleStorage);
  }
}
