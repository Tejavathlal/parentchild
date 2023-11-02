import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  allproduct: any = [];
  filterproducts: any = [];

  searchinput: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://fakestoreapi.com/products").subscribe(
      (res) => {
        // this.products = res;
        this.allproduct = res;
        this.filterproducts = res
      }
    )
  }

  filterproduct() {
    this.filterproducts = this.allproduct.filter(
      (p: any) => {
        return p.title.toLowerCase().includes(this.searchinput.toLocaleLowerCase());
      }
    )
  }
  sort(order: any) {
    if (order == 'asc') {
      this.filterproducts.sort(
        (p1: any, p2: any) => {
          return p1.price > p2.price ? 1 : -1
        }
      )
    }
    else {
      this.filterproducts.sort(
        (p1: any, p2: any) => {
          return p1.price > p2.price ? -1 : 1
        }
      )
    }
  }
}
