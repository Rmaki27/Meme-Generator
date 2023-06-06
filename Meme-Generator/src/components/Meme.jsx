import memes from '../memesData.js'
import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "One Does Not Simply",
        bottomText: "Beat Patrick Mahomes in November",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memes.data.memes);


    function getMemeImage() {
        const memesArr = allMemeImages
        const randMemeIndex = Math.floor(Math.random()*memesArr.length)
        const url = memesArr[randMemeIndex].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }

    return (
        <main>
            <div className="Meme--container" action="">
                <input type="text" placeholder="Enter top text here" />
                <input type="text" placeholder="Enter bottom text here" />
                <button className="Meme--button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
            </div>
            <img src={meme.randomImage} className='Meme--img' alt="meme image" />
        </main>

    )
}