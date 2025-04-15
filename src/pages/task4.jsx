import { useState } from "react";

const Task4 = () => {
  const [joke, setJoke] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFetchData = async function () {
    setModal(true);
    setLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setJoke(result);
      console.log(joke.setup);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="mt-4 flex items-center justify-center mt-20">
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
            "Wait a minute..."
          ) : (
            <>
              <h1 className="text-xl">{joke.setup}</h1>

              <h3 className="text-lg font-bold mt-2">{joke.punchline}</h3>
            </>
          )}
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-red-600 px-4 py-2 rounded-md text-white"
              onClick={handleFetchData}
            >
              {loading ? "Loading..." : "Reload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task4;
