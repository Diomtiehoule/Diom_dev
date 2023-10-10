import React from 'react';
import './css/description.css';
import photo from '../media/development.png'

function Description() {
    return (
        <div>
            <div className="descrip">
                <div className="photo">
                <img src={photo} alt="" />
                </div>

                <div className="descr">
                <h2>Hi ! moi c'est Diomande tiehoule Abraham <br /><span>Developeur Fullstack js</span></h2>

<p>En tant developeur d'application et passionné de technologie , j'uses de nouvelle technologie pour un rendu éfficace. Je mets à votre disposition , toutes mes compétence acquise dans le domaine du dévelopement pour la conception et réalisation de vos projet tout en mettant un point d'honneur à respecter les délais .</p>
                </div>
                
            </div>

            <div className="atouts">
                <h2>Mes atouts</h2>
                <div className="ls_atouts">
                    <p>_ Passionné de technologie et Dynamique</p>
                    <p>_ Sens de la recherche et Capacité à travailler sous la pression</p>
                    <p>_ Ponctuel et Apte à travailler en équipe</p>
                </div>
            </div>
        </div>
    );
}

export default Description;