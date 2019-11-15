import { Component, OnInit } from '@angular/core';
import { AddeditproductComponent } from '../modal/addeditproduct/addeditproduct.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'app/model/product';
import { ProductService } from 'app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ProductList: any = [];
  constructor(
    private modalService: NgbModal,
    private productService: ProductService) {
    this.getProductList();

  }

  ngOnInit() {
  }


  addEdit(id: number) {
    const modelref = this.modalService.open(AddeditproductComponent, { backdrop: "static" });
    modelref.componentInstance.id = id;
    modelref.componentInstance.parent = this;
    console.log(id);

  }

  getProductList() {
    this.productService.GetAllProduct().subscribe(data => {
      this.ProductList = data;
      console.log(this.ProductList);
    }, error => {
      console.log(error);
    });

  }

  deleteProduct(id: number) {
    if (confirm('are you sure want to delete product?')) {
      this.productService.DeleteProduct(id).subscribe(data => {
        alert('sucessfully deleted');
        this.getProductList();
      },
        error => {
          console.log(error);
        })

    }

  }

}
