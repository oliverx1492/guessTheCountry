import React from "react";
import { Link } from "react-router-dom";



const How = () => {


    return (
        <div className="howTo">
            <h4><Link to="/">GuessTheCountry</Link></h4>
            <h1>Wie spielt man</h1>

            <div>
                

               <p> Gesucht wird ein zufälliges Land auf der Erde 
                und du musst erraten, um welches Land es sich handelt</p>

                <p>In der Eingabe kannst du deinen Tipp abgeben</p>

                <p>Die Hintergrundfarbe gibt dir Feedback, wie gut dein Tipp war</p>

                
                    <p>Die Bedeutung der Farben:</p>

                    <div className="colorBox" style={{backgroundColor:"rgb(233, 128, 128)"}}>Falsches Land, kein Nachbarland, falscher Kontinent</div>
                    <br />
                    <div className="colorBox" style={{backgroundColor:"rgb(225, 169, 73)"}}>Falsches Land, kein Nachbarland, richtiger Kontinent</div>
                    <br />
                    <div className="colorBox" style={{backgroundColor:"rgb(209, 234, 118)"}}>Falsches Land, Nachbarland, richtiger Kontinent</div>
                    <br />
                    <div className="colorBox" style={{backgroundColor:"rgb(73, 225, 162)"}}>Richtiges Land</div>
                    <br />
                    
                    <p> <Link to="/game">Starte</Link> jetzt das Spiel</p>
                



            </div>
           


        </div>

        
    )
}

export default How