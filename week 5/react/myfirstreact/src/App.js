import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from "./IndianPlayers";

function App() {

  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 82 },
    { name: "Gill", score: 68 },
    { name: "Rahul", score: 72 },
    { name: "Hardik", score: 65 },
    { name: "Jadeja", score: 88 },
    { name: "Ashwin", score: 55 },
    { name: "Shami", score: 60 },
    { name: "Bumrah", score: 75 },
    { name: "Siraj", score: 50 },
    { name: "Kuldeep", score: 69 }
  ];

  const IndianTeam = [
    "Virat","Rohit","Gill","Rahul","Hardik",
    "Jadeja","Ashwin","Shami","Bumrah","Siraj","Kuldeep"
  ];

  const T20players = ["Virat","Rohit","Hardik"];
  const RanjiPlayers = ["Pujara","Rahane","Iyer"];

  const IndianPlayers = [...T20players, ...RanjiPlayers];

  var flag = false;

  if(flag === true)
  {
    return(
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players}/>

        <hr/>

        <h1>Players having Score Less than 70</h1>
        <Scorebelow70 players={players}/>
      </div>
    );
  }
  else
  {
    return(
      <div>

        <h1>Indian Team</h1>

        <h2>Odd Players</h2>
        <OddPlayers players={IndianTeam}/>

        <hr/>

        <h2>Even Players</h2>
        <EvenPlayers players={IndianTeam}/>

        <hr/>

        <h2>Merged Players</h2>
        <ListofIndianPlayers IndianPlayers={IndianPlayers}/>

      </div>
    );
  }
}

export default App;