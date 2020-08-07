import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Vehicle, VehicleType } from '../model/vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'form-vehicles',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.scss']
})
export class FormVehicleComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';

  // Make a variable reference to our Enum
  ePropertyType = VehicleType;
  vehicles: Vehicle[] = [];

  constructor(private _formBuilder: FormBuilder, private _vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.createForm();

    this._vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  private createForm() {
    this.formGroup = this._formBuilder.group({
      'type': [null, Validators.required],
      'identification': ['', Validators.required],
    });
  }

  get type() {
    return this.formGroup.get('type') as FormControl;
  }

  get identification() {
    return this.formGroup.get('identification') as FormControl
  }

  onSubmit(post) {
    // publish value
    let vehicle: Vehicle = new Vehicle();
    vehicle.type = post.type;
    vehicle.identification = post.identification;
    console.log(vehicle);
    this._vehicleService.addVehicle(vehicle);
    
    // clean form
    this.formGroupDirective.resetForm();
  }
}
