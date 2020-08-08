import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os professores disponíveis">
            <form id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject" />
                </div>

                <div className="input-block">
                    <label htmlFor="week_day">Dia da semana</label>
                    <input type="text" id="week_day" />
                </div>

                <div className="input-block">
                    <label htmlFor="time">Horaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</label>
                    <input type="text" id="time" />
                </div>
            </form>
           </PageHeader>

           <main>
               <article className="teacher-item">
                   <header>
                       <img src="https://avatars0.githubusercontent.com/u/19291466?s=460&v=4" alt="Lorena" />
                       <div></div>
                   </header>
               </article>
           </main>
        </div>
    )
}

export default TeacherList;