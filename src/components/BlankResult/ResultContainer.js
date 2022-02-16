import { connect } from "react-redux";
import { setSearchData } from "../../redux/bodyReducer";
import BlankResult from "./BlankResult";


const mstp = state => {
    return {
        isSearched: state.body.searchMade
    }
}

const mdtp = dispatch => {
    return {
        loadData: data => {
            dispatch(setSearchData(data))
        }
    }
}

export default connect(mstp, mdtp)(BlankResult)