import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-section-presentation',
  templateUrl: './section-presentation.component.html',
  styleUrls: ['./section-presentation.component.less'],
  animations: [
    trigger('reset', [
      state('init', style({
        left: '-20px',
        bottom: '-10px'
      })),
      transition('* => init', animate('0.5s'))
    ]),
  ]
})
export class SectionPresentationComponent implements OnInit {
  left:number;
  bottom:number;
  animState:string

  @ViewChild("repere", {read: ElementRef}) repere: ElementRef;

  constructor() {
    this.left = -20;
    this.bottom = -10;
    this.animState = 'ready';
  }

  parallax(event){
    let posX = event.movementX;
    let posY = event.movementY;
    this.animState = 'ready';
    this.left = this.left + ( posX / 50 );
    this.bottom = this.bottom + ( posY / 50);
  }

  resetParallax(){
    this.animState = 'init';
  }

  ngOnInit(): void {
  }

}
