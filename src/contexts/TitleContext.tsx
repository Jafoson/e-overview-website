import { createContext, useState } from "react";

export const titleContext = createContext<any>(null);

//TODO change to a other methode

export default function TitleProvider({ children }: any) {
  const [title, settheme] = useState<string>("untitled");

  function switchTitle(stitle: string) {
    settheme(stitle);
  }

  return (
    <titleContext.Provider value={{ title, switchTitle }}>
      {children}
    </titleContext.Provider>
  );
}
