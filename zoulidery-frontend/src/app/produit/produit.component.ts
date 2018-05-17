import { Component, OnInit } from "@angular/core";
import { ListeProduitsService, Produit } from "../api/liste-produits.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../api/user.service";

@Component({
  selector: "app-produit",
  templateUrl: "./produit.component.html",
  styleUrls: ["./produit.component.css"]
})
export class ProduitComponent implements OnInit {
  produitId: string;
  produits: Produit;

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: ListeProduitsService,
    public resTruc: Router,
    public userTruc: UserService
  ) {}

  ngOnInit() {
    this.reqTruc.paramMap.subscribe(myParams => {
      this.produitId = myParams.get("produitId");
      this.fetchProduitData();
    });
  }

  fetchProduitData() {
    this.apiTruc
      .getDetails(this.produitId)
      .then((result: Produit) => {
        console.log("je suis ici" + this.produitId);
        this.produits = result;
      })
      .catch(err => {
        console.log("Phone details Error");
        console.log(err);
      });
  }

  deleteClick() {
    const { name } = this.produits;

    const isOkay = confirm(`Es-tu sûre de vouloir retirer ${name}?`);

    if (!isOkay) {
      return;
    }

    this.apiTruc
      .delete(this.produitId)
      .then(() => {
        this.resTruc.navigateByUrl("/boutique");
      })
      .catch(err => {
        console.log("Product delete Error");
        console.log(err);
      });
  }
}
