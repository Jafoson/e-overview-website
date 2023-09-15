import { useContext, useEffect } from "react";
import Match_card from "../../components/cards/Matches/Match_card";
import { titleContext } from "../../contexts/TitleContext";
import styles from "./Home.module.scss";
import { theme } from "../../components/helper/variables";
import { ImageSlider } from "../../components/intern_push_container/Home_Intern_Push";
import useScreenWidthDetector from "../../hook/useScreenWidthDetector";
import SideContent from "../../components/Side-Content/SideContent";
import SideScroll from "../../components/Side_scrolls/SideScroll";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Tournament Fox";
  }, []);

  const getTitleContext = useContext(titleContext);
  getTitleContext.switchTitle("Upcoming matches");

  const testdata = {
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
  };

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
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
    testdata,
  ];

  const slides = [
    {
      imageURL:
        "https://media.discordapp.net/attachments/1127012315913527347/1137129034321498153/f3a71b11-ad3a-4992-8f89-f48f8ae930f1.jpg?width=1122&height=1122",
      title: "Das große Primeleague Finale!!!",
      url: "baum",
      alt: "Das große Primeleague Finale!!!",
      buttonTitle: "Klick hier",
    },
    {
      imageURL:
        "https://media.discordapp.net/attachments/1127012315913527347/1137129156157644943/6b582de1-903c-4158-b974-fa046290dcd3.jpg?width=1122&height=1122",
      title: "Hier könnte dein Event stehen!",
      url: "baum",
      alt: "Hier könnte dein Event stehen!",
      buttonTitle: "Jetzt bewerben!",
    },
  ];
  const screenWidth = useScreenWidthDetector();
  return (
    <div className={styles.wrapper}>
      <div className={styles.m_overview_container}>
        <div className={styles.m_overview_content}>
          {screenWidth < 500 ? (
            <>
              <ImageSlider slides={slides} />
              <SideScroll />
              <div className={styles.titlewrapper}>
                <div className={theme({ styles: styles, name: "title" })}>
                  Upcoming matches
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {matchData.map((e) => {
            return <Match_card data={e} />;
          })}
        </div>
      </div>

      <hr className={theme({ styles: styles, name: "divider" })} />
      <SideContent>
        <div className={styles.intern}>
          <ImageSlider slides={slides} />
          <h1 className={theme({ styles: styles, name: "subtitle" })}>
            common Games
          </h1>
          <SideScroll />
          <h1 className={theme({ styles: styles, name: "subtitle" })}>
            common Events
          </h1>
          <SideScroll />
        </div>
      </SideContent>
    </div>
  );
}
