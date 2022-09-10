import styles from "./Score.module.css";
export const Score = (props) => {
  let { team1, team2, score, status, con, head, image1, image2 } = props.info;
  let theme = props.theme;
  return (
    <div
      className={styles.scorebox}
      style={
        theme === "light"
          ? null
          : {
              backgroundColor: "#1d1e1f",
              color: "white",
              border: "1px solid #2b2c2d",
            }
      }
    >
      <div className={styles.header}>
        <p
          style={
            theme === "light"
              ? null
              : { backgroundColor: "#1d1e1f", color: "white" }
          }
        >
          {team1} VS {team2}
        </p>
        <h1
          style={
            theme === "light"
              ? null
              : { backgroundColor: "#1d1e1f", color: "white" }
          }
        >
          {head}
        </h1>
      </div>
      <hr />

      <div className={styles.conten}>
        <p
          style={
            theme === "light"
              ? null
              : { backgroundColor: "#1d1e1f", color: "white" }
          }
        >
          LIVES - Updates Only{" "}
        </p>
        <div>
          <img
            style={{ width: "20px", display: "inline" }}
            src={image1}
            alt="hy"
          />{" "}
          <h1
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
          >
            {team1} <span>{score}</span>
          </h1>
        </div>
        <div>
          <img style={{ width: "20px" }} src={image2} alt="hy" />{" "}
          <h2
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
          >
            {team2}
          </h2>
        </div>
        <h3
          style={
            theme === "light"
              ? null
              : { backgroundColor: "#1d1e1f", color: "white" }
          }
        >
          {status}
        </h3>
      </div>
      <hr />
      <div className={styles.foot}>
        <p
          style={
            theme === "light"
              ? null
              : { backgroundColor: "#1d1e1f", color: "white" }
          }
        >
          {con}
        </p>
      </div>
    </div>
  );
};
