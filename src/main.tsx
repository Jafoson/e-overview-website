import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>

            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>

        </ThemeProvider>
    </React.StrictMode>
);
