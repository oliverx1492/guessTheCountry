import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import countries from "../assets/countries.json"
import { useForm } from "react-hook-form"

const Game = () => {

    //Zielland
    const [target, setTarget] = useState()



    //Input
    const [input, setInput] = useState("")

    //Die Versuche der Spieler
    const [guess, setGuess] = useState([])

    //Die Farbe des Versuchs
    const [color, setColor] = useState()

    //eine Nachricht
    const [message, setMessage] = useState()

    const [info, setInfo] = useState()


    const [won, setWon] = useState(false)

    // alle länder namen werden in die Liste gespeichert
    let liste = []
    countries.map((item, index) => {

        liste.push(item.name)
    })




    useEffect(() => {
        startGameAll()
    }, [])




    const startGameAll = () => {

        const randomNumber = Math.floor(Math.random() * (countries.length + 1))

        const targetCountry = countries.find(country => country.id == randomNumber)

        setTarget(targetCountry)


    }

    const onChangeHandler = (event) => {
        setInput(event.target.value)
    }


    const onSubmit = (event) => {

        event.preventDefault()
       // console.log("Input: ", input)
       // console.log("Ziel: ", target.name)



        const guessContinent = countries.find(country => country.name == input)
        // console.log(guessContinent)

        if (!liste.includes(input)) {
            setInfo("Falsche Eingabe")
        }

        else if (input === target.name) {
            setInfo("")
            setColor("rgb(73, 225, 162)")
            setGuess([...guess, input])
            setMessage(guess.length + 1)
            setWon(true)
        }

        else if (target.nachbarn.includes(input)) {
            setInfo("Direkter Nachbar")
            setColor("rgb(209, 234, 118)")
            setGuess([...guess, input])
            setMessage(guess.length + 1)
        }

        else if (guessContinent.kontinent == target.kontinent) {
            setInfo("Richtiger Kontinent")
            setColor("rgb(225, 169, 73)")
            setGuess([...guess, input])
            setMessage(guess.length + 1)
        }
        else {
            setInfo("Falscher Kontinent")
            setGuess([...guess, input])
            setColor("rgb(233, 128, 128)")
            setMessage(guess.length + 1)
        }




        setInput("")



    }

    const restart = () => {
        window.location.reload()
    }

    return (
        <div className="base" style={{ backgroundColor: color }}>
            <Link to="/howTo"><p>Wie spielt man</p></Link>
            <h1>GuessTheCountry</h1>
            {message && <p>{message}. Versuch</p>}
            <div className="game">

                {!won && <form onSubmit={onSubmit}>
                    <input disabled={won}

                        onChange={onChangeHandler}
                        value={input}

                        type="text" />
                        
                    {info && <div className="info"><p>Tipp: {info}</p></div>}
                </form>}




            </div>

            {won && <div className="winModal">
                <div className="win">
                    <h2>Das gesuchte Land war {target.name}</h2> 
                    <h4>Gewonnen in {message} Versuchen</h4>
                    <h5 className="restart" onClick={restart}>Nochmal spielen?</h5>
                </div>
            </div>
            }



            {guess && guess.map((item, index) => (
                <p key={index}>{item}</p>
            ))}


        </div>
    )
}

export default Game