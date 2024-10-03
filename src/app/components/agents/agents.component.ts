import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent {
  data: any[] = [];
  bolean: any;
  
  constructor(private apiService: ApiService){}
  filterPost = "";
  ngOnInit():void{
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data = data.data;
    })
  }
}
