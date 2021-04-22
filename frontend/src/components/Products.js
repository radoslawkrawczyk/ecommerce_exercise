import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { useHistory } from "react-router-dom";

function Producs() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState("");


    const history = useHistory();

    useState(() => {
        axios.get('/products').then(r => {

            setLoading(false);
            setProducts(r.data);
        })
    }, []);

    const onChange = e => {
        setSearchData(e.target.value);
    }

    const formatCash = cents => {
        cents /= 100;
        return cents.toLocaleString("en-US");
    }

    const submitSearch = e => {
        e.preventDefault();
        setLoading(true);
        axios.post('/products/search', {search: searchData}).then(r => {
            setLoading(false);
            setProducts(r.data);
        })
    }

    const showDetails = (e, id) => {
        e.preventDefault();
        history.push("/products/"+id);

    }

    const body = (<div>
        <h1>List of products</h1>
        <form onSubmit={submitSearch}>
            <div className="form-row mt-4">
                <div className="col">
                    <input value={searchData} onChange={onChange} type="search" className="form-control" placeholder="Search for a product..." />
                </div>
                <input type="submit" className="btn btn-primary" value="Search" />
            </div>
        </form>
        <table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, key) => (
                    <tr key={key} onClick={e => {
                        showDetails(e, product.id);
                    }} style={{cursor: 'pointer'}}>
                        <th scope="row">{product.id}</th>
                        <td>{product.product_name}</td>
                        <td>{product.description}</td>
                        <td><img src={product.image} /></td>
                        <td>${formatCash(product.price)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);

    return loading ? <Loading /> : body;
}

export default Producs;