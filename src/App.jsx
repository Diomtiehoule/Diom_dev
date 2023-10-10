import './App.css'
import Projet from './composants/Projet'
import Description from './composants/Description'
import Competence from './composants/Competence'
import Contact from './composants/Contact'
import photo from './media/programmer.webp'
import Footer from './composants/Footer'

function App() {

  return (
    < div className='home_body'>
    
      <div className="home">
        <div className="home1">
          <div className="profil">
            <div className="photo">
              <img src={photo} alt="" />
            </div>
            <div className="info">
              <p> Diomande tiehoule A </p>
              <p> Developpeur Fullstack JS</p>
            </div>
          </div>

          <div className="infoPlus">
          <div className="locations">
              <p></p>
              <p style={{textAlign : 'center' , color : 'white'}}>Abrahamdiomande85@gmail.com</p>
            </div>
            <div className="location">
              <p>Contact :</p>
              <p>+225 07-67-67-94-73</p>
            </div>
            <div className="location">
              <p>Résidence :</p>
              <p>Côte d'ivoire</p>
            </div>
            <div className="location">
              <p>Ville : </p>
              <p>Abidjan</p>
            </div>
            <div className="location">
              <p>Age : </p>
              <p>21</p>
            </div>
          </div>
          
          <div className="border"></div>

          <div className="speaks">
            <div className="language">
              <p>Francais : </p>
              <div className="first_barre">
                <div className="second_barre"></div>
              </div>
            </div>
            <div className="language">
            <p>Anglais : </p>
              <div className="first_barre">
                <div className="second_barre2"></div>
              </div>
            </div>
          </div>


          <div className="cv_part">
          <p>Télecharger CV</p>
        </div>

        </div>

       

        <div className="home2">
          <div className="poster">
            <h1>Bienvenu chez Diom.dev</h1>
            <h1><code>"Lorsque la passion et les compétences ne font plus qu'un,<br/>
            le code donne vie à vos projet"</code>
            </h1>
          </div>

          < Description />
          < Competence />
          < Projet />
          < Contact />
      < Footer />
          
        </div>
      </div>
    </div>
  )
}

export default App
