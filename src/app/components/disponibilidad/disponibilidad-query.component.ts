import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import { Producto } from 'src/app/models/equipoModel';
import { ObjectModelInitializer } from 'src/app/shared/ObjectModelInitializer';
import { TextProperties } from 'src/app/shared/TextProperties';
import { ProductService } from 'src/app/services/productService';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-disponibilidad-query',
  templateUrl: './disponibilidad-query.component.html',
  styleUrls: ['./disponibilidad.component.css'],
  providers: [ MessageService, ProductService ]
})
export class DisponibilidadQueryComponent implements OnInit {

  @ViewChild('sc') sc;

  // Objetos de Animaciones
  tada: any;
  fadeIn: any;

  // Objetos datos
  listaProductos: Producto[];
  sortOptionsEqu: SelectItem[];
  sortKey: string;
  sortFieldEqu: string;
  sortOrderEqu: string;
  selectedBrands: string[];
  selectedSO: string[];
  objetoCatalogo: any;

  // Utilidades
  displayModalEdit: boolean = false;
  objectModelInitializer: any;
  msg: any;
  textProperties: any;
  const: any;

  varPruebaStr: String = 'huawei';

  constructor(private router: Router, private route: ActivatedRoute,
    textProperties: TextProperties, objectModelInitializer: ObjectModelInitializer,
    private messageService: MessageService, private productService: ProductService, private primengConfig: PrimeNGConfig) {
      
    // Objetos inmutables
    this.textProperties = textProperties;
    this.objectModelInitializer = objectModelInitializer;
    this.const = objectModelInitializer.getConst();

    // Objetos mutables
    this.msg = textProperties.getProperties(this.const.idiomaEs)

    // Objetos datos
    this.selectedBrands = [];
    this.selectedSO = [];
  }

  ngOnInit(): void {
    this.obtenerParametrizaciones();

    this.productService.getProducts().then(data => this.listaProductos = data);

        this.sortOptionsEqu = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];

        this.primengConfig.ripple = true;
  }

  obtenerParametrizaciones() {
    
  }

  inicializar() {
    this.displayModalEdit = false;
    /*if (typeof this.disponibilidadService.filtroTablaEdit !== 'undefined') {
      this.varPruebaStr = this.disponibilidadService.filtroTablaEdit;
    }*/

    this.sortOptionsEqu = [
      { label: this.msg.lbl_mtto_disponibilidad_ordernar_ascendente, value: 'precioNormal' },
      { label: this.msg.lbl_mtto_disponibilidad_ordernar_descendente, value: '!precioNormal' },
      { label: this.msg.lbl_mtto_disponibilidad_ordernar_marca, value: 'marca.label' },
      { label: this.msg.lbl_mtto_disponibilidad_ordernar_tipo, value: 'tipo.label' },
      { label: this.msg.lbl_mtto_disponibilidad_ordernar_nombre, value: 'nombre' }
    ];

    this.cargarCatalogo();
  }

  formatearValorMoneda(valor) {
    return '$' + new Intl.NumberFormat().format(parseFloat(valor.amount))
  }

  onSortChangeEqu(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrderEqu = "-1";
      this.sortFieldEqu = value.substring(1, value.length);
    }
    else {
      this.sortOrderEqu = "1";
      this.sortFieldEqu = value;
    }
  }

  cargarCatalogo() {
    
  }

  mostrarDetallesEdit(equipo: Producto) {
    try {
      //this.disponibilidadService.equipoSeleccionado = equipo;
      this.displayModalEdit = true;
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  redirectToDisponibilidadEdit(equipo: Producto) {
    try {
      //this.disponibilidadService.equipoSeleccionado = equipo;
      this.router.navigate(['disponibilidad-edit']);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  obtenerColorEquipo(equipo: Producto) {
    //return this.util.obtenerColorEquipo(equipo);
  }

  handleClick(event) {
    console.log(event);
  }
}
