import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdlModule } from '@angular-mdl/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

// Imports de PrimeNG
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { ProgressBarModule } from 'primeng/progressbar';
import { DeferModule } from 'primeng/defer';
import { DragDropModule } from 'primeng/dragdrop';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputNumberModule } from 'primeng/inputnumber';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { MegaMenuModule } from 'primeng/megamenu';
import { BlockUIModule } from 'primeng/blockui';
import { GalleriaModule } from 'primeng/galleria';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { RatingModule } from 'primeng/rating';

// Imports de Utilidades
import { ObjectModelInitializer } from 'src/app/shared/ObjectModelInitializer';
import { TextProperties } from 'src/app/shared/TextProperties';
import { HeaderComponent } from './components/header/header.component';

// Imports de Sevices

import { ProductService } from 'src/app/services/productService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdlModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ProgressSpinnerModule,
    CarouselModule,
    CardModule,
    FileUploadModule,
    RadioButtonModule,
    DialogModule,
    InputTextModule,
    MessagesModule,
    InputSwitchModule,
    MessageModule,
    TableModule,
    CalendarModule,
    ProgressBarModule,
    ToastModule,
    TabMenuModule,
    InputTextareaModule,
    DragDropModule,
    DeferModule,
    ScrollPanelModule,
    StepsModule,
    InputNumberModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    MegaMenuModule,
    GalleriaModule,
    SliderModule,
    ButtonModule,
    BlockUIModule,
    TabViewModule,
    AccordionModule,
    CheckboxModule,
    FieldsetModule,
    ChipsModule,
    RatingModule
  ],
  providers: [ObjectModelInitializer, TextProperties, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
