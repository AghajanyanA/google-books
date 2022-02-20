import { getBookData, loadMore, searchQuery } from "../../DAL/APICalls"
import { addMoreData, disableLoadButton, errorText, setLoading, setSearchData, toggleSearch } from "../bodyReducer"
import { setBookData } from "../bookReducer"


export const loadSearch = (query, sort, category) => async dispatch => {
    dispatch(setLoading(true))
    const res = await searchQuery(query, sort, category)
    try {
        if (res.data.totalItems !== 0) {
            dispatch(setSearchData(res.data))
            dispatch(toggleSearch(true))
            dispatch(setLoading(false))
            dispatch(disableLoadButton(false))
        } else { //eslint-disable-next-line
            throw 'No results found!'
        }
    }
    catch (e) {
            dispatch(errorText(e))
            dispatch(toggleSearch(false))
            dispatch(setLoading(false))
    }
}

export const loadMoreData = (query, sort, category, currentLoad) => async dispatch => {
    dispatch(setLoading(true))
    const res = await loadMore(query, sort, category, currentLoad)
    try {
        dispatch(addMoreData(res.data))
        dispatch(setLoading(false))
    }
    catch (e) {
        dispatch(disableLoadButton(true))
        dispatch(setLoading(false))
    }
}

export const getBook = id => async dispatch => {
    
    const res = await getBookData(id)
    
    dispatch(setLoading(true))
    try {
        dispatch(setBookData(res.data))
        dispatch(setLoading(false))
    } catch (e) {
        dispatch(setLoading(false))
        throw Error(e)
    }
}