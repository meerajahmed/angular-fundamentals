import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
      <div class="well hoverwell thumbnail">
          <h2>{{eventDataTo?.name}}</h2>
          <div>Date: {{eventDataTo?.date}}</div>
          <div [ngSwitch]="eventDataTo?.time">
              <span>Time: {{eventDataTo?.time}}</span>
              <span *ngSwitchCase="'8:00 am'">(Early start)</span>
              <span *ngSwitchCase="'10:00 am'">(Late start)</span>
              <span *ngSwitchDefault>(Normal Start)</span>
          </div>
          <div>Price: \${{eventDataTo?.price}}</div>
          <div [hidden]="!eventDataTo?.location">
              <span>Location: {{eventDataTo?.location?.address}}</span>
              <span class="pad-left">{{eventDataTo?.location?.city}}, {{eventDataTo?.location?.country}}</span>
          </div>
          <div [hidden]="!eventDataTo?.onlineUrl">
              Online URL: {{eventDataTo?.onlineUrl}}
          </div>
      </div>
  `,
  styles: [`
    .thumbnail {
      min-height: 210px;
    }
    .pad-left {
      margin-left: 10px;
    }
    .well div {
      color: #bbb;
    }
  `]
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