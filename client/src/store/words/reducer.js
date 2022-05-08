import { ADD_WORDS } from "./actions";

const initial_state = {
    words: [
        {
            word: 'hello',
            translation: 'привет'
        }
    ]
}


const wordsReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_WORDS: {
            return {
                ...state,
                words: [...state.words, action.payload]
            }
        }
        default: {
            return state
        }
    }
}
export default wordsReducer;