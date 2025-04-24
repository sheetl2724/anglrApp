import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, PopularProducts } from '../../model/interface/popularProductsI';
import { ProductService } from '../../services/product.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-footer',
  imports: [GalleriaModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  
  popularProdList:Observable<PopularProducts>
  imgList:Datum[]=[];
  displayCustom: boolean | undefined;

  activeIndex: number = 0;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 4
      },
      {
          breakpoint: '768px',
          numVisible: 4
      },
      {
          breakpoint: '560px',
          numVisible: 4
      }
  ];
  constructor(private productService:ProductService){
    this.popularProdList=productService.getPopularProd();
  }
  
  ngOnInit(): void {
    this.popularProdList.subscribe((res)=>{
      this.imgList=res.data;
      console.log(this.imgList)
    })
    
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}
}
