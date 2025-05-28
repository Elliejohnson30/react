import React, { useState } from 'react'
// import "./App.css"
import CatImage from './components/CatImage';
import Lottie from "lottie-react";
import CatLottie from "../assets/cat-image.json";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [catImage, setCatImage] = useState(null);
    const [catImageTxt, setCatImageTxt] = useState(null);
    const [whatCatSays, setWhatCatSays] = useState("");
    const [entersite, setEnterSite] = useState(false);
    const [catFact, setCatFact] = useState("");
    // async await: new way
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://cataas.com/cat?json=true");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            setCatImage(data.url)
        } catch (error) {

        }


        console.log(data)
        console.log(data.url)
        console.log("https://cataas.com/cat/0C2bQ39x8kuhx31p?position=center", data.url)
        // create a STATE called: catImage
        // save cat image to STATE
        //  show image in html

        setIsLoading(false);
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 1000);

    }
    // old way
    const fetchCatText = () => {
        fetch('https://cataas.com/cat/says/" ${whatCatSays}?fontSize=200&filter=mono&fontColor=blue')
            .then(
                (response) => {
                    if (!response.ok) {
                        throw new Error("Something went wrong!");

                    }
                    console.log(response.url)
                    setCatImageTxt(response.url)
                }
            )
            .catch(
                (error) => {
                    alert(error);

                }
            )

    }
    const enterHandler = () => {
        setEnterSite(true);
    }
    const fetchCatFacts = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact?max_length=140");

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            setCatFact(data.fact)

        } catch (error) {
            alert(error);
        }

    }

    if (entersite == false) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-md text-center">
    <h2 className="text-2xl font-bold mb-4 text-black">Welcome to my Cat app!</h2>
    <Lottie className="bg-[green] h-[100px] w-[100px] mx-auto" animationData={CatLottie} loop={true} />
    <h3 className="mt-4 text-xl text-black">Random cat fact:</h3>
    <p className="text-lg mt-2 text-black">{catFact}</p>
    <div className="mt-4 space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={enterHandler}>
        Enter
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={fetchCatFacts}>
        Get fact
      </button>
    </div>
  </div>
</div>

        )
    }
    return (
        <div>
            <div className="p-8 bg-gradient-to-r from-yellow-100 to-pink-100 min-h-screen">
  <h1 className="text-3xl font-bold text-center mb-4">Cat App</h1>
  <p className="text-center text-lg mb-6">Press the button to get a cat!</p>

  <div className="flex flex-col md:flex-row justify-center items-start gap-8">
    {/* First Cat Card */}
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2 border-4 border-pink-300 hover:scale-105 transition-transform">
      <CatImage
        imageOfCat={catImage}
        btnTxt="Meow"
        onClick={fetchData}
      />
    </div>

    {/* Second Cat Card */}
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2 border-4 border-yellow-400 hover:scale-105 transition-transform">
      <CatImage
        imageOfCat={catImageTxt}
        btnTxt="Cat Says"
        onClick={fetchCatText}
      />

      <input
        type="text"
        placeholder="What does your cat say?"
        className="mt-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={whatCatSays}
        onChange={(e) => setWhatCatSays(e.target.value)}
      />
    </div>
  </div>
</div>

        </div >
    )
}
