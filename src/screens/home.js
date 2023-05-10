import "./Home.css";
import Header from "../components/Header";
// import yoda from '../assets/img/yoda.svg'
// import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";

const Home = () => {
  const musicTracks = [
    {
      name: "starwars",
      src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3",
    },
    {
      name: "Memories",
      src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3",
    },
    {
      name: "Creative Minds",
      src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3",
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="home">
      <div className="homeSound">
        <AudioPlayer
          // style={{ width: "300px" }}
          style={{ borderRadius: "1rem" }}
          autoPlay
          // layout="horizontal"
          src={musicTracks[trackIndex].src}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          // other props here
        />
      </div>
      <Header />
      <p>
        <div class="a-long-time-ago">
          A long time ago, in a galaxy far,
          <br /> far away..
        </div>

        <div class="crawl">
          <div>
            <p>
              Welcome in our wonderful starwars project. It was released during
              our very first hackathon. The topic was encounter in Starwars
              universe (no kidding...)
            </p>
            <p>
              We produced it with our Rebel team, we are fighting every day
              against the evil Empire of CSS. It was also the first project in
              React consuming an API.
            </p>
            <p>
              Pursued by the Empire's sinister agents, we organize IN SECRET
              some pod races tournaments, find here a site when you can check
              the different incoming tournaments, select your champion and have
              a view on the bracket of the actual tournament....
            </p>
            <p>
              We had a lot of fun during this hackathon, our website was made
              with high skills and love, thanks for your attention.
            </p>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Home;
