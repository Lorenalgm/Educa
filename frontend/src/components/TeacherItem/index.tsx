import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/19291466?s=460&v=4" alt="Lorena" />
                <div>
                    <strong>Lorena Montes</strong>
                    <span>Química</span>
                </div>
            </header>
        
            <p>Entusiasta das melhores tecnologias</p>
        
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato" />
                Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;