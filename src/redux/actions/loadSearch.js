import { loadMore, searchQuery } from "../../DAL/APICalls"
import { addMoreData, setSearchData, toggleSearch } from "../bodyReducer"


export const loadSearch = (query, sort, category) => async dispatch => {
     const res = await searchQuery(query, sort, category)
        try {
            dispatch(setSearchData(res.data))
            dispatch(toggleSearch(true))
        }
        catch (e) {
            console.log(e)
        }
}

export const loadMoreData = (query, sort, category) => async dispatch => {
    const res = await loadMore(query, sort, category)
       try {
            dispatch(addMoreData(res.data))
       }
       catch (e) {
           console.log(e)
       }
}