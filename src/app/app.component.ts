import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {App} from "botframework-webchat";

@Component({
  selector: 'app-root',
  template: `<div id="bot-chat-container" #botWindow></div>`
})
export class AppComponent implements OnInit {
  @ViewChild("botWindow") botWindowElement: ElementRef;
  direct_line_secret: string = 'VHHXtjk5RzQ.cwA.5WM.o8BCHZhssuCgcNyT3uM1Z7HCrmAaAz1rk-6G8xMgieE';

  ngOnInit(): void {
    App({
      directLine: {secret: this.direct_line_secret },
      user: {id: 'user'},
      bot: {id: 'bot'},
      adaptiveCardsHostConfig: {}
    }, this.botWindowElement.nativeElement)
  }
}
