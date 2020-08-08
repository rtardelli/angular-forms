import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Round } from '../model/round';
import { RoundService } from '../round.service';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'form-round',
  templateUrl: './form-round.component.html',
  styleUrls: ['./form-round.component.scss']
})
export class FormRoundComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  users: User[];
  vehicles: Vehicle[];
  rounds: Round[] = [];

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService,
              private _vehicleService: VehicleService,
              private _roundService: RoundService) { }

  ngOnInit(): void {
    this.createForm();

    this._userService.getUsers()
      .subscribe(users => this.users = users);
    
    this._vehicleService.getVehicles()
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  private createForm() {
    this.formGroup = this._formBuilder.group({
      'first': [null, Validators.required],
      'second': [null, Validators.required],
      'vehicle': [null, Validators.required],
      'startDate': [null, Validators.required],
    });
  }

  get first() {
    return this.formGroup.get('first') as FormControl;
  }

  get second() {
    return this.formGroup.get('second') as FormControl;
  }

  get vehicle() {
    return this.formGroup.get('vehicle') as FormControl;
  }

  get startDate() {
    return this.formGroup.get('startDate') as FormControl;
  }

  onSubmit(post) {
    // publish value
    let round: Round = new Round();
    round.first = post.first;
    round.second = post.second;
    
    this._roundService.addRound(round);
    
    // clean form
    this.formGroupDirective.resetForm();
  }
}
