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
        <div className="flex flex-col md:flex-row text-center bg-blue-100 h-screen md:h-100">

            {/* Linke Seite */}
            <div className="w-full flex justify-center items-center">
                <div className="h-min overflow-hidden rounded-md">
                    <img className="rounded-lg hover:scale-125 transition-all duration-1000 cursor-pointer h-80 object-cover md:h-screen" src={IMAGE_URL} alt="eart_image" />
                </div>
            </div>

            {/* Rechte Seite */}
            <div className=" w-full h-screen flex justify-center items-center ">
                <div className="p-3 flex flex-col justify-center items-center">
                    <h1 className="mb-4 text-xl md:text-5xl font-extrabold p-2">GuessTheCountry</h1>

                    <div className="">


                        <div className="start_box">
                            <div className="button_box">
                                
                                <button className="px-20 py-6 m-2 p-2 rounded-lg bg-slate-200 
                                shadow-lg shadow-lime-900 hover:brightness-90"
                                    onClick={() => chooseModus()}>Start</button>

                                <Link to="howTo">
                                    <button className="px-20 py-6 m-2 p-2 rounded-lg
                                     bg-slate-200 shadow-lg shadow-lime-900 
                                     hover:brightness-90">Wie spielt man</button>
                                </Link>

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