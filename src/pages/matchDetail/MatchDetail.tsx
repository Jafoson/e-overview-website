import styles from "./MatchDetail.module.scss";
import { titleContext } from "../../contexts/TitleContext";
import SideContent from "../../components/Side-Content/SideContent";
import Small_Panel from "../../components/Small_Panel/Small_Panel";
import { theme } from "../../helper/variables";
import {
  MatchScoreCard,
  MatchScoreData,
} from "../../components/cards/MatchDetail/MatchScoreCard";
import PlayerOverviewCard, {
  Player,
} from "../../components/cards/PlayerOverview/PlayerOverviewCard";
import MatchHistoryCard, {
  MatchHistoryData,
} from "../../components/cards/MatchHistory/MatchHistoryCard";
import { useContext, useEffect } from "react";

const historyMatches: Array<MatchHistoryData> = [
  {
    date: "12.08.2023",
    logoTeam1:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601111345573958/image.png?width=416&height=416",
    logoTeam2:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601083201802261/image.png?width=416&height=416",
    MatchType: "Finale",
    scoreTeam1: 3,
    scoreTeam2: 0,
    ScoreType: "Bo3",
  },
  {
    date: "07.07.2023",
    logoTeam1:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601111345573958/image.png?width=416&height=416",
    logoTeam2:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601083201802261/image.png?width=416&height=416",
    MatchType: "Liga-Match",
    scoreTeam1: 1,
    scoreTeam2: 0,
    ScoreType: "Bo1",
  },
  {
    date: "08.06.2023",
    logoTeam2:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601111345573958/image.png?width=416&height=416",
    logoTeam1:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601083201802261/image.png?width=416&height=416",
    MatchType: "Liga-Match",
    scoreTeam1: 0,
    scoreTeam2: 1,
    ScoreType: "Bo1",
  },
  {
    date: "01.04.2023",
    logoTeam2:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601111345573958/image.png?width=416&height=416",
    logoTeam1:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601083201802261/image.png?width=416&height=416",
    MatchType: "Finale",
    scoreTeam1: 3,
    scoreTeam2: 2,
    ScoreType: "Bo3",
  },
  {
    date: "21.03.2023",
    logoTeam2:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601111345573958/image.png?width=416&height=416",
    logoTeam1:
      "https://media.discordapp.net/attachments/1134234924170358864/1134601083201802261/image.png?width=416&height=416",
    MatchType: "Upper-Bracket Finale",
    scoreTeam1: 3,
    scoreTeam2: 1,
    ScoreType: "Bo3",
  },
];

const playersLeft: Array<Player> = [
  {
    name: "FUN K3Y",
    role: "Bot-Lane",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362474401968138/image.png?width=306&height=304",
  },
  {
    name: "Mask",
    role: "Mid-Laner",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362511798386760/image.png?width=306&height=304",
  },
  {
    name: "Venour",
    role: "Top-Laner",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362547013759017/image.png?width=306&height=304",
  },
  {
    name: "Lekcyc",
    role: "Support",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362577439248404/image.png?width=306&height=304",
  },
  {
    name: "CAD",
    role: "Jungler",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362605922762833/image.png?width=306&height=304",
  },
];

const playersRight: Array<Player> = [
  {
    name: "Forbiven",
    role: "Mid-Laner",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362699095027712/image.png?width=306&height=304",
  },
  {
    name: "JNX",
    role: "Top-Laner",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362723971444836/image.png?width=306&height=304",
  },
  {
    name: "Lurox",
    role: "Jungler",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362750215209121/image.png?width=306&height=304",
  },
  {
    name: "PRIME",
    role: "Support",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362803340247060/image.png?width=306&height=304",
  },
  {
    name: "KEDUI",
    role: "Bot-Lane",
    id: "673673",
    imgUrl:
      "https://media.discordapp.net/attachments/1134234924170358864/1144362779512418434/image.png?width=306&height=304",
  },
];

const matchScore: MatchScoreData = {
  date: new Date("Thu Aug 31 2023 15:30:00 GMT+0200"),
  team1ID: "7643767",
  team2ID: "463762738",
  isTeam1Win: false,
  isMatchEnd: true,
  team1LogoURL:
    "https://media.discordapp.net/attachments/1134234924170358864/1134601111345573958/image.png?width=416&height=416",
  team2LogoURL:
    "https://media.discordapp.net/attachments/1134234924170358864/1142510902818656286/image.png?width=560&height=560",
  team1Name: "SK Gaming Prime",
  team2Name: "Unicorns of Sexy Edition",
  matchID: "tzrzuegew",
  team1Score: 3,
  team2Score: 1,
  event: "Prime League",
  eventID: "String",
  game: "League of Legends",
  gameID: "urezhfhjwef",
  valueOfMatches: 5,
  matchType: "Finale",
};

export default function MatchDetail() {
  useEffect(() => {
    document.title = "Game | TournamentFox";
  }, []);
  const getTitleContext = useContext(titleContext);
  getTitleContext.switchTitle(" ");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Small_Panel />
        <div className={styles.dateWrapper}>
          <h1 className={theme({ styles: styles, name: "dateTitle" })}>
            Sa 12, Aug
          </h1>
          <h2 className={theme({ styles: styles, name: "timeTitle" })}>
            15:00 Uhr
          </h2>
        </div>
        <MatchScoreCard data={matchScore} />
        <div className={styles.socialWrapper}>
          <Small_Panel />
          <Small_Panel />
        </div>
        <PlayerOverviewCard
          playersLeft={playersRight}
          playersRight={playersLeft}
        />
      </div>
      <SideContent>
        <h1 className={theme({ styles: styles, name: "title" })}>
          previous matches
        </h1>
        <div className={styles.previousWrapper}>
          {historyMatches.map((match) => {
            return <MatchHistoryCard match={match} />;
          })}
        </div>
      </SideContent>
    </div>
  );
}
