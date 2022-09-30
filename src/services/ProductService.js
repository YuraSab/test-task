import {database} from "../dataBase/DB";


class ProductService {
    db = database;

    // If I had backend part
    // async getProductsServer(){
    //     return await fetch(`url`)
    //         .then(value => value.json)
    // }
    // async getProductByIdServer(id){
    //     return await fetch(`${'url'}/${id}`)
    // }


    getProducts(){
        return this.db
    }

    getProductById(id){
        console.log(id);
        return this.db[id-1]
    }
}


export const productService = new ProductService();