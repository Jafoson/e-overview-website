import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./Alert.module.scss";
import { alertContext, IAlertComponent } from "../../contexts/AlertContext.tsx";
import { useContext } from "react";

export function Alert({ type, message }: IAlertComponent) {
  let iconClass = "";
  let title = "";
  let color = "";

  switch (type) {
    case "Error":
      iconClass = "teenyicons:x-circle-solid";
      title = "Error";
      color = "#F44336";
      break;
    case "Success":
      iconClass = "material-symbols:check-circle";
      title = "Success";
      color = "#53A76C";
      break;
    case "Warning":
      iconClass = "ion:warning";
      title = "Warning";
      color = "#D09734";
      break;
    case "Info":
      iconClass = "material-symbols:info";
      title = "Info";
      color = "#5398A7";
      break;
    default:
      iconClass = "oi:ban";
      title = "Error";
      color = "#F44336";
  }
  const getAlertContext = useContext(alertContext);
  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <div className={styles.contentWrapper}>
        <Icon icon={iconClass} className={styles.typeIcon} />
        <div className={styles.container}>
          <h5>{title}</h5>
          <p>{message}</p>
        </div>
      </div>
      <Icon
        icon={"bi:x"}
        className={styles.iconButton}
        onClick={() => {
          getAlertContext.setAlertShowStatus(false);
        }}
      />
    </div>
  );
}
