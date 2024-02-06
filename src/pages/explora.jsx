import React, { useState } from 'react';
import Layout from "../layouts/Layout"
import CardForm from "../components/CardForm"

const Explora = () => {
    const [step, setStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const steps = [
        {
            question: "¿Como vas a viajar?",
            options: [
                { label: "Solo", backgroundImage: "solo-bg.jpg" },
                { label: "Con amigos", backgroundImage: "amigos-bg.jpg" },
                { label: "En pareja", backgroundImage: "pareja-bg.jpg" },
                { label: "En familia", backgroundImage: "familia-bg.jpg" }
            ]
        },
        {
            question: "¿Que te gusta más?",
            options: [
                { label: "Mar", backgroundImage: "mar-bg.jpg" },
                { label: "Montaña", backgroundImage: "montaña-bg.jpg" },
                { label: "Ciudad", backgroundImage: "ciudad-bg.jpg" },
                { label: "Rural", backgroundImage: "rural-bg.jpg" }
            ]
        },
        {
            question: "¿Cuánto tiempo planeas viajar?",
            options: [
                { label: "Fin de semana", backgroundImage: "weekend-bg.jpg" },
                { label: "1 semana", backgroundImage: "1-week-bg.jpg" },
                { label: "2 semanas o más", backgroundImage: "2-weeks-bg.jpg" }
            ]
        },
        {
            question: "¿Qué tipo de alojamiento prefieres?",
            options: [
                { label: "Hotel", backgroundImage: "hotel-bg.jpg" },
                { label: "Cabaña", backgroundImage: "cabaña-bg.jpg" },
                { label: "Apartamento", backgroundImage: "apartment-bg.jpg" },
                { label: "Camping", backgroundImage: "camping-bg.jpg" }
            ]
        },
        {
            question: "¿Qué presupuesto tienes?",
            options: [
                { label: "Menos de 50€ por noche", backgroundImage: "less-than-50-bg.jpg" },
                { label: "50€ - 100€ por noche", backgroundImage: "50-to-100-bg.jpg" },
                { label: "100€ - 200€ por noche", backgroundImage: "100-to-200-bg.jpg" },
                { label: "Más de 200€ por noche", backgroundImage: "more-than-200-bg.jpg" }
            ]
        }        
        // Agregar más pasos según sea necesario
    ];

    const handleSelectOption = (option) => {
        setSelectedOptions([...selectedOptions, option]);
    }

    const handleNextStep = () => {
        setStep(step + 1);
    }

    return (
        <Layout title="Explora">
            <div className="container px-4 py-5" id="custom-cards">
                <h1 className="pb-2">Buscamos un viaje hecho a tu medida</h1>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {steps.map((stepInfo, index) => (
                        index === step && (
                            <CardForm 
                                key={index}
                                question={stepInfo.question}
                                options={stepInfo.options}
                                onSelectOption={handleSelectOption}
                            />
                        )
                    ))}
                </div>          
                <div className="d-flex gap-2 justify-content-center py-5">
                    {step < steps.length - 1 && (
                        <button 
                            className="btn btn-primary d-inline-flex align-items-center" 
                            type="button" 
                            onClick={handleNextStep}
                        >
                            Siguiente
                            <svg className="bi ms-1" width="20" height="20">
                                <use xlinkHref="#arrow-right-short"/>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Explora;



<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
    <symbol id="arrow-right-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
    </symbol>
    <symbol id="x-lg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
      <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
    </symbol>
  </svg>