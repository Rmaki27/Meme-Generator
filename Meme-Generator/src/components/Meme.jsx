import memes from '../memesData.js'

export default function Meme() {
    function handleClick() {
        const memesArr = memes.data.memes
        const randMemeIndex = Math.floor(Math.random()*memesArr.length)
        console.log(memesArr[randMemeIndex].url)
    }
    return (
<main>
    <div className="Meme--container" action="">
        <input type="text" placeholder="Enter top text here" />
        <input type="text" placeholder="Enter bottom text here" />
        <button className="Meme--button" onClick={handleClick}>Get a new meme image 🖼 </button>
        <div className="Meme--img"></div>
    </div>
</main>

        )
}