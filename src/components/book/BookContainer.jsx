import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBook } from "../../redux/actions/loadSearch";
import Book from "./Book";

const BookContainer = ({getBookData, book}) => {
    
    const location = useLocation()
    const currentBookId = location.pathname.substring(1)

    useEffect(() => {
        getBookData(currentBookId)
    }, [getBookData, currentBookId])

    return <Book book={book} />
}

const mstp = state => {
    return {
        book: state.book?.data?.volumeInfo
    }
}

const mdtp = dispatch => {
    return {
        getBookData: (loc) => {
            dispatch(getBook(loc))
        }
    }
}

export default connect(mstp, mdtp)(BookContainer)