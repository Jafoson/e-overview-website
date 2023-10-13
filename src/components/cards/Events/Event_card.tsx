import styles from "./Event-card.module.scss";
import { EventInformationData } from "../../Side_scrolls/SideScroll";
import { theme } from "../../../helper/variables";

interface IEventCard {
  event: EventInformationData;
}

export default function Event_card({ event }: IEventCard) {
  return (
    <div className={theme({ styles: styles, name: "wrapper" })}>
      <div className={theme({ styles: styles, name: "container" })}>
        <img
          className={theme({ styles: styles, name: "logo" })}
          src={event.imageURL}
          alt={`${event.name} Logo`}
          about={`alle Rechte des Logos von ${event.name} gehören ausschließlich ${event.name}`}
        />

        <div className={theme({ styles: styles, name: "titlewrapper" })}>
          <h1 className={theme({ styles: styles, name: "title" })}>
            {event.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
