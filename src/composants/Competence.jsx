import React from 'react';
import './css/competence.css'
import html from '../media/html1.png'
import css from '../media/css1.png'
import figma from '../media/figma1.png'
import js from '../media/js1.png'
import react from '../media/react1.png'
import node from '../media/nodeJS1.png'
import mongo from '../media/mongoDB1.png'
import firebase from '../media/firebase1.png'

function Competence() {
    return (
        <div className='competence_body'>
            <h1>
                Competence
            </h1>

            <div className="ls_competence">
                <div className="competence">
                    <div className="photo">
                    <img src={html} alt="" />
                    </div>
                    <p>HTML</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={css} alt="" />
                    </div>
                    <p>CSS</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={figma} alt="" />
                    </div>
                    <p>FIGMA</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={js} alt="" />
                    </div>
                    <p>JAVASCRIPT</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={react} alt="" />
                    </div>
                    <p>REACT JS</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={node} alt="" />
                    </div>
                    <p>NODE JS</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={mongo} alt="" />
                    </div>
                    <p>MONGODB</p>
                </div>
                <div className="competence">
                    <div className="photo">
                    <img src={firebase} alt="" />
                    </div>
                    <p>FIREBASE</p>
                </div>
            </div>
        </div>
    );
}

export default Competence;