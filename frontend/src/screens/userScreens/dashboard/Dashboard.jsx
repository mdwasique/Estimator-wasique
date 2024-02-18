import styles from "./dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>NAVBAR</header>
      <div style={{ display: "flex" }}>
        <aside className={styles.sidebar}>SIDEBAR</aside>
        <main className={styles.main}>MAINREA</main>
      </div>
    </div>
  );
}

export default Dashboard;
