
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Match_card from "../components/cards/Matches/Match_card.tsx";
import App from "../App.tsx";
// import TextButton from "../components/Buttons.tsx";
const testdata = {teamwrappen:
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
    matchID: "blau"}
const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Match_card">
                <Match_card data={testdata
                    }/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            {/*<ComponentPreview path="/TextButton">*/}
            {/*    /!*<TextButton/>*!/*/}
            {/*</ComponentPreview>*/}
        </Previews>
    );
};

export default ComponentPreviews;