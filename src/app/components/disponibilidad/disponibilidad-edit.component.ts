import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disponibilidad-edit',
  templateUrl: './disponibilidad-edit.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event) {
    console.log(event);
  }
}
