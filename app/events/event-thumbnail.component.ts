import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
      <div class="well hoverwell thumbnail">
          <h2>{{eventDataTo.name}}</h2>
          <div>Date: {{eventDataTo.date}}</div>
          <div>Time: {{eventDataTo.time}}</div>
          <div>Price: \${{eventDataTo.price}}</div>
          <div>
              <span>Location: {{eventDataTo.location.address}}</span>
              <span>&nbsp;</span>
              <span>{{eventDataTo.location.city}}, {{eventDataTo.location.country}}</span>
          </div>
          <button class="btn btn-primary" (click)="handleClick()" >Click</button>
      </div>
  `
})
export class EventThumbnailComponent {
  // event will be passed in from other component
  @Input() eventDataTo: any;
  // convey some event that has occurred
  @Output() eventClickFrom = new EventEmitter();

  handleClick() {
    this.eventClickFrom.emit(this.eventDataTo.name);
  }

  log(info){
    console.log(info);
  }

  someProperty:any= "Some property"

}