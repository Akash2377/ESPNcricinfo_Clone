import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const [teamname, setteamname] = React.useState({
        team1: "",
        team1img:"",
        team2: "",
        team2img:""
    });
    const [team, setteam] = React.useState([]);
    const [contest, setcontest] = React.useState([]);
    function setTeamfn(team) {
        setteam(team);
    }

    function forsetcontest() {
        setcontest((contest) => {
            return "done"
        })
    }

    function teamfn(team1, team1img, team2,team2img) {
      const obj = {
        team1: team1,
        team1img: team1img,
        team2: team2,
        team2img: team2img,
      };
      setteamname(obj);
    }

  return (
    <AuthContext.Provider
      value={{ teamname, teamfn, setTeamfn, team, forsetcontest, setcontest }}
    >
      {children}
    </AuthContext.Provider>
  );
}
