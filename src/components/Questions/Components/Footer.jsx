import React from 'react'
import flecheDroite from '../Assets/arrowRight.svg'

export const Footer = ({ data, numberOfQuestions, error, setError, activeQuestion, onSetActiveQuestion, selected, setSelected, setAnswer }) => {

    // const prevClickButton = useRef();

    // useEffect(() => {
    //     activeQuestion === 0 ? (prevClickButton.current.style.visibility = 'hidden') : (prevClickButton.current.style.visibility = 'initial')
    //   }, [activeQuestion])

    // const prevClickHandler = (e) => {
    //     e.preventDefault()
    //     if(activeQuestion > 0) {
    //         onSetActiveQuestion(activeQuestion - 1);
    //     }
    //     return setError('');
    // }

    const nextClickHandler = (e) => {
        e.preventDefault()
        setSelected('');
        if(selected === '') {
            return setError('Ce champ est obligatoire !');
        }
        setAnswer(prevState => [...prevState, { Q: data.titre, R: selected}]);
        setError('')
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        }
    }

    return (

        <div className='question-footer'>
            {/* <button ref={prevClickButton} className="prev" onClick={prevClickHandler}>
                <img className='arrow arrow-left' src={flecheGauche} alt='fleche vers la gauche'/>
                <p>Précédent</p>
            </button> */}

            {error && <div className="error">{error}</div>}

            {
                activeQuestion === numberOfQuestions - 1 ? (
                    <button type='submit' className="submit">
                            <p>Envoyer le formulaire</p>
                    </button>

                ) : (
                    <button className="next" onClick={nextClickHandler}>
                        <p>Suivant</p>
                        <img className='arrow arrow-right' src={flecheDroite} alt='fleche vers la Droite'/>
                    </button>
                )
            }
        </div>
  )
}