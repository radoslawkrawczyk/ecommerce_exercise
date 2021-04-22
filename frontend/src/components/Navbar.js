import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkIfUploaded } from '../actions';

function Navbar(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkIfUploaded());
    })
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">eCommerce Exercise</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Products</Link>
                    <Link className="nav-link" to="/load">Load CSV</Link>
                </div>
                <form className="form-inline">
                    {props.isCsvUploaded ? (<button className="btn btn-outline-success" type="button">CSV Uploaded</button>) : ((<button className="btn btn-outline-warning" type="button">CSV not uploaded</button>))}
                </form>
            </div>


        </nav>
    )
}

const mapStateToProps = state => ({
    isCsvUploaded: state.isCsvUploaded
});

export default connect(mapStateToProps, { checkIfUploaded })(Navbar);