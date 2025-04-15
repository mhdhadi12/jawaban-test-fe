import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState(`https://robohash.org/${text}.png`);
  const [modal, setModal] = useState(false);
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = () => {
    setUrl(`https://robohash.org/${text}.png`);
  };

  async function fetchData() {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random",
        {
          mode: "no-cors",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJoke(data);
      console.log(joke.setup);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleFetchData = () => {
    setLoading(true);
    setModal(true);
    fetchData();
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex mt-24 gap-2">
        <input
          type="text"
          className="border border-gray-400 bg-gray-200 px-4 py-2 rounded-md"
          onChange={(e) => setText(e.target.value)}
          placeholder="Ketik nama anda..."
        />

        <button
          className="bg-blue-600 px-4 py-2 rounded-md text-white"
          onClick={handleGenerateImage}
        >
          Generate
        </button>
      </div>

      <img src={url} alt={"Robohash " + text} width={400} />

      <div className="mt-4">
        <button
          className="bg-blue-600 px-4 py-2 rounded-md text-white"
          onClick={handleFetchData}
        >
          See a Random Joke
        </button>

        <div
          className={`absolute top-0 left-0 z-50 w-full h-full bg-gray-900/40 ${
            modal ? "flex items-center justify-center" : "hidden"
          }`}
        >
          <div className="max-w-xl w-full p-6 rounded-md bg-white relative">
            <button
              className="absolute top-2 right-3"
              onClick={() => setModal(false)}
            >
              ❌
            </button>

            {loading ? (
              "Loading..."
            ) : (
              <>
                <h1 className="text-xl">{joke.setup}</h1>

                <h3 className="text-lg font-bold mt-2">{joke.punchline}</h3>

                <div className="flex items-center justify-center mt-6">
                  <button
                    className="bg-red-600 px-4 py-2 rounded-md text-white"
                    onClick={fetchData}
                  >
                    Reload
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
