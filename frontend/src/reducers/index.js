const SET_CSV = 'SET_CSV';

const initialState = {
    isCsvUploaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CSV:
            return {
                ...state,
                isCsvUploaded: true
            };


        default:
            return state;

    }
}