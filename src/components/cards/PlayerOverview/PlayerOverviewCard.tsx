import styles from "./PlayerOverviewCard.module.scss";
import { theme } from "../../../helper/variables";
import playerPlaceHolder from "../../../assets/placeholder/placeholder_player.svg";

interface IPlayerOverviewCard {
  playersLeft: Array<Player>;
  playersRight: Array<Player>;
}

export default function PlayerOverviewCard({
  playersLeft,
  playersRight,
}: IPlayerOverviewCard) {
  return (
    <div className={styles.container}>
      <h2 className={theme({ styles: styles, name: "title" })}>Players</h2>
      <div className={theme({ styles: styles, name: "wrapper" })}>
        <TeamPlayersList players={playersLeft} />
        <TeamPlayersList players={playersRight} isLeft={false} />
      </div>
    </div>
  );
}

export type Player = {
  name: string;
  role: string;
  id: string;
  imgUrl: string;
};

interface ITeamPlayersList {
  isLeft?: boolean;
  players: Array<Player>;
}

export function TeamPlayersList({ isLeft = true, players }: ITeamPlayersList) {
  return (
    <div className={styles.list}>
      {players.map((player) => {
        return <PlayerData isLeft={isLeft} player={player} />;
      })}
    </div>
  );
}
interface IPlayerData {
  isLeft?: boolean;
  player: Player;
}

export function PlayerData({ isLeft = true, player }: IPlayerData) {
  return (
    <div className={isLeft ? styles["leftPlayer"] : styles["rightPlayer"]}>
      <img
        className={styles.playerImage}
        src={player.imgUrl != "" ? player.imgUrl : playerPlaceHolder}
        alt={`${player.name}`}
      />
      <div className={styles.playerData}>
        <a
          className={`${theme({ styles: styles, name: "playerName" })} ${
            isLeft ? styles.left : styles.right
          }`}
        >
          {player.name}
        </a>
        <a
          className={`${theme({ styles: styles, name: "playerRole" })} ${
            isLeft ? styles.left : styles.right
          }`}
        >
          {player.role}
        </a>
      </div>
    </div>
  );
}
