const SET_CSV = 'SET_CSV';

export const checkIfUploaded = () => dispatch => {
    const checkCsv = localStorage.getItem("uploadedCsv");
    if (checkCsv) {
        dispatch({
            type: SET_CSV
        })
    }
};