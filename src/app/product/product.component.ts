import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import{ProductsService} from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
company="MSJ PVT.LTD."
  @Input() productName:string;

  @Output() productClicked =new EventEmitter();

  constructor(private productsService:ProductsService) { }

  onClicked(){
// this.productClicked.emit();
  this.productsService.deletProduct(this.productName);
  }

  ngOnInit(): void {
  }

}
