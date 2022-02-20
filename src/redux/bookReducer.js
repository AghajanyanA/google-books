const set_data = 'set_data'

const init_state = {
    data: [],
    isLoading: false
}

const bookReducer = (state = init_state, action) => {
    switch (action.type) {
        case set_data:
            return {
                ...state, data: action.data
            };
                
        default:
            return state;
    }
}

export const setBookData = data => ({type: set_data, data})
export default bookReducer