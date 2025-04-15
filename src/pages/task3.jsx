import { useState } from "react";

const Task3 = () => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState(`https://robohash.org/${text}.png`);

  const handleGenerateImage = () => {
    setUrl(`https://robohash.org/${text}.png`);
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
    </div>
  );
};

export default Task3;
