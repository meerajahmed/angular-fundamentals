
import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
  selector: "upvote",
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="voting-button">
        <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
        <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
      </div>
      <div class="badge badge-inverse voting-count">
        <div>{{count}}</div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class VotingComponent {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote: EventEmitter<Object> = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }

}