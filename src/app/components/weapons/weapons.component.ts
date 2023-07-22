import { Component } from '@angular/core';
import { ApiServiceWeapons } from 'src/app/service/apiWeapons.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent {
  data: any[] = [];
  bolean: any;
  
  constructor(private apiService: ApiServiceWeapons){}
  
  ngOnInit():void{
    this.llenarDataWeapons();
  }

  llenarDataWeapons(){
    this.apiService.getDataWeapons().subscribe(data=>{
      this.data = data.data;
    })
  }
}
