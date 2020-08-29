import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database/databaseservice';

import { IDatabase } from '../database/database';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

const PRODUCTS = [
  {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
  {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  
  errorMessage: '';
  Filterdatabase: IDatabase[] = [];

  int : number = 56;

 Tempdatabase : any[] = [
  {
    "databaseId": "1",
    "CustomerName": "Ninad",
    "Adresss": "Sumukh",
    "phoneNumber": "2344234"
    
  },
  {
    "databaseId": "2",
    "CustomerName": "Neeraj",
    "Adresss": "Sahakarnagar2",
    "phoneNumber": "242344"
  },
  {
    "databaseId": "3",
    "CustomerName": "Darsheel",
    "Adresss": "Chintamaninagar",
    "phoneNumber": "234234"
  }
  
];



 database : IDatabase[] = [];
 database2 : IDatabase[] = [];
  HttpClient: any;

  
  constructor (private dbservice: DatabaseService,
            private route: ActivatedRoute,
              private router: Router, ) { }
/*  ngOnInit() {

    this.dbservice.getCarsSmall().then(db=> this.database =  db);
    
  }
*/
  ngOnInit() :void
  {
    this.dbservice.getProducts().subscribe({
      next: database => {
          this.database = database;
        //  this.database2= this.database;
       // this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }


   /* const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.dbservice.getProduct(id);
    }
    */




/*getProduct(id: number) {
  this.dbservice.getProduct(id).subscribe({
    next: database =>  this.database= database,
    error: err => this.errorMessage = err

   } );
 
 }

*/
  

}



  


