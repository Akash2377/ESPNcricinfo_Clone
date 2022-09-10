import styles from "./footer.module.css";
import { FaAngleRight } from "react-icons/fa";
export const Footer = ({ theme }) => {
  return (
    <>
      {" "}
      <div
        style={theme === "light" ? null : { backgroundColor: "black" }}
        className={styles.footer}
      >
        <div
          style={
            theme === "light"
              ? null
              : {
                  backgroundColor: "#1d1e1f",
                  color: "white",
                  border: "1px solid #2b2c2d",
                }
          }
          className={styles.footmain}
        >
          <div
            className={styles.keyseries}
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>Key Series</h1>
            <hr
              style={
                theme === "light"
                  ? { width: "100%" }
                  : {
                      backgroundColor: "#2b2c2d",
                      color: "#2b2c2d",
                      width: "100%",
                    }
              }
            />
            <h1> Asia Cup</h1> <h1>England vIndia "(W)"</h1>
            <h1> Duleep Trophy</h1> <h1>IND A - NZ A</h1>
            <h1>England v South Africs</h1> <h1>Australia v Zimbabwe</h1>
            <h1>Australia v New Zealand</h1> <h1>The Hundred "(M)"</h1>
            <h1>The Hundred (W)</h1> <h1>County Divl</h1>
            <h1>County Div2</h1> <h1>CPl 2022</h1>
            <h1>Women's CPL 2022</h1> <h1>Test Championship</h1>
            <h1>Women Championship</h1>
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              Quick Links
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>Players in focus</h1>
            <h1>T20 Time Out</h1>
            <h1>T20 Time Out Hindi</h1>
            <h1>ICC Rankings</h1>
            <h1>Fantasy Pick</h1>
            <h1>Haan Ya Naa</h1>
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              ESPncricinfo Apps
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>Android App</h1>
            <h1>IOS App</h1>
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              Follow ESPNcricinfo
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>Instagram</h1>
            <h1>Twitter</h1>
            <h1>Facebook</h1>
            <h1>Youtube</h1>
          </div>
          <div
            style={
              theme === "light"
                ? null
                : { backgroundColor: "#1d1e1f", color: "white" }
            }
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "700", marginTop: "10px" }}>
              ESPncricinfo Sites
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>The Cricket Monthly</h1>
            <h1>ESPN</h1>
          </div>
        </div>
      </div>
      <div
        style={
          theme === "light"
            ? null
            : { backgroundColor: "#1d1e1f", color: "white" }
        }
        className={styles.contact}
      >
        <h1>
          Terms of Use | Private policy | Interest-Based Ads | Addendum to the
          Global Private Policy | Feedback
        </h1>
        <h2>2022 ESPn Sports Media Ltd. All rights reserved</h2>
      </div>
    </>
  );
};
