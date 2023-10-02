import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Details />
      <Skillist />
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <h1>DEVELOPERS PROFILE CARD</h1>
      <img src="/money..png" alt="" />
    </div>
  );
}
function Details() {
  return (
    <div className="data">
      <h2> N S Meenakshi</h2>
      <p>
        Full stack MERN developer.Currently working in
        Brototype,trivandrum,kerala.Now I have 1 year experience .I also do freelancing.My charge for creating a fully functional website is 50k and above.Dont miss the chance to procure your own website
      </p>
      <span>---------------------------------- </span>
      <span>gitHub:https://github.com/MeenakshiNS</span>
    </div>
  );
}

function Skillist() {
  return (
    <div className="skill-list">
      <Skills />
      <Skills skill="HTML,CSS" emoji="🫰" color="#7B876D" />
      <Skills skill="react" color="#893F04" emoji="👶" />
      <Skills skill="redux" color="#D49B7E" emoji="😌 " />
      <Skills skill="javascript" color="#C67F43" emoji="🥳 " />
      <Skills skill="git and git hub" color="#C67F43" emoji="🫡" />
      <Skills skill="Nodejs" color="#C67F43" emoji="🤓" />
      <Skills skill="Mongodb" color="#C67F43" emoji="😎" />
    </div>
  );
}

function Skills(props) {
  console.log(props);
  return (
    <div className="skill">
      <span style={{ backgroundColor: props.color }}>
        <h3>
          {props.skill}
          {props.emoji}
        </h3>
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
