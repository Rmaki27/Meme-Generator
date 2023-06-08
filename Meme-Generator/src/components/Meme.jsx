import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }

    function getMemeImage(event) {
        event.preventDefault()
        const memesArr = allMemes
        const randMemeIndex = Math.floor(Math.random()*memesArr.length)
        const url = memesArr[randMemeIndex].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }

    return (
        <main>
            <form onSubmit={getMemeImage}>
                <div className="Meme--form" action="">
                    <input type="text" onChange={handleChange} name="topText" value={meme.topText} placeholder="Enter top text here" />
                    <input type="text" onChange={handleChange} name="bottomText" value={meme.bottomText} placeholder="Enter bottom text here" />
                    <button className="Meme--button" onClick={getMemeImage}>Get a new meme image 🖼 </button>
                </div>
            </form>
            <div className='Meme--container'>
                <h2 className="Meme--text top">{meme.topText}</h2>
                <h2 className="Meme--text bottom">{meme.bottomText}</h2>
                <img src={meme.randomImage} className='Meme--img' alt="meme image" />
            </div>
        </main>
    )
}