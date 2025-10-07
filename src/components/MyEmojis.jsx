import axios from "axios";
import { useEffect, useState } from "react";

const httpClient = axios.create();

export function MyEmojis() {
  const [emojisResults, setEmojisResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  //   function searchEmojis() {
  //     httpClient
  //       .get("https://emojihub.yurace.pro/api/search?q=" + searchText)
  //       .then((result) => {
  //         setEmojisResults(result.data);
  //       });
  //   }

  const searchEmojis = async () => {
    const result = await httpClient.get(
      "https://emojihub.yurace.pro/api/search?q=" + searchText
    );
    setEmojisResults(result.data);
  };

  return (
    <div className="bg-white">
      <h1>Get Emojis</h1>
      <div>
        <p>Emojis Found</p>
        <input
          className="border-black"
          type="text"
          value={searchText}
          onChange={(ev) => {
            setSearchText(ev.target.value);
          }}
        />
        <button onClick={() => searchEmojis()}>Search Emojis</button>
        <div>
          {emojisResults.slice(0, 30).map((emoji) => {
            return (
              <div key={emoji.name}>
                <span
                  dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}
                ></span>
                {emoji.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
