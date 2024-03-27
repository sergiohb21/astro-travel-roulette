import React, { useEffect } from 'react';
import './CardForm.css';

export default function CardForm({ backgroundImage, option }) {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.addEventListener('click', function() {
                // Quita la clase 'highlight' de todos los cards
                cards.forEach(function(card) {
                    card.classList.remove('highlight');
                });
                // Agrega la clase 'highlight' solo al card que se hizo clic
                this.classList.add('highlight');
            });
        });
    }, []);

    return (
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundImage: `url('${backgroundImage}')` }} data-bs-toggle="tooltip" data-bs-placement="top" title="Click para seleccionar">
                <div className="card-overlay"></div> 
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{option}</h3>
                </div>
            </div>
        </div>
    );
}
