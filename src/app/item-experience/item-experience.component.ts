import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-item-experience',
  templateUrl: './item-experience.component.html',
  styleUrls: ['./item-experience.component.less'],
  animations: [
    trigger('toggle', [
      state('true', style({
        maxHeight: '1000px'
      })),
      state('false', style({
        maxHeight: '0'
      })),
      transition('false => true', animate('2s ease-in-out')),
      transition('true => false', animate('1s ease-in-out')),
    ]),
    trigger('isToggle', [
      state('true', style({
        transform: 'rotate(180deg)',
        color: '#F5C120'
      })),
      state('false', style({
        transform: 'rotate(0deg)',
        color: '#000000'
      })),
      transition('false => true', animate('0.5s ease-in-out')),
      transition('true => false', animate('0.5s ease-in-out')),
    ]),
  ]
})
export class ItemExperienceComponent implements OnInit {
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public details: string;
  public toggleJob: boolean;
  constructor() {
    this.toggleJob= false;
  }

  toggleExp(event){
    console.log("Click click");
    this.toggleJob = !this.toggleJob;
  }

  ngOnInit(): void {
  }

}
