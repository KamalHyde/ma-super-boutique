import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsFromServices() {
    return this.http.get("http://localhost:3000/products");
  }

  deleteProductFromServices(id: any) {
    return this.http.delete("http://localhost:3000/products/" + id);
  }
  // La méthode post a besoin de 2 params le lien et l'argument
  addNewProductFromService(productForm: any) {
    return this.http.post("http://localhost:3000/products", productForm);
  }

  availabilityFromService(product: any) {
    let available = product.available;
    return this.http.patch("http://localhost:3000/products/" + product.id, {available: !available});
  }

  filterPriceFromService(priceForm: any) {
    let min = priceForm.value.pricemin;
    let max = priceForm.value.pricemax;
    return this.http.get("http://localhost:3000/products?price_gte=" + min + "&price_lte=" + max);
  }
}
