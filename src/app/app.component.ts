import { Component } from '@angular/core';
import Tribute from "tributejs";
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _cs: CommonService) { }

  mentionValueAttach() {
    this._cs.config.values = this._cs.dropdown;
    var tribute = new Tribute(this._cs.config);
    var element = document.querySelector("trix-editor");
    tribute.attach(element);
  }

  trixChangeEvent() {
    addEventListener("trix-change", function (event) { });
  }

  ngAfterViewInit() {
    this.mentionValueAttach();
    this.trixChangeEvent();
  }

  ngOnInit() {

  }
}
