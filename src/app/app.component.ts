import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allAreas=[
    {name:'Design area', color:'purpel', bgColor:'bg-purpel', tasks:[{name:'Design Task', links:3, img:'background.jpeg'}]},
    {name:'Frontend area', color:'orange', bgColor:'bg-orange', tasks:[{name:'Frontend Task', links:5, img:'background.jpeg'}]},
    {name:'Development area', color:'blue', bgColor:'bg-blue', tasks:[{name:'Development Task', links:2, img:'background.jpeg'}]},
    {name:'Board name', color:'green', bgColor:'bg-green', tasks:[{name:'Board Task', links:4, img:'background.jpeg'}]},
  ]
  
  searchFilter='';
  addCard(id){
    let task = new Task();
    task.name = 'New Task';
    task.links = Math.floor(Math.random() * 9) + 1;
    task.img = 'background.jpeg';
    this.allAreas[id].tasks.push(task);
  }
}
export class Task {
  name:string;
  links:number;
  img:string;
}