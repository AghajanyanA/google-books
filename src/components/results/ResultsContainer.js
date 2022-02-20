import { connect } from "react-redux";
import { loadMoreData } from "../../redux/actions/loadSearch";
import Results from "./Results";

const ResultsContainer = props => {


    return (
        <Results {...props} />
    )
}
const mstp = state => {
    return {
        text: state.body.searchText,
        searchInput: state.searchField.searchInput,
        sort: state.searchField.sortBy,
        category: state.searchField.category,
        isSearched: state.body.searchMade,
        totalItems: state.body.data?.totalItems,
        results: state.body.data?.items,
        noMoreResults: state.body.noMoreResults,
        isLoading: state.body.isLoading
    }
}

const mdtp = dispatch => {
    return {
        loadMoreButton: (query, sort, category, currentLoad) => {
            dispatch(loadMoreData(query, sort, category, currentLoad))
        }
    }
}

export default connect(mstp, mdtp)(ResultsContainer)