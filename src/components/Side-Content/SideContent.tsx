import styles from "./SideContent.module.scss";

export default function SideContent({ children }: any) {
  return (
    <div className={styles.other_container}>
      <div className={styles.content_wrapper}>{children}</div>
    </div>
  );
}
