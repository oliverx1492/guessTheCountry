import React from "react";
import { Link } from "react-router-dom";



const How = () => {


    return (
        <div className="text-center bg-blue-100 h-100 md:h-screen ">
            <h4><Link to="/">GuessTheCountry</Link></h4>
            <h1 className="mb-4 text-7xl font-extrabold p-2">Wie spielt man</h1>

            <div className="flex flex-col items-center">
                

               <p className="text p-1"> Gesucht wird ein zufälliges Land auf der Erde 
                und du musst erraten, um welches Land es sich handelt</p>

                <p className="text p-1">In der Eingabe kannst du deinen Tipp abgeben</p>

                <p className="text p-1 mb-2">Die Hintergrundfarbe gibt dir Feedback, wie gut dein Tipp war</p>

                
                    <p className="text p-1">Die Bedeutung der Farben:</p>

                    <div className="text-center p-2 rounded-lg w-1/2" style={{backgroundColor:"rgb(233, 128, 128)"}}>Falsches Land, kein Nachbarland, falscher Kontinent</div>
                    <br />
                    <div className="text-center p-2 rounded-lg w-1/2" style={{backgroundColor:"rgb(225, 169, 73)"}}>Falsches Land, kein Nachbarland, richtiger Kontinent</div>
                    <br />
                    <div className="text-center p-2 rounded-lg w-1/2" style={{backgroundColor:"rgb(209, 234, 118)"}}>Falsches Land, Nachbarland, richtiger Kontinent</div>
                    <br />
                    <div className="text-center p-2 rounded-lg w-1/2" style={{backgroundColor:"rgb(73, 225, 162)"}}>Richtiges Land</div>
                    <br />
                    
                    <p className="text-md cursor-pointer hover:scale-110 transition-all"> <Link  to="/game">Starte jetzt das Spiel</Link></p>
                



            </div>
           


        </div>

        
    )
}

export default How