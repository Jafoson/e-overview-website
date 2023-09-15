import styles from "./SideScroll.module.scss";
import Event_card from "../cards/Events/Event_card";

export type EventInformationData = {
  gameName: string;
  imageURL: string;
  name: string;
  id: string;
};

const events: Array<EventInformationData> = [
  {
    gameName: "League of Legends",
    imageURL:
      "https://media.discordapp.net/attachments/1134234924170358864/1139601790480949390/image.png?width=340&height=340",
    name: "Prime League",
    id: "6738292",
  },
  {
    gameName: "Valorant",
    imageURL:
      "https://cdn.discordapp.com/attachments/1134234924170358864/1139601831597707304/image.png",
    name: "VCT Masters",
    id: "32978781",
  },
  {
    gameName: "League of Legends",
    imageURL:
      "https://media.discordapp.net/attachments/1134234924170358864/1139601790480949390/image.png?width=340&height=340",
    name: "Prime League",
    id: "6738292",
  },
  {
    gameName: "Valorant",
    imageURL:
      "https://cdn.discordapp.com/attachments/1134234924170358864/1139601831597707304/image.png",
    name: "VCT Masters",
    id: "32978781",
  },
  {
    gameName: "League of Legends",
    imageURL:
      "https://media.discordapp.net/attachments/1134234924170358864/1139601790480949390/image.png?width=340&height=340",
    name: "Prime League",
    id: "6738292",
  },
  {
    gameName: "Valorant",
    imageURL:
      "https://cdn.discordapp.com/attachments/1134234924170358864/1139601831597707304/image.png",
    name: "VCT Masters und ich mag Pudding",
    id: "32978781",
  },
];

interface ISlideScroll {
  eventInformationData?: Array<EventInformationData>;
}

export default function SideScroll({ eventInformationData }: ISlideScroll) {
  eventInformationData = events;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {eventInformationData?.map((event) => {
          return <Event_card event={event} />;
        })}
      </div>
    </div>
  );
}
