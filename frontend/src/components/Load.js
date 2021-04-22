import axios from 'axios';
import { useState } from 'react';
import Loading from './Loading';

export default function Load() {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [succcess, setSuccess] = useState(false);

    const uploadCsv = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('csv', file);
        setLoading(true);
        axios.post('/products/add', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(r => {
            setLoading(false); 
            setSuccess(true);

        }).catch(err => {
            console.log(err.response.data);
        });
    }

    return (<form onSubmit={uploadCsv}>
        <h1>Upload a CSV file</h1>
        <div className="custom-file mt-4">
            <input type="file"onChange={e => {
                    setFile(e.target.files[0]);
                }} id="validatedInputGroupCustomFile" required />
            <label className="custom-file-label" htmlFor="validatedInputGroupCustomFile">Choose file...</label>
        </div>
        <input type="submit" className="btn btn-primary mt-3" value="Submit" />
        <div className='mt-3'>
            {loading ? <Loading /> : null}
            {succcess ? (<div className="alert alert-success">File uploaded and added to the database</div>) : null}
        </div>
    </form>);
}