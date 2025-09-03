import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent {
  data: any[] = [];
  bolean: any;
  
  constructor(private apiService: ApiService){}
  filterPost = "";
  ngOnInit():void{
    this.llenarDataWeapons();
  }

  llenarDataWeapons(){
    this.apiService.getDataWeapons("weapons").subscribe(data=>{
      this.data = data.data;
    })
  }
}
