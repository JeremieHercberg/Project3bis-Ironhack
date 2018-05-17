import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ManifesteComponent } from "./manifeste/manifeste.component";
import { BoutiqueComponent } from "./boutique/boutique.component";
import { ActuComponent } from "./actu/actu.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProduitComponent } from "./produit/produit.component";
import { ListeProduitsService } from "./api/liste-produits.service";
import { UserService } from "./api/user.service";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ProductsFilterPipe } from "./pipes-folder/products-filter.pipe";
import { AdminComponent } from "./admin/admin.component";
import { UserCartComponent } from "./user-cart/user-cart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ManifesteComponent,
    BoutiqueComponent,
    ActuComponent,
    AboutComponent,
    NotFoundComponent,
    ProduitComponent,
    SignupComponent,
    LoginComponent,
    ProductsFilterPipe,
    AdminComponent,
    UserCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ListeProduitsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
