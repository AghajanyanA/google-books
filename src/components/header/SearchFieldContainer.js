import { connect } from "react-redux";
import { changeInput } from "../../redux/SearchFieldReducer";
import SearchField from "./SearchField";


const mstp = state => {
    return {
        searchInput: state.searchField.searchInput
    }
}
const mdtp = dispatch => {
    return {
        onInputChange: text => {
            dispatch(changeInput(text))
        }
    }
}

export default connect(mstp, mdtp)(SearchField)