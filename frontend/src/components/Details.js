import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { useHistory } from "react-router-dom";

function Details(props) {

    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const path = window.location.pathname.split("/");
        setId(path[path.length - 1]);
    }, []);

    useEffect(() => {
        if (loading !== null) {
            axios.get('/product/' + id).then(r => {

                setData(r.data);
                setLoading(false);
            })
        }
    }, [id]);

    const formatCash = cents => {
        cents /= 100;
        return cents.toLocaleString("en-US");
    }
    const body = (<div>
        <a href="#" onClick={e => {
            e.preventDefault();
            history.goBack()
        }}>Go back</a>
        <hr />
        <p><img src={data?.image} /></p>

        <strong>Name</strong>
        <p>{data?.product_name}, <strong>id:</strong> {data?.id}</p>
        <strong>Description</strong>
        <p>{data?.description}</p>
        <strong>Price</strong>
        <p>${formatCash(data?.price)}</p>

    </div>);

    return loading ? <Loading /> : body;
}

export default Details;