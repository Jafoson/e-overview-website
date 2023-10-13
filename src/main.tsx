import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App.tsx";
import {ThemeProvider} from "./contexts/ThemeContext.tsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import AlertProvider from "./contexts/AlertContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <AlertProvider>


                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </AlertProvider>
        </ThemeProvider>
    </React.StrictMode>
);
