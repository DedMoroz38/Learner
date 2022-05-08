import { useState } from "react";
import { Link } from "react-router-dom";
import { Connect } from '../connect/index';


const Words = ({ add_words, words }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const addWord = () => {
        if (word.length > 0 && translation.length > 0) {
            add_words({ word: word, translation: translation });
        } else {
            if (word.length === 0) {
                console.log(1);
            }
            if (translation.length === 0) {
                console.log(2);
            }
        }
    }
    console.log(words);

    return (
        <div className='container'>
            <div className='add-words-top'>
                <Link to='/test' className="add-words-box">
                    <p className="">Start test</p>
                </Link>
            </div>
            <div className="addWordsBox">
                <div className="addWordsBoxInputs">
                    <div className="words-input-box">
                        <h2 className="input-heading">Word</h2>
                        <input onChange={(e) => {
                            setWord(e.target.value);
                        }} placeholder="Input word..." type='text' />
                    </div>
                    <div className="words-input-box">
                        <h2 className="input-heading">Translation</h2>
                        <input onChange={(e) => {
                            setTranslation(e.target.value);
                        }} placeholder="Input translation..." type='text' />
                    </div>
                </div>
                <button className="addWordsButton" onClick={() => addWord()}>Add Word</button>
            </div>
            <div className="words-list-box">
                <h1 className="words-list-heading">Words List</h1>
                <ul className="words-list-list">
                    {words.map((item, index) => (
                        <li key={index} className="words-list-items">{`${item.word}-${item.translation}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
const AddWords = Connect(Words);
export default AddWords;