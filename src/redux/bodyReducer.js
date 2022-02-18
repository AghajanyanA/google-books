const toggle_searched_status = 'toggle_searched_status'
const setData = 'setData'
const addMore = 'addMore'

const init_state = {
    searchMade: false,
    data: {}
}

const bodyReducer = (state = init_state, action) => {
    switch (action.type) {
        case toggle_searched_status:
            return {
                ...state, searchMade: action.isSearched
            };
        case setData: 
            return {
                ...state, data: {...action.searchData}
            }
        case addMore:
            return {
                ...state.data, data: action.data
            }
        default:
            return state;
    }
}
export const toggleSearch = isSearched => ({type: toggle_searched_status, isSearched})
export const setSearchData = searchData => ({type: setData, searchData})
export const addMoreData = data => ({type: addMore, data})
export default bodyReducer