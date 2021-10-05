import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola-Frontend';
  Patients = [{"Nombre":"Juan","Edad":12,"NTS":3},
  {"Nombre":"Joaquin","Edad":16,"NTS":6},
  {"Nombre":"Maria","Edad":20,"NTS":4}];


AddPatients():void{

}

DeletePatients():void{

}

UpdatePatients():void{

}

EditPatients():void{
  
}
}