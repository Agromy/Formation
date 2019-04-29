export enum TaskStatus {
    ToDo,
    Doing,
    Done
}
// enum c'est que dans typescript (les fontion/methode prédéfinies)

export class Task {
  name: string;
  status: TaskStatus;
  deadLine: Date;
}






export class Task2 {
    name: string;
    status: TaskStatus;
    deadLine: Date;
  
    constructor(public doer:Person){}
  }
/*rajout d'une propriété au moment ou on utilise le consturctor

// pas besoin de constructeur ici sous angular 
/* en dessous ca marche aussi

export class AppCtorComponent {
    title: string;
    myHero: string;
  
    constructor() {
      this.title = 'Tour of Heroes';
      this.myHero = 'Windstorm';
    }
  }

  */