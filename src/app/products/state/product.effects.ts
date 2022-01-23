import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { ProductService } from "../product.service";


@Injectable()
export class ProductEffects {

    constructor(private action$: Actions ,
                    private productService : ProductService){

                    }

}