import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MessageService } from 'primeng/api';
import { Producto } from 'src/app/models/equipoModel';
import { ObjectModelInitializer } from 'src/app/shared/ObjectModelInitializer';
import { TextProperties } from 'src/app/shared/TextProperties';
import { ProductService } from 'src/app/services/productService';
import { PrimeNGConfig } from 'primeng/api';
import { ProductSize } from '../../models/productSize.model';
import { ProductSizeService } from '../../services/product-size.service';

@Component({
  selector: 'app-disponibilidad-query',
  templateUrl: './disponibilidad-query.component.html',
  styleUrls: ['./disponibilidad.component.css'],
  providers: [MessageService, ProductService],
})
export class DisponibilidadQueryComponent implements OnInit {
  @ViewChild('sc') sc;

  // Objetos de Animaciones
  tada: any;
  fadeIn: any;

  // Objetos datos
  listaProductos: Producto[];
  listaTamanos: ProductSize[];
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    textProperties: TextProperties,
    objectModelInitializer: ObjectModelInitializer,
    private messageService: MessageService,
    private productService: ProductService,
    private primengConfig: PrimeNGConfig,
    private ProductSizeService: ProductSizeService
  ) 
  
  {
    // Objetos inmutables
    this.textProperties = textProperties;
    this.objectModelInitializer = objectModelInitializer;
    this.const = objectModelInitializer.getConst();

    // Objetos mutables
    this.msg = textProperties.getProperties(this.const.idiomaEs);

    // Objetos datos
    this.selectedBrands = [];
    this.selectedSO = [];
  }

  ngOnInit(): void {

    this.getProductSize();
    this.obtenerParametrizaciones();

    this.productService.getProduct().subscribe(
      (data) => {
        this.listaProductos = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.sortOptionsEqu = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
  }

  obtenerParametrizaciones() { }

  getProductSize() {
    this.ProductSizeService.getProductSize().subscribe((res) => {
      this.listaTamanos = res;
      console.log(this.listaTamanos);
    })
  }

  inicializar() {
    this.displayModalEdit = false;
    /*if (typeof this.disponibilidadService.filtroTablaEdit !== 'undefined') {
      this.varPruebaStr = this.disponibilidadService.filtroTablaEdit;
    }*/

    this.sortOptionsEqu = [
      {
        label: this.msg.lbl_mtto_disponibilidad_ordernar_ascendente,
        value: 'precioNormal',
      },
      {
        label: this.msg.lbl_mtto_disponibilidad_ordernar_descendente,
        value: '!precioNormal',
      },
      {
        label: this.msg.lbl_mtto_disponibilidad_ordernar_marca,
        value: 'marca.label',
      },
      {
        label: this.msg.lbl_mtto_disponibilidad_ordernar_tipo,
        value: 'tipo.label',
      },
      {
        label: this.msg.lbl_mtto_disponibilidad_ordernar_nombre,
        value: 'nombre',
      },
    ];

    this.cargarCatalogo();
  }

  formatearValorMoneda(valor) {
    return '$' + new Intl.NumberFormat().format(parseFloat(valor.amount));
  }

  onSortChangeEqu(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrderEqu = '-1';
      this.sortFieldEqu = value.substring(1, value.length);
    } else {
      this.sortOrderEqu = '1';
      this.sortFieldEqu = value;
    }
  }

  cargarCatalogo() { }

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

  getImage(product: Producto) {
    let pictureResponse: any;
    let base64Data: any;
    let retrieveImage: any;

    try {
      if (product !== null && product.picture !== null) {
        console.log(product);
        
        pictureResponse = product.picture;
        console.log("prueba " + pictureResponse);

        base64Data = this.base64ToArray(pictureResponse);
        console.log(base64Data);

        retrieveImage = 'data:image/jpeg;base64,' + pictureResponse;
        console.log(retrieveImage);
        return retrieveImage;
      }

    } catch (error) {
      console.log(error);
    }
  }

  base64ToArray(base64: string): Uint8Array {
    const binaryString = window.atob(base64 ?? '');
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
}
