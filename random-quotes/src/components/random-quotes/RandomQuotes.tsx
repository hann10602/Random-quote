import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { Quotes, colors } from "../../constants/quotes";
import QuoteIcon from "../../assets/left-quote.svg";
import TwitterIcon from "../../assets/twitter.svg";
import TumblrIcon from "../../assets/tumblr.svg";
import "./style.scss";
import { ColorType, QuoteType } from "../../types/quote";

const RandomQuotes = () => {
  const [color, setColor] = useState<ColorType>({
    id: 1,
    bg: "bg-red-400",
    text: "text-red-400",
    code: "red",
  });

  const [fetch, setFetch] = useState<boolean>(true);
  const [opacity, setOpacity] = useState<boolean>(false);
  const [quote, setQuote] = useState<QuoteType>();

  useEffect(() => {
    const handleCallApi = async () => {
      const response = await axios.get(`https://dummyjson.com/quotes/random`);

      setQuote(response.data);
    };
    setOpacity(true);

    handleCallApi();
  }, [fetch]);

  useEffect(() => {
    let colorIndex = Math.floor(Math.random() * colors.length - 1);
    while (colorIndex + 1 === color.id) {
      colorIndex = Math.floor(Math.random() * colors.length - 1);
    }

    setColor(colors.at(colorIndex));
  }, [quote]);

  return (
    <>
      <div
        id="background-color"
        className={`${color.bg} w-full h-screen relative`}
      >
        <div className="max-w-550px absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-10 px-12 bg-white border rounded-md space-y-10">
          <p
            className={`${opacity ? "animation" : ""} ${
              color.text
            } font-sm text-3xl text-center`}
            onAnimationEnd={() => {
              setOpacity(false);
            }}
          >
            <span className="inline-block mr-2">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill={`${color.code}`}
                width="24px"
                height="24px"
                viewBox="0 0 123.961 123.961"
                xml:space="preserve"
              >
                <path
                  d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
		C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
		H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                />
                <path
                  d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
		c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
		c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                />
              </svg>
            </span>

            {quote?.quote}
          </p>
          <div
            className={`${opacity ? "animation" : ""} w-full flex justify-end`}
          >
            <p className={`${color.text}`}>- {quote?.author}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <div
                onClick={() => {
                  window.location.href = "https://twitter.com/i/flow/login";
                }}
                className={`${color.bg} w-10 h-10 p-2 rounded-sm flex justify-center items-center`}
              >
                <img
                  className="w-5 h-5"
                  src={TwitterIcon}
                  alt="twitter"
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(7495%) hue-rotate(164deg) brightness(105%) contrast(103%)",
                  }}
                />
              </div>
              <div
                onClick={() => {
                  window.open("https://www.tumblr.com/login");
                }}
                className={`${color.bg} w-10 h-10 p-2 rounded-sm flex justify-center items-center`}
              >
                <img
                  className="w-5 h-5"
                  src={TumblrIcon}
                  alt="tumblr"
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(49deg) brightness(103%) contrast(103%)",
                  }}
                />
              </div>
            </div>
            <button
              className={`${color.bg} h-10 py-2 px-4 text-white rounded-sm`}
              onClick={() => {
                setFetch(!fetch);
              }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuotes;
