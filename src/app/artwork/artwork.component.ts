import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  artwork = [
    {
      class: 'biscuits',
      title: 'Poster for Biscuits Lefèvre-Utile',
      year: '(1896)'
    },
    {
      class: 'cal',
      title: 'Rêverie (F. Champenois Calendar 1898)',
      year: '(1898)'
    },
    {
      class: 'trap',
      title: 'Poster for La Trappistine (detail)',
      year: '(1897)'
    },
    {
      class: 'bouquet',
      title: 'The Seasons: Spring (detail)',
      year: '(1900)'
    },
    {
      class: 'champ',
      title: 'Poster for Biscuits Champagne Lefèvre-Utile',
      year: '(1896)'
    },
    {
      class: 'four',
      title: 'The Seasons (detail)',
      year: '(1897)'
    },
    {
      class: 'fruit',
      title: 'Fruit',
      year: '(1897)'
    },
    {
      class: 'fall',
      title: 'The Seasons: Autumn',
      year: '(1896)'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
