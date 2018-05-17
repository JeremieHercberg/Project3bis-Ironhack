import { Pipe, PipeTransform } from "@angular/core";
import { Produit } from "../api/liste-produits.service";

@Pipe({
  name: "productsFilter"
})
export class ProductsFilterPipe implements PipeTransform {
  transform(value: Produit[], searchTerm: string): Produit[] {
    if (!value) {
      return [];
    }
    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredProduits: Produit[] = [];

    value.forEach(oneProduit => {
      const lowerProduitName = oneProduit.name.toLowerCase();
      if (lowerProduitName.includes(searchTerm)) {
        filteredProduits.push(oneProduit);
      }
    });
    return filteredProduits;
  }
}
