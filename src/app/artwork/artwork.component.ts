import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  artwork = [
    {src: "../../assets/images/biscuits.jpg", alt: "Alfons Mucha - 1896 - Biscuits Lefèvre-Utile", title: "Poster for Biscuits Lefèvre-Utile", year: "(1896)"},
    {src: "../../assets/images/champenois.jpg", alt: "Alfons Mucha - 1898 - Rêverie (F. Champenois Calendar 1898)", title: "Rêverie (F. Champenois Calendar 1898)", year: "(1898)"},
    {src: "../../assets/images/bouquet.jpg", alt: "Alfons Mucha - 1900 - The Seasons: Spring (detail)", title: "The Seasons: Spring (detail)", year: "(1900)"},
    {src: "../../assets/images/four_seasons.jpg", alt: "Alfons Mucha - 1897 - The Seasons (detail)", title: "The Seasons (detail)", year: "(1897)"},
    {src: "../../assets/images/trappistine.jpg", alt: "Alfons Mucha - 1897 - La Trappistine (detail)", title: "Poster for La Trappistine (detail)", year: "(1897)"},
    {src: "../../assets/images/champagne.jpg", alt: "Alfons Mucha - 1896 - Biscuits Champagne Lefèvre-Utile", title: "Poster for Biscuits Champagne Lefèvre-Utile", year: "(1896)"},
    {src: "../../assets/images/painting_small.jpg", alt: "Alfons Mucha - 1898 - The Arts: Painting", title: "The Arts: Painting", year: "(1898)"},
    {src: "../../assets/images/fruit.jpg", alt: "Alfons Mucha - 1897 - Fruit", title: "Fruit", year: "(1897)"},
    {src: "../../assets/images/cycles_small.jpg", alt: "Alfons Mucha - 1902 - Cycles Perfecta", title: "Poster for Cycles Perfecta", year: "(1902)"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
