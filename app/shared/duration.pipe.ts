import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "duration"
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    var formattedValue = "";
    switch ( value ){
      case 1:
        formattedValue = "Half Hour";
        break;
      case 2:
        formattedValue = "One Hour";
        break;
      case 3:
        formattedValue = "Half Day";
        break;
      case 4:
        formattedValue = "Full Day";
        break;
      default:
        formattedValue = value.toString();
    }
    return formattedValue;
  }
}