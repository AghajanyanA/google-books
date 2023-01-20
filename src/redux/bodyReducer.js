const toggle_searched_status = 'toggle_searched_status'
const set_data = 'set_data'
const add_more = 'add_more'
const error_text = 'error_text'
const is_loading = 'is_loading'
const toggle_loadmore_button = 'toggle_loadmore_button'

const init_state = {
    searchText: 'Make A Search!',
    searchMade: false,
    isLoading: false,
    noMoreResults: false,
    data: []
}

const bodyReducer = (state = init_state, action) => {
    switch (action.type) {
        case toggle_searched_status:
            return {
                ...state, searchMade: action.isSearched
            };
        case set_data: 
            return {
                ...state, data: action.searchData
            }
        case add_more:
            return {
                ...state, data: {...state.data, items: [...state.data.items, ...action.data.items]}
            }
        case error_text: {
            return {
                ...state, searchText: action.text
            }
        }
        case is_loading: {
            return {
                ...state, isLoading: action.blean
            }
        }
        case toggle_loadmore_button: {
            return {
                ...state, noMoreResults: action.val
            }
        }
                
        default:
            return state;
    }
}
export const toggleSearch = isSearched => ({type: toggle_searched_status, isSearched})
export const setSearchData = searchData => ({type: set_data, searchData})
export const addMoreData = data => ({type: add_more, data})
export const errorText = text => {return {type: error_text, text}}
export const setLoading = blean => ({type: is_loading, blean})
export const disableLoadButton = val => ({type: toggle_loadmore_button, val})
export default bodyReducer