import { Component, EventEmitter, Output} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
@Output() taskCreated = new EventEmitter<Task>();

/* je suis obligé de mettre un parametre a ma new Task car mon constructeur en reclame un (cf constructeur doer dans task.tas)*/ 
newTask = new Task("doer");

addTask(){
  this.taskCreated.emit(this.newTask);
  this.newTask=new Task("doer")
}

}
