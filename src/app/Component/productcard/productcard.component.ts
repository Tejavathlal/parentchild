import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit  {


   @Input() products:any

 constructor(){}

  ngOnInit(): void {
    console.log(this.products);
  }

}
