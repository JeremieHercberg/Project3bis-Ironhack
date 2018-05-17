import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/operator/toPromise";

import { environment } from "../../environments/environment";
import { toPromise } from "rxjs/operator/toPromise";

@Injectable()
export class ListeProduitsService {
  constructor(private ajaxTruc: HttpClient) {}
  getList() {
    return this.ajaxTruc.get(`${environment.backUrl}/api/products`).toPromise();
  }
  getDetails(productId) {
    console.log(productId);
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/products/${productId}`)
      .toPromise();
  }

  add(productForm) {
    // name, image, description, sellingPrice, itemStock
    console.log(productForm);
    return this.ajaxTruc
      .post(`${environment.backUrl}/api/products`, productForm)
      .toPromise();
  }

  delete(productId) {
    return this.ajaxTruc
      .delete(`${environment.backUrl}/api/products/${productId}`)
      .toPromise();
  }
}

export class Produit {
  //_id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  sellingPrice: number;
  itemStock: number;
  // review: string[];
  details: string;
  // createdAt?: Date;
  // updatedAt?: Date;
}
