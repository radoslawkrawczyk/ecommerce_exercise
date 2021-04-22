import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './Loading';

function Producs() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState("");

    useState(() => {
        axios.get('/products').then(r => {
            console.log(r.data);
            setLoading(false);
            setProducts(r.data);
        })
    }, []);

    const onChange = e => {
        setSearchData(e.target.value);
    }

    const body = (<div>
        <h1>List of products</h1>
        <form>
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </div>);

    return loading ? <Loading /> : body;
}

export default Producs;