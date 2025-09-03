import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  data: any[] = [];
  bolean: any;
  
  constructor(private apiService: ApiService){}
  filterPost = "";
  ngOnInit():void{
    this.llenarData();
  }

  llenarData(){
    this.apiService.getDataMaps("maps").subscribe(data=>{
      this.data = data.data;
    })
  }
}
