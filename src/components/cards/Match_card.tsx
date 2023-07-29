import styles from "./Match_card.module.scss";
import { theme } from "../helper/variables";
import { NavigateFunction, useNavigate } from "react-router-dom";

export type MatchData = {
  teamID: string;
  team2ID: string;
  eventID: string;
  gameID: string;
  matchID: string;
  teamwrappen: string;
  team2wrapper: string;
  match_day: string;
  match_time: string;
  teamname: string;
  teamname2: string;
  teamscore: number;
  team2score: number;
  match_type: string;
  event: string;
  game: string;
};

export interface MatchCardProps {
  data: MatchData;
}

export default function Match_card({ data }: MatchCardProps) {
  data.matchID = "67637";
  const navigate = useNavigate();
  return (
    <div className={theme({ styles: styles, name: "container" })}>
      <div
        className={styles.wrapper}
        onClick={() => navigate(`/matches/${data.matchID}`)}
      >
        <Team_Information
          data={{
            name: data.teamname,
            wrappen_url: data.teamwrappen,
            teamID: "Eintracht Spandau",
          }}
          navigate={navigate}
        />
        <Match_Information
          data={{
            gameID: "geilesGame",
            eventID: "geilesEvent",
            date: data.match_day,
            time: data.match_time,
            teamscore: data.teamscore,
            team2score: data.team2score,
            match_type: data.match_type,
            event: data.event,
            game: data.game,
          }}
          navigate={navigate}
        />
        <Team_Information
          data={{
            name: data.teamname2,
            wrappen_url: data.team2wrapper,
            teamID: "BIG",
          }}
          navigate={navigate}
        />
      </div>
    </div>
  );
}

type MatchInformationData = {
  gameID: string;
  eventID: string;
  date: string;
  time: string;
  teamscore: number;
  team2score: number;
  match_type: string;
  event: string;
  game: string;
};

interface MatchInformationProps {
  data: MatchInformationData;
  navigate: NavigateFunction;
}

function Match_Information({ data, navigate }: MatchInformationProps) {
  return (
    <div className={styles.match_wrapper}>
      <div className={styles.match_information_wrapper}>
        <div className={theme({ styles: styles, name: "text" })}>
          {String(data.date)}
        </div>
        <div
          className={`${theme({ styles: styles, name: "text" })} ${
            styles.bold
          }`}
        >
          {String(data.time)} Uhr
        </div>
      </div>
      <div className={styles.match_score_wrapper}>
        <div className={theme({ styles: styles, name: "score" })}>
          {data.teamscore}
        </div>
        <div className={theme({ styles: styles, name: "match_type" })}>
          {data.match_type}
        </div>
        <div className={theme({ styles: styles, name: "winning_score" })}>
          {data.team2score}
        </div>
      </div>
      <div className={styles.match_information_wrapper}>
        <div
          className={theme({ styles: styles, name: "text" })}
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/events/${data.eventID}`);
          }}
        >
          {data.event}
        </div>
        <div
          className={theme({ styles: styles, name: "text" })}
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/games/${data.gameID}`);
          }}
        >
          {data.game}
        </div>
      </div>
    </div>
  );
}

type TeamData = {
  wrappen_url: string;
  name: string;
  teamID: string;
};

interface TeamProps {
  data: TeamData;
  navigate: NavigateFunction;
}

function Team_Information({ data, navigate }: TeamProps) {
  return (
    <div className={styles.teamlogo_wrapper}>
      <img
        onClick={(event) => {
          event.stopPropagation();
          navigate(`/team/${data.teamID}`);
        }}
        className={styles.wrappen}
        src={data.wrappen_url}
        alt={`${data.name} Logo`}
      />
      <div
        className={theme({ styles: styles, name: "teamname" })}
        onClick={(event) => {
          event.stopPropagation();
          navigate(`/team/${data.teamID}`);
        }}
      >
        {data.name}
      </div>
    </div>
  );
}
