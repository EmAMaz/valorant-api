import { Component } from '@angular/core';
import { ApiServiceMaps } from 'src/app/service/apiMaps.Service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  data: any[] = [];
  bolean: any;
  
  constructor(private apiService: ApiServiceMaps){}
  filterPost = "";
  ngOnInit():void{
    this.llenarData();
  }

  llenarData(){
    this.apiService.getDataMaps().subscribe(data=>{
      this.data = data.data;
    })
  }
}
