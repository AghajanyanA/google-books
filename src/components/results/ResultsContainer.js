import { connect } from "react-redux";
import Results from "./Results";
 // UNACTUAL YET
const mstp = state => {
    return {
        searchMade: state.body.searchMade
    }
}
const mdtp = dispatch => {
    return {
        
    }
}

export default connect(mstp, mdtp)(Results)