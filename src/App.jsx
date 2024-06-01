import { useEffect, useState } from "react";
import Background from "./Components/Background/index";
import Navbar from "./Components/Navbar/index";
import Hero from "./Components/Hero/index";

const App = () => {
  let heroData = [
    { text1: "Dive Into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passionas" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount(count => {
        return count === 2 ? 0 : count + 1;
      });
    }, 2000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
