import React, {createRef, useEffect, useState} from 'react';
import style from "./EditItem.module.css";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProduct, getProductById} from "../../redux/action-creators/Products";
import {useNavigate} from "react-router";
// import {useNavigate} from "react-router";


const EditItem = () => {


    const {id} = useParams();
    // console.log(id);

    const dispatch = useDispatch();
    const {product, products} = useSelector(({product: {product}, products: {products}}) => ({product, products}));

    // console.log(product);


    useEffect(() => {
        dispatch(getProductById(id))
    }, []);

    const [name, setName] = useState("");
    // const nameRef = createRef();
    // console.log(name);

    const [imgUrl, setImgUrl] = useState("");
    // const imgRef = createRef();
    // console.log(imgUrl);

    const [count, setCount] = useState("");
    // const countRef = createRef();
    // console.log(count);

    const [width, setWidth] = useState("");
    // const widthRef = createRef();
    // console.log(width);

    const [height, setHeight] = useState("");
    // const heightRef = createRef();
    // console.log(height);

    const [weight, setWeight] = useState("");

    // const params = useParams();
    // console.log(params);


    const onChangeItem = () => {

        const item = {
            id: parseInt(id),
            imageUrl: `${imgUrl}`,
            name: `${name}`,
            count: `${count}`,
            size: {
                width: `${width}`,
                height: `${height}`
            },
            weight: `${weight}`,
        }

        // dispatch(editProduct(item, id));
        dispatch(editProduct(item));
        console.log("products2", products);
    }

    // const navigate = useNavigate();


    return (
        <div>
            {
                product ? (
                    <div className={style.main}>
                        <div>Name:
                            <input
                                style={{marginLeft: 20}}
                                placeholder={product.name}
                                // ref={nameRef}
                                value = {name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div>Image:
                            <input
                                style={{marginLeft: 20}}
                                placeholder={product.imageUrl}
                                // ref={imgRef}
                                onChange={(event) => setImgUrl(event.target.value)}
                                value={imgUrl}
                            />
                        </div>
                        <div>Count:
                            <input
                                style={{marginLeft: 20}}
                                // type={'number'}
                                placeholder={product.count}
                                // ref={countRef}
                                onChange={(event) => setCount(event.target.value)}
                                value={count}
                            />
                        </div>
                        <div>Width:
                            <input
                                style={{marginLeft: 20}}
                                // type={'number'}
                                placeholder={product.size.width}
                                // ref={widthRef}
                                onChange={(event) => setWidth(event.target.value)}
                                value={width}
                            />
                        </div>
                        <div>Height:
                            <input
                                style={{marginLeft: 20}}
                                // type={'number'}
                                placeholder={product.size.height}
                                // ref={heightRef}
                                onChange={(event) => setHeight(event.target.value)}
                                value={height}
                            />
                        </div>
                        <div>Weight:
                            <input
                                style={{marginLeft: 20}}
                                placeholder={product.weight}
                                // ref={weightRef}
                                onChange={(event) => setWeight(event.target.value)}
                                value={weight}
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
                            <Link to={`/${id}`}>
                            <button
                                // onClick={() => navigate(-1)}

                                style={{marginLeft: 40, marginTop: 40, height: 30, width: 120, background: "lightblue"}}
                            >
                                Cancel
                            </button>
                            </Link>
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