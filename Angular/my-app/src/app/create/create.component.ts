import { Component} from '@angular/core';
import { Task } from '../task';
import {TaskProviderService} from '../task-provider.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  newTask = new Task("doer");

  constructor(private provider: TaskProviderService){}
/* je suis obligé de mettre un parametre a ma new Task car mon constructeur en reclame un (cf constructeur doer dans task.tas)*/ 


addTask(){
  this.provider.add(this.newTask);
  this.newTask=new Task("doer")
}

}
