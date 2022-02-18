const change_search_input = 'change_search_input'
const change_sort_by = 'change_sort_by'
const change_category = 'change_category'

const init_state = {
    searchInput: '',
    sortBy: 'relevance',
    category: 'all'
}

const SearchFieldReducer = (state = init_state, action) => {
    switch (action.type) {
        case change_search_input:
            return {...state, searchInput: action.input};
        case change_sort_by:
            return {...state, sortBy: action.value};
        case change_category: 
            return {...state, category: action.value}
        default:
            return state;
    }
}

export const changeInput = input => {return {type: change_search_input, input}}
export const changeSortBy = value => {return {type: change_sort_by, value}}
export const changeCategory = value => {return {type: change_category, value}}

export default SearchFieldReducer