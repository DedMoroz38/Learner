import { connect } from "react-redux";
import { add_words } from "../store/words";



const mapStateToProps = (state) => ({
    words: state.words.words,
})

const mapDispatchToProps = (dispatch) => ({
    add_words(words) {
        return dispatch(add_words(words));
    },
})


export const Connect = connect(mapStateToProps, mapDispatchToProps);