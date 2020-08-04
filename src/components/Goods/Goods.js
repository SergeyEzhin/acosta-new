import React from 'react';
import {Loader} from '../../ui/Loader/Loader';
import Product from '../Product/Product';

export const Goods = (props) => 
{
    let state = props.location.state;
    let products = state.products;

    console.log(props);
    console.log(products);
    
    if(products)
    {
        return (
            <div className="container pt-4 pb-4">
                <h1 className="text-center">Goods</h1>
                <ul className="list-group pt-3">
                    {
                        products.map((elem, index) => 
                        {
                            let planFace = elem.plan_face;
                            let planShelfNumber = elem.plan_shelf_number;
                            return (
                                <Product 
                                    elem={elem} 
                                    key={index} 
                                    id={elem.id} 
                                    planFace={planFace} 
                                    planShelfNumber={planShelfNumber} 
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    else 
    {
        return <Loader />
    }
}