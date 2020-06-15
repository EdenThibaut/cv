import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-section-experiences',
  templateUrl: './section-experiences.component.html',
  styleUrls: ['./section-experiences.component.less'],
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
export class SectionExperiencesComponent implements OnInit {
  left:number;
  bottom:number;
  animState:string;
  itemsJob: { title: string, subtitle: string, details: string }[];
  constructor() {
    this.left = -20;
    this.bottom = -10;
    this.animState = 'ready';
    this.itemsJob= [{
      "title": "Intégrateur / Chef de projet",
      "subtitle": "Freelance",
      "details": "<p>Responsable de la réalisation de sites web d’entreprises sur le CMS open source Wordpress pour le compte de la société française Vinci Energies.</p><ul><li>Personnalisation des éléments du thème pour chaque client</li><li>Intégration du contenu sur l’intégralité du site</li><li>Réalisation d’icônes et retouche d’images avec les outils de la suite Adobe</li></ul>"
    },
    {
      "title": "Développeur / Intégrateur",
      "subtitle": "Web67.net, Obernai, France",
      "details": "<p>Web67 offre la possibilité aux petites entreprises (artisans, PME) d’être présent sur internet et de gagner en visibilité pour accroître leurs chiffres d’affaires et leur notoriété.</p><ul><li>Mise en oeuvre des solutions de A à Z</li><li>Analyse fonctionnelle et ergonomique</li><li>Développement et intégration de sites vitrines complet sous le CMS Wordpress</li><li>Développement et intégration de sites e-commerces complet sous le CMS Wordpress avec le plugin WooCommerce</li><li>Développement et intégration de modules personnalisés pour le CMS Wordpress</li><li>Développement et intégration de sites e-commerces sous le CMS Prestashop</li><li>Création et mise en place des maquettes graphiques</li><li>Optimisation du référencement naturel SEO</li><li>Mise en place de campagne publicitaire avec Google Ads</li><li>Suivi, amélioration et maintenance de nos solutions</li><li>Formation du client pour l’utilisation de sa solution</li><li>Gestion des réseaux sociaux de l’entreprise</li></ul>"
    },
    {
      "title": "Développeur web (stage)",
      "subtitle": "Amplitub's, Colmar, France",
      "details": "<p>Amplitub’s propose de la location de matériels pour l’événementiels.</p><ul><li>Étude du besoin du client ( Amplitub’s ) et plannification du projet</li><li>Mise en place d’une base de donnée relationnel avec phpMyAdmin</li><li>Développement d’une CRM interne pour gérer les clients, la location du matériel et la génération du devis</li></ul>"
    },
    {
      "title": "Développeur C# (stage)",
      "subtitle": "2IO Conseil, Colmar, France",
      "details": "<p>2IO Conseil développe des logiciels, outils et solutions métiers pour le secteur industriel.</p><ul><li>Automatisation de test unitaires et fonctionnels sur une application développer en C#</li></ul>"
    },];
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
