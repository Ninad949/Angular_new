import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  text: any;

  num:any = null;

  disabled: boolean = false;

  string_name :string;

  string_phone :string;

  string_address :string;

  list: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  getVal(item){

    this.string_name= item.target.value;
     
    console.log(this.string_name);
  }


  getVal2(item){

    this.string_phone= item.target.value;
     
    console.log(this.string_phone);
  }


  getVal3(item){

    this.string_address= item.target.value;
     
    console.log(this.string_address);
  }

  save_value(){

    this.num = 1;
    console.log("value saved");

  }

  toggleDisabled() {
    this.disabled = !this.disabled;
}

}