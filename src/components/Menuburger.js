import "./Menuburger.css";

const Menuburger = () => {
  const nav = document.querySelector("nav");

  document.querySelector("#burger").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    nav.classList.toggle("show");
  });

  return (
    <>
      <div id="container">
        <div id="burger">
          <div className="bun top"></div>
          <div className="filling"></div>
          <div className="bun bottom"></div>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="green">
            <a href="/TourList">Tournaments</a>
          </li>
          <li className="red">
            <a href="/CharactersList">Characters</a>
          </li>
          <li className="yellow">
            <a href="/gameboard">Game</a>
          </li>
          <li className="purple">
            <a href="/gameboard">Actual tournament</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menuburger;
