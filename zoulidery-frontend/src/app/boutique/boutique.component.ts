import { Component, OnInit } from "@angular/core";
import { ListeProduitsService, Produit } from "../api/liste-produits.service";

import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../api/user.service";

@Component({
  selector: "app-boutique",
  templateUrl: "./boutique.component.html",
  styleUrls: ["./boutique.component.css"]
})
export class BoutiqueComponent implements OnInit {
  produits: Produit[] = [];
  newProduit: Produit = new Produit();

  userInput: string;

  constructor(
    public apiTruc: ListeProduitsService,
    public userTruc: UserService,
    private reqTruc: ActivatedRoute,
    public restruc: Router
  ) {}

  ngOnInit() {
    this.apiTruc
      .getList()
      .then((result: Produit[]) => {
        console.log(result);
        this.produits = result;
      })
      .catch(err => {
        console.log("Products list Error");
        console.log(err);
      });
  }

  addToCart() {}

  addProduct() {
    console.log("baoif");
    console.log(this.newProduit);
    // name, image, description, sellingPrice, itemStock
    this.apiTruc
      .add(this.newProduit)
      .then((result: Produit) => {
        console.log(result);
        this.produits.push(result);
        this.newProduit;
      })
      .catch(err => {
        console.log("Products add Error");
        console.log(err);
      });
  }
}
