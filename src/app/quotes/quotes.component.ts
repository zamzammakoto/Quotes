import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl:'./quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
      new Quote(1,'Beauty begins the moment you you decide to be yourself.'),
      new Quote(2,'Adream doesnt beecome reality through magic it takes sweat determiation and hardwork'),
      new Quote(3, 'Charity  is the roots of all good works'),
      new Quote(4, 'The only way to do great work is to love what you do the most'),
      new Quote(5, 'In the middile of every difficulty lies an opputunity'),
      new Quote(6, 'Fortune knocks but once but misfortune has much more patience'),

  ]

  constructor() { }

  ngOnInit() {
  }
}
