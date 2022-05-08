import * as React from 'react';
import { useState } from 'react';
import { Connect } from '../connect/index';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useRef } from 'react';


let asking_word_list = [];
const Test = ({ words }) => {
    const [componentToggle, setComponentToggle] = useState(1);
    const [level, setLevel] = useState(1);
    const [toggle, setToggle] = useState(false);
    const [visabilityToggle, setVisabilityToggle] = useState(false);
    const [word, setWord] = useState({});
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setLevel(e.target.value);
    }
    console.log(words);

    const StartTest = () => {
        setComponentToggle(2)
        let words_list = [...words];
        console.log(words_list);
        if (words_list.length > 0) {
            while (words_list.length > 0) {
                const max = words.length;
                const rand = Math.round(1 - 0.5 + Math.random() * (max - 1 + 1));
                asking_word_list.push(words_list.pop(rand));
            }
            test();
        }

    }
    const test = () => {
        setWord(asking_word_list[0]);
    }
    const check = () => {
        if (asking_word_list[0].word === inputRef.current.value) {
            inputRef.current.value = '';
            setToggle(true);
            setVisabilityToggle(true);
            asking_word_list.shift();
            setTimeout(() => {
                setVisabilityToggle(false);
                if (asking_word_list.length > 0) {
                    test();
                } else {
                    setComponentToggle(3);
                    setTimeout(() => {
                        setComponentToggle(1);
                    }, 1000);
                    // alert('Test has finished.')
                }
            }, 500);
        } else {
            setToggle(false);
            setVisabilityToggle(true);
            setTimeout(() => {
                setVisabilityToggle(false);
                test();
            }, 500);
        }
    }


    return (
        <div className="container">
            <div className='test-top'>
                <div className='level-selector-box'>
                    <h2 className='level-selector-heading'>Choose level</h2>
                    <select
                        className='level-selector'
                        onChange={handleChange}
                    >
                        <option className='level-options' value={1}>Easy</option>
                        <option className='level-options' value={2}>Hard</option>
                    </select>
                </div>
                <div className='buttons-box'>
                    <Link to='/add_words' className="add-words-box test-buttons-box">
                        <p className="">Add new words</p>
                        <AddIcon />
                    </Link>

                    <button onClick={() => StartTest()} className="add-words-box test-buttons-box">
                        Start
                    </button>
                </div>
            </div>
            <div className='test-area-box'>
                <div className={`${componentToggle === 3 ? 'pop-up-message-box' : 'none'}`}>
                    <p className='pop-up-message'>Test has Finished!</p>
                </div>
                <div className={`words-list-box ${componentToggle === 1 ? '' : 'none'}`}>
                    <h1 className="words-list-heading">Words List</h1>
                    <ul className="words-list-list">
                        {words.map((item, index) => (
                            <li key={index} className="words-list-items">{`${item.word}-${item.translation}`}</li>
                        ))}
                    </ul>
                </div>
                <div className={`start-test-area-box ${componentToggle === 2 ? '' : 'none'}`}>
                    <div className='start-test-area-question-box'>
                        <p className='test-translation-question'>Translation of the word <span className='test-translation-word'>{word.translation}</span>?</p>
                        <input ref={inputRef} placeholder='translation...' type='text' />
                        <p style={{ display: `${visabilityToggle ? 'block' : 'none'}` }} className={`test-answer-result ${toggle ? 'test-answer-result-right' : 'test-answer-result-wrong'}`}>{toggle ? 'Right' : 'Wrong'}!</p>
                    </div>
                    <button onClick={() => check()} className='test-check-button'>Check</button>
                </div>
            </div>
        </div>
    )
}
const TestPage = Connect(Test);
export default TestPage;