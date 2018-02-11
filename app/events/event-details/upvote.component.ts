
import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
  selector: "upvote",
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="well voting-widgetng">
        <div class="voting-button">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse voting-count">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class VotingComponent {
  @Input() count: number;
  @Output() vote: EventEmitter<Object> = new EventEmitter();

  private iconColor: string;
  @Input() set voted(val: boolean) {
    this.iconColor = val ? "red" : "white";
  }

  onClick() {
    this.vote.emit({});
  }

}