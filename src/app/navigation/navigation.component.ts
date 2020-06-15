import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  itemsNav: { title: string, anchor: string }[];
  constructor() {
    this.itemsNav= [{
      "title": "Présentation",
      "anchor": "#presentationSection",
    },{
      "title": "Expériences",
      "anchor": "#experiencesSection",
    },{
      "title": "Compétences",
      "anchor": "#competencesSection",
    },]
   }

  ngOnInit(): void {
  }

}
