import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'app/model/product';
import { CategoryService } from 'app/services/cartegory/category.service';
import { ProductService } from 'app/services/product/product.service';
import { stringify } from '@angular/compiler/src/util';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-addeditproduct',
  templateUrl: './addeditproduct.component.html',
  styleUrls: ['./addeditproduct.component.scss']
})
export class AddeditproductComponent implements OnInit {
  @Input() id: any;
  @Input() parent: any
  name: string = "Add";

  product: Product;
  CategoryList: any;
  btnText: string = "save";
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public categoryService: CategoryService,
    public productService: ProductService
  ) {
    this.product = new Product();
    categoryService.GetAllCategory().subscribe(data => {
      this.CategoryList = data;
    }, error => {

      console.log(error);
    })

  }

  ngOnInit() {
    if (this.id != 0) {
      this.btnText = "Update";
      this.productService.GetProductById(this.id).subscribe(data => {
        this.product = data[0];
        this.id = data[0]._id;
        console.log(this.product);
      },
        error => {
          console.log(error);
        });
    }
  }

  save() {
    if (this.btnText == "save" && this.id == 0) {
      console.log('save');
      this.productService.CreateProduct(this.product).subscribe(data => {
        alert("saved");
        this.parent.getProductList();
        this.activeModal.close();
      },
        error => {
          alert('error');
        });
    }
    else {

      this.productService.UpdateProduct(this.product, this.id).subscribe(data => {
        alert('update');
        this.parent.getProductList();
        this.activeModal.close();
      },
        error => {
          alert('error');
          console.log(error);
        });
    }
  }
  categoryChanged($event) {
    debugger;
    // this.product.category = event.target.value;

  }

}
