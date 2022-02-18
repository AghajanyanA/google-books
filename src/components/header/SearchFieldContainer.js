import { connect } from "react-redux";
import { loadSearch } from "../../redux/actions/loadSearch";
import { changeCategory, changeInput, changeSortBy } from "../../redux/SearchFieldReducer";
import SearchField from "./SearchField";


const mstp = state => {
    return {
        searchInput: state.searchField.searchInput,
        sort: state.searchField.sortBy,
        category: state.searchField.category,
        totalItems: state.body.data
    }
}
const mdtp = dispatch => {
    return {
        onInputChange: text => {
            dispatch(changeInput(text))
        },
        searchRequest: (query, sort, category) => {
            dispatch(loadSearch(query, sort, category))
        },
        setSort: value => {
            dispatch(changeSortBy(value))
        },
        setCategory: value => {
            dispatch(changeCategory(value))
        }
    }
}

export default connect(mstp, mdtp)(SearchField)