import { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const url = "https://type.fit/api/quotes";

  const getQuote = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum]);
      console.log(data);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-indigo-700">
      <div className="flex items-center justify-center flex-col shadow-[0_5px_15px_rgba(0,0,0,0.35)] h-[23rem] w-[40rem] gap-6 rounded-lg bg-white">
        <p className="flex items-center justify-center h-[6rem] w-[35rem] font-bold text-xl font-mono">
          {quote.text}
        </p>
        <p className="flex items-center justify-end h-[5rem] w-[33rem] font-mono text-lg">
          - {quote.author}
        </p>
        <button
          onClick={getQuote}
          className="py-2 px-2 bg-cyan-500 rounded-md text-xl font-semibold hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
        >
          Get Quote
        </button>
      </div>
    </main>
  );
};

export default Quote;
