
import {Routes,RouterModule} from '@angular/router';
import {AppComponent } from './app.component';
import {NavigationComponent } from './navigation/navigation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechnologyComponent } from './technology/technology.component';
import {ProductsComponent } from './products/products.component';
import {ServicesComponent  } from './services/services.component';
import { HomevisitComponent } from './homevisit/homevisit.component';
import {ContactComponent  } from './contact/contact.component';

import { MoldplugsComponent } from './moldplugs/moldplugs.component';
import { HearingaidComponent } from './hearingaid/hearingaid.component';
import { FreecounsilingComponent } from './freecounsiling/freecounsiling.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SalesComponent } from './sales/sales.component';
import { SpeechComponent } from './speech/speech.component';
import { HearingevaluationComponent } from './hearingevaluation/hearingevaluation.component'
const routes:Routes=[
  
{path:'',component:HomeComponent },
{path:'home',component:HomeComponent },
{path:'about', component: AboutComponent},
{path:'technology', component: TechnologyComponent},
{path:'products', component: ProductsComponent},
{path: 'services/home-visit', component: HomevisitComponent}, 
{path:  'services/mold-ear-plugs', component: MoldplugsComponent}, 
{path: 'services/hearing-aid-trail-fitting', component:  HearingaidComponent}, 
{path: 'services/free-counselling', component:  FreecounsilingComponent}, 
{path: 'services/sales-services', component: SalesComponent}, 
{path: 'services/speech-audiometric', component: SpeechComponent }, 
{path: 'services/hearing-evaluation', component: HearingevaluationComponent}, 
{path: 'services/accessories', component: AccessoriesComponent}, 
{path: 'products/:name', component: ProductDetailsComponent}, 

{path:'services', component: ServicesComponent,

children: [
 

    
    
    
   
  ]

},
{path:'contact', component: ContactComponent },

];
export const appRouting = RouterModule.forRoot(routes);
