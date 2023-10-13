import styles from "./MatchScoreCard.module.scss";
import { theme } from "../../../helper/variables";

export type MatchScoreData = {
  date: Date;
  team1ID: String;
  team2ID: String;
  isTeam1Win: boolean;
  isMatchEnd: boolean;
  team1Name: String;
  team2Name: String;
  team1LogoURL: string;
  team2LogoURL: string;
  matchID: String;
  team1Score: number;
  team2Score: number;
  event: String;
  eventID: String;
  game: String;
  gameID: String;
  valueOfMatches: number;
  matchType: String;
};

export interface IMatchScoreCard {
  data: MatchScoreData;
}

export function MatchScoreCard({ data }: IMatchScoreCard) {
  const currentdate: Date = new Date();

  return (
    <div className={theme({ styles: styles, name: "container" })}>
      <div className={styles.teamWrapper}>
        <img
          className={styles.teamLogo}
          src={data.team1LogoURL}
          alt={`${data.team1Name} Logo`}
        />
        <a className={theme({ styles: styles, name: "teamTitle" })}>
          {data.team1Name}
        </a>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <a
            className={theme({ styles: styles, name: "contentTitle" })}
          >{`Bo${data.valueOfMatches}`}</a>
          {currentdate >= data.date ? (
            <div className={styles.scoreWrapper}>
              <a
                className={`${theme({
                  styles: styles,
                  name: "scoreTitle",
                })} ${
                  data.isTeam1Win && data.isMatchEnd
                    ? theme({ styles: styles, name: "winningScore" })
                    : ""
                }`}
              >
                {data.team1Score}
              </a>
              <a className={theme({ styles: styles, name: "scoreTitle" })}>:</a>
              <a
                className={`${theme({ styles: styles, name: "scoreTitle" })} ${
                  !data.isTeam1Win && data.isMatchEnd
                    ? theme({ styles: styles, name: "winningScore" })
                    : ""
                }`}
              >
                {data.team2Score}
              </a>
            </div>
          ) : (
            ""
          )}
          <a className={theme({ styles: styles, name: "contentTitle" })}>
            {data.matchType}
          </a>
        </div>
      </div>
      <div className={styles.teamWrapper}>
        <img
          className={styles.teamLogo}
          src={data.team2LogoURL}
          alt={`${data.team2Name} Logo`}
        />
        <a className={theme({ styles: styles, name: "teamTitle" })}>
          {data.team2Name}
        </a>
      </div>
    </div>
  );
}
