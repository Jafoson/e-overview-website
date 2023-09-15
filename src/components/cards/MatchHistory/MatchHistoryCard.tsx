import styles from "./MatchHistoryCard.module.scss";
import { theme } from "../../helper/variables";

export type MatchHistoryData = {
  logoTeam1: string;
  logoTeam2: string;
  date: string;
  scoreTeam1: number;
  scoreTeam2: number;
  ScoreType: string;
  MatchType: string;
};

interface IMatchHistoryCard {
  match: MatchHistoryData;
}

export default function MatchHistoryCard({ match }: IMatchHistoryCard) {
  return (
    <div className={theme({ styles: styles, name: "wrapper" })}>
      <img className={styles.image} src={match.logoTeam1} />
      <div className={styles.contentWrapper}>
        <h4 className={styles.informationen}>{match.date}</h4>
        <div className={styles.scoreWrapper}>
          <h1 className={styles.scoreTitle}>{match.scoreTeam1}</h1>
          <h2 className={styles.matchType}>{match.ScoreType}</h2>
          <h1 className={styles.scoreTitle}>{match.scoreTeam2}</h1>
        </div>
        <h4 className={styles.informationen}>{match.MatchType}</h4>
      </div>
      <img className={styles.image} src={match.logoTeam2} />
    </div>
  );
}
