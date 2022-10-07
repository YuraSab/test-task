import React, {useState} from 'react';
import ItemsList from "../../components/ItemsList/ItemsList";
import SortItems from "../../components/SortItems/SortItems";
import AddProduct from "../../components/AddProduct/AddProduct";


const ProductList = () => {


    const [onAdd, setOnAdd] = useState(false);

    return (
        <div>
            <SortItems/>
            <ItemsList/>
            <div>
                <button onClick={() => setOnAdd(prevState => prevState = !prevState)}>Add product</button>
                {
                    onAdd === true ? <AddProduct onAdd={onAdd} setOnAdd={setOnAdd}/>
                        : <div></div>

                }
            </div>
        </div>
    );
};

export default ProductList;