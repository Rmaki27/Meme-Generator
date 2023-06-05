import memes from '../memesData.js'
import React from 'react'

export default function Meme() {
    let [memeImage, setMemeImage] = React.useState("")


    function getMemeImage() {
        const memesArr = memes.data.memes
        const randMemeIndex = Math.floor(Math.random()*memesArr.length)
        setMemeImage(memesArr[randMemeIndex].url)

    }
    return (
<main>
    <div className="Meme--container" action="">
        <input type="text" placeholder="Enter top text here" />
        <input type="text" placeholder="Enter bottom text here" />
        <button className="Meme--button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
    </div>
    <img src={memeImage} className='Meme--img' alt="meme image" />
</main>

        )
}