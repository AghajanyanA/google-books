const change_search_input = 'change_search_input'

const init_state = {
    searchInput: ''
}

const SearchFieldReducer = (state = init_state, action) => {
    switch (action.type) {
        case change_search_input:
            return {...state, searchInput: action.input};
    
        default:
            return state;
    }
}

export const changeInput = input => {return{type: change_search_input, input}}

export default SearchFieldReducer