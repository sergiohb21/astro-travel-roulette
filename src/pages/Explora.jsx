import React, { useState, useEffect } from 'react';
import CardForm from '../components/CardForm';

export default function Explora1 () {
    const [step, setStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setStep( step + 1)
    },[]);

    const steps = [
        {
            question: "¿Como vas a viajar?",
            options: [
                { label: "Solo", backgroundImage: "../assets/img/card/solo-bg.jpg" },
                { label: "Con amigos", backgroundImage: "../assets/img/card/amigos-bg.jpg" },
                { label: "En pareja", backgroundImage: "../assets/img/card/pareja-bg.jpg" },
                { label: "En familia", backgroundImage: "../assets/img/card/familia-bg.jpg" }
            ]
        },
        {
            question: "¿Que te gusta más?",
            options: [
                { label: "Mar", backgroundImage: "../assets/img/card/mar-bg.jpg" },
                { label: "Montaña", backgroundImage: "../assets/img/card/montaña-bg.jpg" },
                { label: "Ciudad", backgroundImage: "../assets/img/card/ciudad-bg.jpg" },
                { label: "Rural", backgroundImage: "../assets/img/card/rural-bg.jpg" }
            ]
        },
        {
            question: "¿Cuánto tiempo planeas viajar?",
            options: [
                { label: "Fin de semana", backgroundImage: "../assets/img/card/time-bg.jpg" },
                { label: "1 semana", backgroundImage: "../assets/img/card/time-bg.jpg" },
                { label: "2 semanas o más", backgroundImage: "../assets/img/card/time-bg.jpg" },
                { label: "1 mes o más", backgroundImage: "../assets/img/card/time-bg.jpg" }
            ]
        },
        {
            question: "¿Qué tipo de alojamiento prefieres?",
            options: [
                { label: "Hotel", backgroundImage: "../assets/img/card/hotel-bg.jpg" },
                { label: "Cabaña", backgroundImage: "../assets/img/card/cabaña-bg.jpg" },
                { label: "Apartamento", backgroundImage: "../assets/img/card/apartment-bg.jpg" },
                { label: "Camping", backgroundImage: "../assets/img/card/camping-bg.jpg" }
            ]
        },
        {
            question: "¿Qué presupuesto tienes?",
            options: [
                { label: "Menos de 50€ por noche", backgroundImage: "../assets/img/card/money-bg.jpg" },
                { label: "50€ - 100€ por noche", backgroundImage: "../assets/img/card/money-bg.jpg" },
                { label: "100€ - 200€ por noche", backgroundImage: "../assets/img/card/money-bg.jpg" },
                { label: "Más de 200€ por noche", backgroundImage: "../assets/img/card/money-bg.jpg" }
            ]
        }        
    ];

    const handleSelectOption = (option) => {
        setSelectedOptions([...selectedOptions, option]);
    }

    const handleNextStep = () => {
        if (step + 1 < steps.length) {
            setStep(step + 1);
        }
    }

    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h1 className="pb-2">Buscamos un viaje hecho a tu medida {step}</h1>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div>
                    <h2 className="pb-2">{steps[step].question}</h2>
                    <div className="row align-items-stretch g-4 py-5">
                        {steps[step].options.map((option, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-6">
                                <CardForm
                                    option={option.label}
                                    backgroundImage={option.backgroundImage}
                                    onSelectOption={handleSelectOption}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex gap-2 justify-content-center py-5">
                {step < steps.length - 1 && (
                    <button
                        className="btn btn-primary d-inline-flex align-items-center"
                        type="button"
                        onClick={() => handleNextStep}
                    >
                        Siguiente
                        <svg className="bi ms-1" width="20" height="20">
                            <use xlinkHref="#arrow-right-short" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}




<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    <symbol id="arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
    </symbol>
    <symbol id="x-lg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
      <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </symbol>
  </svg>