import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Directive} from "@angular/core";

@Directive({
  selector: "[validateLocation]",
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
  /* multi -> add  LocationValidator to NG_VALIDATORS */
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): ValidationErrors | any {
    let addressControl = formGroup.controls["address"];
    let cityControl = formGroup.controls["city"];
    let countryControl = formGroup.controls["country"];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if( (addressControl && addressControl.value && cityControl && cityControl.value &&
    countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value) ){
      return null;
    } else {
      return { validateLocation: false }
    }

  }
}