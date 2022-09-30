import React, {createRef, useEffect, useState} from 'react';
import style from "./EditItem.module.css";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProduct, getProductById} from "../../redux/action-creators/Products";
import {useNavigate} from "react-router";


const EditItem = () => {


    const {id} = useParams();
    // console.log(id);

    const dispatch = useDispatch();
    const {product} = useSelector(({product: {product}}) => ({product}));

    console.log(product);


    useEffect(() => {
        dispatch(getProductById(id))
    }, []);

    const [name, setName] = useState(product.name);
    const nameRef = createRef();
    // console.log(name);

    const [imgUrl, setImgUrl] = useState(product.imageUrl);
    const imgRef = createRef();
    // console.log(imgUrl);

    const [count, setCount] = useState(product.count);
    const countRef = createRef();
    // console.log(count);

    const [width, setWidth] = useState(product.size?.width);
    const widthRef = createRef();
    // console.log(width);

    const [height, setHeight] = useState(product.size?.height);
    const heightRef = createRef();
    // console.log(height);

    const [weight, setWeight] = useState(product.weight);
    const weightRef = createRef();
    // console.log(weight);



    // const [item, setItem] = useState({
    //     // "id": product.id,
    //     // "imageUrl": `${product.imageUrl}`,
    //     // "name": `${product.name}`,
    //     // "count": product.count,
    //     // "size": {
    //     //     "width": product.width,
    //     //     "height": product.height
    //     // },
    //     // "weight": `${product.weight}`,
    // });

    const onChangeItem = () => {
        // setItem({
        //     "id": product.id,
        //     "imageUrl": `${imgUrl}` | `${product.imageUrl}`,
        //     "name": `${name}` | `${product.name}`,
        //     "count": count | product.count,
        //     "size": {
        //         "width": width | product.width,
        //         "height": height | product.height
        //     },
        //     "weight": weight | product.weight,
        //
        //     // id: product.id,
        //     // imageUrl: imgUrl | product.imageUrl,
        //     // name: name |  product.name,
        //     // count: count | product.count,
        //     // size: {
        //     //     width: width | product.width,
        //     //     height: height | product.height
        //     // },
        //     // weight: weight | product.weight
        // });
        // console.log('item', item);
        const item = {
            "id": product.id,
            "imageUrl": `${imgUrl}`,
            "name": `${name}`,
            "count": `${count}`,
            "size": {
                "width": `${width}`,
                "height": `${height}`
            },
            "weight": `${weight}`,
        }

        // dispatch(editProduct(item, id));
        dispatch(editProduct(item));
    }

    const navigate = useNavigate();


    return (
        <div>
            {
                product ? (
                    <div className={style.main}>
                        <div>Name:
                            <input
                                style={{marginLeft: 20}}
                                placeholder={product.name}
                                ref={nameRef}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div>Image:
                            <input
                                style={{marginLeft: 20}}
                                placeholder={product.imageUrl}
                                ref={imgRef}
                                onChange={(event) => setImgUrl(event.target.value)}
                            />
                        </div>
                        <div>Count:
                            <input
                                style={{marginLeft: 20}}
                                // type={'number'}
                                placeholder={product.count}
                                ref={countRef}
                                onChange={(event) => setCount(event.target.value)}
                            />
                        </div>
                        <div>Width:
                            <input
                                style={{marginLeft: 20}}
                                // type={'number'}
                                placeholder={product.size.width}
                                ref={widthRef}
                                onChange={(event) => setWidth(event.target.value)}
                            />
                        </div>
                        <div>Height:
                            <input
                                style={{marginLeft: 20}}
                                // type={'number'}
                                placeholder={product.size.height}
                                ref={heightRef}
                                onChange={(event) => setHeight(event.target.value)}
                            />
                        </div>
                        <div>Weight:
                            <input
                                style={{marginLeft: 20}}
                                placeholder={product.weight}
                                ref={weightRef}
                                onChange={(event) => setWeight(event.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                onClick={() => onChangeItem()}
                                // disabled={true}
                                style={{marginTop: 40, height: 30, width: 120, background: "lightblue"}}
                            >
                                Send
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                style={{marginLeft: 40, marginTop: 40, height: 30, width: 120, background: "lightblue"}}
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                ) : (
                    <div></div>
                )
            }

        </div>
    );
};

export default EditItem;