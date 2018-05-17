import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ManifesteComponent } from "./manifeste/manifeste.component";
import { BoutiqueComponent } from "./boutique/boutique.component";
import { ActuComponent } from "./actu/actu.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProduitComponent } from "./produit/produit.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { UserCartComponent } from "./user-cart/user-cart.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "manifeste", component: ManifesteComponent },
  { path: "boutique", component: BoutiqueComponent },
  { path: "produit/:produitId", component: ProduitComponent },
  { path: "actu", component: ActuComponent },
  { path: "about", component: AboutComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: UserCartComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
