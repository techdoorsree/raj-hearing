import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { appRouting } from "./app.Routing";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSlidesModule } from 'ngx-slides';
import { FooterComponent } from './footer/footer.component';
import { HomevisitComponent } from './homevisit/homevisit.component';
import { MoldplugsComponent } from './moldplugs/moldplugs.component';
import { HearingaidComponent } from './hearingaid/hearingaid.component';
import { FreecounsilingComponent } from './freecounsiling/freecounsiling.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SalesComponent } from './sales/sales.component';
import { SpeechComponent } from './speech/speech.component';
import { HearingevaluationComponent } from './hearingevaluation/hearingevaluation.component';
import { ClientsComponent } from './clients/clients.component'
import { SliderModule } from 'angular-image-slider';
import { ScrollEventModule } from 'ngx-scroll-event';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
  import { MDBBootstrapModule } from 'angular-bootstrap-md';
  import { DropdownModule } from 'angular-bootstrap-md';
  import {NgxPaginationModule} from 'ngx-pagination'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SubComponent } from './sub/sub.component';
import { PageComponent } from './page/page.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {     ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TechnologyComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
    HomevisitComponent,
    MoldplugsComponent,
    HearingaidComponent,
    FreecounsilingComponent,
    AccessoriesComponent,
    SalesComponent,
    SpeechComponent,
    HearingevaluationComponent,
    ClientsComponent,
    ProductDetailsComponent,
    SubComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SliderModule,
    ScrollEventModule,
    NgbModule.forRoot(),
    NgxSlidesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    NgxPaginationModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
