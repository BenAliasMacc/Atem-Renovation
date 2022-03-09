import React, { useRef, useState, useEffect } from 'react'
import './Questions.css'
import './QuestionsResponsives.css'
import questionsData from '../Data/data.json'
import { Footer } from './Footer'
import Compteur from './Compteur'
import closeButton from '../Assets/closeButton.svg'

const Questions = ({setOpenModalForm, setOpenModalValidation, hideModal, setHideModal }) => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const data = questionsData.data[activeQuestion]
    const length = data.choices.length
    const numberOfQuestions = questionsData.data.length

    const [selected, setSelected] = useState('');
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('');
    
    const radiosWrapper = useRef();

    console.log(answer);

    useEffect(() => {
      const findCheckedInput = data.inputType === "radio" && radiosWrapper.current.querySelector('input:checked');
      if(findCheckedInput) {
        findCheckedInput.checked = false;
      }
    }, [data]);
    
    const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error) {
            setError('');
        }
    };

    const closeModal = () => {
        setOpenModalForm(false)
    };

    const handleHideModal = () => {
        setHideModal("hide")
    };

    const test = e => {
        e.stopPropagation()
    };

    const handleSubmit = e => {
        e.preventDefault();
        setOpenModalForm(false)
        setOpenModalValidation(true)
    }

    return (
        <div className={`formulaire-wrapper ${hideModal}`} onClick={handleHideModal}>
            <form className='formulaire' onSubmit={e => handleSubmit(e)} onClick={test}> 
                
                <div className='question__title'>
                    <h2>{data.titre}</h2>
                    {data.description && <p>{data.description}</p>}
                </div>

                {/* input radio */}
                {data.inputType === "radio" && <div className={`${length === 2 ? 'question__choices' : 'question__choices--small-card'} control`} ref={radiosWrapper}>
                    {data.choices.map((choice, index) => (
                        <div className={`${length === 2 ? 'question__choices__choice' : 'question__choices__choice--small-card'}`} key={index}>
                            <label htmlFor={choice.name}>
                                {choice.image && <img className='radio-image' src={choice.image} alt={choice.name}/>}
                                <p>{choice.name}</p>
                            </label>
                            <input className='radio' type="radio" name="answer" id={choice.name} value={choice.name} onChange={changeHandler}/>
                        </div>
                    ))}
                </div>}

                {data.inputType !== "radio" && (
                    <>
                        <input type={data.inputs[0].inputType} placeholder={data.inputs[0].placeholder} onChange={changeHandler} value={selected}/>
                    </>
                )}
                
                <Footer data={data} numberOfQuestions={numberOfQuestions} error={error} setError={setError} activeQuestion={activeQuestion} onSetActiveQuestion={setActiveQuestion} selected={selected} setSelected={setSelected} setAnswer={setAnswer}/>

                <Compteur activeQuestion={activeQuestion} numberOfQuestions={numberOfQuestions}/>

                <div className='closeButton' onClick={closeModal}><img className='test' src={closeButton} alt='fermeture modale'/></div>
            </form>
        </div>
    )
}

export default Questions