import React from 'react';
import './css/projet.css';

function Projet() {
    return (
        <div className='projet_body'>
            <h1>Projets réalisés</h1>
            <div className="ls_projet">
            <div className="new_projet">
                    <div className="tittle">
                        <h2>GreenHands <br />
                        <span>HTML , CSS , JS</span></h2>
                    </div>

                    <p className='descrip_projet'>
                    Projet de gestion de personnnelle mis en place dans le but d'enregistrer des travailleur , enregistrer des taches et les attribuer aux different travailleur. Contient deux antite (administrateur et super-administrateur )<br />
                    Simulation de base de donnée avec localStorage
                    </p>

                    <div className="link">
                        <a href="">Voir github</a>
                        <a href="">voir Projet</a>
                    </div>
                </div>
                <div className="new_projet">
                    <div className="tittle">
                        <h2>SearchSchool <br />
                        <span>HTML , CSS</span></h2>
                    </div>

                    <p className='descrip_projet'>
                    SerchSchool est une application éducative qui facilite la recherche d'établissement aux parents pour leurs enfants , elle enregistre plusieurs établissement ( primaire , collège et lycée) et fournit toutes les information nécessaire dans le but de faciliter l'accès aux informations aux parents.
                    </p>

                    <div className="link">
                        <a href="">Voir github</a>
                        <a href="">voir Projet</a>
                    </div>
                </div>
                <div className="new_projet">
                    <div className="tittle">
                        <h2>Sotrapass <br />
                        <span>REACT , FIREBASE</span></h2>
                    </div>

                    <p className='descrip_projet'>
                    Sotrapass est une application innovante qui vise à permettre aux utilisateurs de pouvoir acheter leur ticket de bus sotra grace à un compte rechargeable via l'application et le faire valider par un code QR qu'il aura reçu. Le scanne du code se fera aux arrêt de bus pour le retrait des tickets
                    </p>

                    <div className="link">
                        <a href="">Voir github</a>
                        <a href="">voir Projet</a>
                    </div>
                </div>
                <div className="new_projet">
                    <div className="tittle">
                        <h2>InvestCop <br />
                        <span>REACT , FIREBASE </span></h2>
                    </div>

                    <p className='descrip_projet'>
                    InvestCop est une  application associé à un entreprise de financement de projet de ses utilisateurs. Les utilisateurs présentent des projet qu'il envoi à l'administrateur et celui-ci décide oui ou non d'investir. Contient deux antités ( administrateur et utilisateurs)
                    </p>

                    <div className="link">
                        <a href="">Voir github</a>
                        <a href="">voir Projet</a>
                    </div>
                </div>
                {/* <div className="new_projet">
                    <div className="tittle">
                        <h2>GreenHands <br />
                        <span>HTML , CSS , JS</span></h2>
                    </div>

                    <p className='descrip_projet'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi quam repudiandae. Aliquid quae necessitatibus maxime quisquam itaque rerum quo nobis inventore? Accusamus in nulla suscipit dignissimos, similique error inventore.
                    </p>

                    <div className="link">
                        <a href="">Voir github</a>
                        <a href="">voir Projet</a>
                    </div>
                </div> */}
                {/* <div className="new_projet">
                    <div className="tittle">
                        <h2>GreenHands <br />
                        <span>HTML , CSS , JS</span></h2>
                    </div>

                    <p className='descrip_projet'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi quam repudiandae. Aliquid quae necessitatibus maxime quisquam itaque rerum quo nobis inventore? Accusamus in nulla suscipit dignissimos, similique error inventore.
                    </p>

                    <div className="link">
                        <a href="">Voir github</a>
                        <a href="">voir Projet</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Projet;