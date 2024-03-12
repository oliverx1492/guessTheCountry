import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState()

    const IMAGE_URL = "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=600"

    const chooseModus = (modus) => {

        setMessage("Spiel wird gestartet")

        setTimeout(() => {
            startGame()
        }, 1000)

    }

    const startGame = () => {
        navigate(`/game`)
    }

    return (
        <div className="home">

            <div className="left">
                <div className="bg_image">
                    <img src={IMAGE_URL} />
                </div>
            </div>

            <div className="right">
                <div>
                    <h1>GuessTheCountry</h1>

                    <div className="select">
                   

                        <div className="start_box">
                            <div className="button_box">
                                <button onClick={() => chooseModus()}>Start</button>
                                <Link to="howTo"><button>Wie spielt man</button></Link>
                               
                            </div>
                            <p>{message}</p>
                        </div>
                        
                    </div>
                       
                  
                    
                    
                    
                </div>
               
            </div>




        </div>
    )
}

export default Home