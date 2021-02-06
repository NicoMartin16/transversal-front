import { Injectable } from '@angular/core';
import { ObjectModelInitializer } from './ObjectModelInitializer';

@Injectable()
export class TextProperties {
    const: any;

    constructor(objectModelInitializer: ObjectModelInitializer) {
        this.const = objectModelInitializer.getConst();
    }

    getProperties(idioma) {
        let constant = this.const;
        return {
            // Módulo Disponibilidad
            lbl_mtto_disponibilidad_title: idioma == constant.idiomaEs ? 'Disponibilidad' : 'Availability',
            lbl_mtto_disponibilidad_detalles_equipo: idioma == constant.idiomaEs ? 'Detalles Equipo' : 'Device Details',
            lbl_mtto_disponibilidad_ordernar_ascendente: idioma == constant.idiomaEs ? 'Ascendente' : 'Upward',
            lbl_mtto_disponibilidad_ordernar_descendente: idioma == constant.idiomaEs ? 'Descendente' : 'Downward',
            lbl_mtto_disponibilidad_ordernar_marca: idioma == constant.idiomaEs ? 'Marca' : 'Brand',
            lbl_mtto_disponibilidad_ordernar_tipo: idioma == constant.idiomaEs ? 'Tipo' : 'Type',
            lbl_mtto_disponibilidad_ordernar_nombre: idioma == constant.idiomaEs ? 'Nombre' : 'Name',
            lbl_mtto_disponibilidad_renovacion: idioma == constant.idiomaEs ? 'Renovación' : 'Renewal',
            lbl_mtto_disponibilidad_contenedor_disponibilidad: idioma == constant.idiomaEs ? 'Disponibilidad' : 'Availability',
            lbl_mtto_disponibilidad_prepago: idioma == constant.idiomaEs ? 'Prepago Control' : 'Prepaid Control',
            lbl_mtto_disponibilidad_caracteristicas_destacadas: idioma == constant.idiomaEs ? 'Características Destacadas' : 'Featured Features',
            lbl_mtto_disponibilidad_caracteristicas_tecnicas: idioma == constant.idiomaEs ? 'Características Técnicas' : 'Technical Features',
            lbl_mtto_disponibilidad_renovacion_item_1: idioma == constant.idiomaEs ? 'Si eres cliente Claro, cambia tu smartphone sin necesidad de tarjeta de crédito.' : 'If you are a Claro client, change your smartphone without the need for a credit card.',
            lbl_mtto_disponibilidad_renovacion_item_2: idioma == constant.idiomaEs ? 'Puedes financiar tu equipo a 6 o 12 meses en tu factura Claro.' : 'You can finance your equipment in 6 or 12 months on your Claro invoice.',
            lbl_mtto_disponibilidad_renovacion_item_3: idioma == constant.idiomaEs ? 'Puedes renovar tu equipo accediendo a un precio especial y manteniendo tu número, siempre y cuando tu servicio se encuentre activo.' : 'You can renew your equipment by accessing a special price and keeping your number, as long as your service is active.',
            lbl_mtto_disponibilidad_renovacion_item_4: idioma == constant.idiomaEs ? 'Aplica para referencias seleccionadas.' : 'Applies to selected references.',
            lbl_mtto_disponibilidad_departamento: idioma == constant.idiomaEs ? 'Departamento' : 'Department',
            lbl_mtto_disponibilidad_ciudad: idioma == constant.idiomaEs ? 'Ciudad' : 'City',
            lbl_mtto_disponibilidad_tamano_pantalla: idioma == constant.idiomaEs ? 'Tamaño Pantalla' : 'Screen Size',
            lbl_mtto_disponibilidad_camara_posterior: idioma == constant.idiomaEs ? 'Cámara Posterior' : 'Rear Camera',
            lbl_mtto_disponibilidad_camara_frontal: idioma == constant.idiomaEs ? 'Cámara Frontal' : 'Frontal Camera',
            lbl_mtto_disponibilidad_memoria_interna: idioma == constant.idiomaEs ? 'Memoria Interna' : 'Internal Memory',
            lbl_mtto_disponibilidad_procesador: idioma == constant.idiomaEs ? 'Procesador' : 'Processor',
            lbl_mtto_disponibilidad_descripcion_equipo: idioma == constant.idiomaEs ? 'Conoce el celular. Adquiérelo en Kit Amigo y por tu primera recarga de $2000 o más, te darémos un Paquete de Bienvenida.' : 'Meet the cell phone. Get it in Kit Amigo and for your first recharge of $ 2000 or more, we will give you a Welcome Package.',
            lbl_mtto_disponibilidad_valor_contado: idioma == constant.idiomaEs ? 'De Contado' : 'Cash',
            lbl_mtto_disponibilidad_valor_cuotas: idioma == constant.idiomaEs ? 'Pago a cuotas con tu factura' : 'Payment in installments with your invoice',
            lbl_mtto_disponibilidad_cliente_claro: idioma == constant.idiomaEs ? 'Cliente Claro' : 'Claro Client',
            lbl_mtto_disponibilidad_cantidad: idioma == constant.idiomaEs ? 'Cantidad' : 'Quantity',
            lbl_mtto_disponibilidad_color: idioma == constant.idiomaEs ? 'Color: ' : 'Color: ',
            lbl_mtto_disponibilidad_plan_servicio_valor_texto_1: idioma == constant.idiomaEs ? 'Habla a Todo Operador/Seg. a:' : 'Speak to All Operator/Seg. to:',
            lbl_mtto_disponibilidad_plan_servicio_valor_texto_2: idioma == constant.idiomaEs ? 'Más información >' : 'More information >',
            lbl_mtto_disponibilidad_plan_servicio_texto_1: idioma == constant.idiomaEs ? 'Elegido de voz Todo Destino' : 'Voice Pick All Destiny',
            lbl_mtto_disponibilidad_plan_servicio_texto_2: idioma == constant.idiomaEs ? 'Mensaje de texto Todo Destino a $60' : 'All Destination $ 60 text message',
            lbl_mtto_disponibilidad_plan_servicio_texto_3: idioma == constant.idiomaEs ? 'La navegación es por compra de paquetes' : 'Navigation is by purchasing packages',
            lbl_mtto_disponibilidad_caracteristicas: idioma == constant.idiomaEs ? 'Características' : 'Features',
            lbl_mtto_disponibilidad_planes_precios: idioma == constant.idiomaEs ? 'Planes y Precios' : 'Prices and Plans',
        }
    }
}