import { useContext } from "react";
import Match_card from "../../components/cards/Match_card";
import { titleContext } from "../../contexts/TitleContext";

export default function Home() {
  const getTitleContext = useContext(titleContext);
  getTitleContext.switchTitle("Upcoming matches");

  const matchData = [
    {
      teamwrappen:
        "https://media.discordapp.net/attachments/1134234924170358864/1134234963676500081/image.png?width=416&height=416",
      team2wrapper:
        "https://media.discordapp.net/attachments/1134234924170358864/1134600996249673738/image.png?width=416&height=416",
      match_day: "23.01.2023",
      match_time: "22:00",
      teamname: "Eintracht Spandau",
      teamname2: "BIG",
      teamscore: 3,
      team2score: 2,
      match_type: "Bo5",
      event: "Prime League",
      game: "League of Legends",
      teamID: "blau",
      team2ID: "blau",
      eventID: "blau",
      gameID: "blau",
      matchID: "blau",
    },
    {
      teamwrappen:
        "https://media.discordapp.net/attachments/1134234924170358864/1134601029120430100/image.png?width=416&height=416",
      team2wrapper:
        "https://media.discordapp.net/attachments/1134234924170358864/1134601058019184781/image.png?width=416&height=416",
      match_day: "23.01.2023",
      match_time: "23:00",
      teamname: "NNO",
      teamname2: "Eintracht Frankfurt",
      teamscore: 3,
      team2score: 1,
      match_type: "Bo5",
      event: "Prime League",
      game: "League of Legends",
      teamID: "blau",
      team2ID: "blau",
      eventID: "blau",
      gameID: "blau",
      matchID: "blau",
    },
  ];

  return (
    <div>
      <Match_card data={matchData[0]} />
      <Match_card data={matchData[1]} />
    </div>
  );
}
