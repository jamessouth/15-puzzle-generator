import { Component, OnInit } from '@angular/core';
import Artwork from './artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  artwork: Array<Artwork> = [
    {
      class: 'biscuits',
      link: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Alfons_Mucha_-_1896_-_Biscuits_Lef%C3%A8vre-Utile.jpg',
      title: 'Poster for Biscuits Lefèvre-Utile',
      year: '(1896)'
    },
    {
      class: 'cal',
      link: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Alfons_Mucha_-_F._Champenois_Imprimeur-%C3%89diteur.jpg',
      title: 'Rêverie (F. Champenois Calendar 1898)',
      year: '(1898)'
    },
    {
      class: 'trap',
      link: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Mucha_-_La_Trappistine.jpg',
      title: 'Poster for La Trappistine (detail)',
      year: '(1897)'
    },
    {
      class: 'bouquet',
      link: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Spring_by_Alfons_Mucha.jpg',
      title: 'The Seasons: Spring (detail)',
      year: '(1900)'
    },
    {
      class: 'champ',
      link: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Alfons_Mucha_-_1896_-_Biscuits_Champagne-Lef%C3%A8vre-Utile.jpg',
      title: 'Poster for Biscuits Champagne Lefèvre-Utile',
      year: '(1896)'
    },
    {
      class: 'four',
      link: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Four_Seasons_by_Alfons_Mucha%2C_circa_1897.jpg',
      title: 'The Seasons (detail)',
      year: '(1897)'
    },
    {
      class: 'fruit',
      link: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Alfons_Mucha_-_Fruit.jpg',
      title: 'Fruit',
      year: '(1897)'
    },
    {
      class: 'fall',
      link: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Alfons_Mucha_-_1896_-_Autumn.jpg',
      title: 'The Seasons: Autumn',
      year: '(1896)'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
