import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-section-competences',
  templateUrl: './section-competences.component.html',
  styleUrls: ['./section-competences.component.less'],
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
export class SectionCompetencesComponent implements OnInit {
  left:number;
  bottom:number;
  animState:string;
  images: { alt: string, src: string, delay: number }[];
  constructor() {
    this.left = -20;
    this.bottom = -10;
    this.animState = 'ready';
    this.images= [{
      "alt": "logo de Photoshop",
      "src": "./assets/photoshop.jpg",
      "delay": 1*600,
    },
    {
      "alt": "logo de Illustrator",
      "src": "./assets/illustrator.jpg",
      "delay": 2*600,
    },
    {
      "alt": "logo de inDesign",
      "src": "./assets/inDesign.jpg",
      "delay": 3*600,
    },
    {
      "alt": "logo de HTML5",
      "src": "./assets/html5.jpg",
      "delay": 4*600,
    },
    {
      "alt": "logo de CSS3",
      "src": "./assets/css3.jpg",
      "delay": 2*600,
    },
    {
      "alt": "logo de Javascript",
      "src": "./assets/js6.jpg",
      "delay": 3*600,
    },
    {
      "alt": "logo de Bootstrap",
      "src": "./assets/bootstrap.jpg",
      "delay": 4*600,
    },
    {
      "alt": "logo de jQuery",
      "src": "./assets/jQuery.jpg",
      "delay": 5*600,
    },
    {
      "alt": "logo de PHP",
      "src": "./assets/php7.jpg",
      "delay": 3*600,
    },
    {
      "alt": "logo de mySQL",
      "src": "./assets/mySql.jpg",
      "delay": 4*600,
    },
    {
      "alt": "logo de phpMyAdmin",
      "src": "./assets/phpMyAdmin.jpg",
      "delay": 5*600,
    },
    {
      "alt": "logo de Github",
      "src": "./assets/github.jpg",
      "delay": 6*600,
    },
    {
      "alt": "logo de Wordpress",
      "src": "./assets/wordpress.jpg",
      "delay": 4*600,
    },
    {
      "alt": "logo de Prestashop",
      "src": "./assets/prestashop.jpg",
      "delay": 5*600,
    },
    ];
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
