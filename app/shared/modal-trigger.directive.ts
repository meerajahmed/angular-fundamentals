import {Directive, ElementRef, Inject, OnInit} from "@angular/core";
import {JQ_TOKEN} from "./jquery.service";

@Directive({
  selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLLIElement;
  constructor(private elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any){
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener("click", event => {
      this.$("#simple-modal").modal({});
    })
  }
}