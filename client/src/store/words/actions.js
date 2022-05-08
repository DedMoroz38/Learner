export const ADD_WORDS = 'ADD_WORDS';

export const add_words = (words_list) => ({
    type: ADD_WORDS,
    payload: words_list
});