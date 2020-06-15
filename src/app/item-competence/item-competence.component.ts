import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-competence',
  templateUrl: './item-competence.component.html',
  styleUrls: ['./item-competence.component.less'],
})
export class ItemCompetenceComponent implements OnInit {
  @Input() public alt: string;
  @Input() public src: string;
  @Input() public delay: number;
  public isAnimated: boolean;
  constructor() {
    this.isAnimated= false;
  }

  ngOnInit(): void {
    setTimeout (() => {
      this.isAnimated= true;
    }, this.delay);
  }

}
