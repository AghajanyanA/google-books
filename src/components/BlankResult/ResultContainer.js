import { connect } from "react-redux";
import { loadMoreData } from "../../redux/actions/loadSearch";
import BlankResult from "./BlankResult";


const mstp = state => {
    return {
        searchInput: state.searchField.searchInput,
        sort: state.searchField.sortBy,
        category: state.searchField.category,
        isSearched: state.body.searchMade,
        totalItems: state.body.data.totalItems,
        results: state.body.data.items
    }
}

const mdtp = dispatch => {
    return {
        loadMoreButton: (query, sort, category) => {
            dispatch(loadMoreData(query, sort, category))
        }
    }
}

export default connect(mstp, mdtp)(BlankResult)