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

    const [sug, setSug] = useState()

    const [won, setWon] = useState(false)

    // alle länder namen werden in die Liste gespeichert
    let liste = []
    countries.map((item, index) => {

        liste.push(item.name)
    })




    useEffect(() => {
        
        startGameAll()
    }, [])




    useEffect( ()=> {

        if(input) {
            const suggestion = liste.find(value => value.startsWith(input))
        
            setSug(suggestion)


            
        }
        
    },[input] )




    const startGameAll = () => {

        const randomNumber = Math.floor(Math.random() * (countries.length + 1))

        const targetCountry = countries.find(country => country.id == randomNumber)

        setTarget(targetCountry)


    }

    const onChangeHandler = (event) => {
        setInfo()
        setInput(event.target.value)
        
    }


    const onSubmit = (event) => {

        event.preventDefault()
        setSug()



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
        <div className="text-center bg-blue-100 h-screen">

            


            <div className=" flex flex-col items-center h-screen transition-all duration-500" style={{ backgroundColor: color }}>
            <Link to="/howTo"><p>Wie spielt man</p></Link>

               <p className="mb-4 text-7xl font-extrabold p-2">Guess The Country</p>  
                
                {message && <p>{message}. Versuch</p>}
                <div className=" p-2 w-1/2 flex flex-col">

                    {!won && <form onSubmit={onSubmit}>

                        <input disabled={won}
                            className="block w-full p-6 w-100 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                            onChange={onChangeHandler}
                            value={input}

                            type="text" />

                            {sug && <p className="p-4">Meinst du    : {sug}</p>}

                        {info && <div className="p-6"><p>Tipp: {info}</p></div>}
                    </form>}




                </div>

                {won && <div className="flex justify-center m-4">
                    <div className="bg-amber-400 p-4 rounded-lg">
                        <h2 className="text-2xl">Gratulation! Das gesuchte Land war {target.name}</h2>
                        <h4 className="text-lg">Gewonnen in {message} Versuchen</h4>
                        <h5 className="text-md cursor-pointer hover:scale-110 transition-all" onClick={restart}>Nochmal spielen?</h5>
                    </div>
                </div>
                }



                {guess && guess.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}


            </div>
        </div>
    )
}

export default Game