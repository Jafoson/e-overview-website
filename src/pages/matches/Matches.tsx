import { useContext } from "react";
import { titleContext } from "../../contexts/TitleContext";

export default function Matches() {
  const getTitleContext = useContext(titleContext);
  getTitleContext.switchTitle("hallöchen");
  return <div>Matches</div>;
}
