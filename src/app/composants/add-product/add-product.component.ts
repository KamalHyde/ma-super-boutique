import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // ajout de productsServices: ProductsService dans le constructor pour lier les fonctions par la suite
  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {
  }

  // Méthode d'enregistrement des produits

  addNewProductFromAddProduct(productForm: any) {
    // let data = productForm.value;
    this.productsServices.addNewProductFromService(productForm).subscribe(() => {
      console.log("Success!!!");
    })
  }

}
