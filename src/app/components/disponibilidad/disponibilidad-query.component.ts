import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-disponibilidad-query',
  templateUrl: './disponibilidad-query.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadQueryComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
