import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  showProduct: boolean = false;
  modifiedProduct= {
    title: "",
    description: "",
    image: "",
    price: ""
  };

  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.getProductsFromProducts();
  }

  getProductsFromProducts() {
    this.productsServices.getProductsFromServices().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  deleteProductFromProducts(id: any) {
    this.productsServices.deleteProductFromServices(id).subscribe(data => {
      this.getProductsFromProducts();
      this.showProduct = true;
    });
  }

  availabilityFromProducts(product: any) {
    this.productsServices.availabilityFromService(product).subscribe(() => {
      this.getProductsFromProducts();
    }) 
  }

  filterPriceFromProducts(priceForm: any) {
    this.productsServices.filterPriceFromService(priceForm).subscribe(data => {
      this.products = data;
    })
  }

  filterMotsClesFromProducts(motsclesForm: any) {
    this.productsServices.filterMotsClesFromService(motsclesForm).subscribe(data => {
      this.products = data;
    })
  }

  editProduct(product: any) {
      this.modifiedProduct = product;
  }

  updateProductFromProduct() {
    this.productsServices.updateProductFromService(this.modifiedProduct).subscribe();
  }
}
