import styles from "./center.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getnews,
  getnewsloading,
  getnewerror,
} from "../../Redux/centrebox/action";
import { NavBox } from "../newsbox.jsx/newdiv";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Footer } from "../HomeFooter/Footer";
import { Fetchdata } from "../../Redux/centrebox/action";
import { RightNavBox } from "../righthand/rightnewdiv";
import { Newsmid } from "../newsmidbox/newsmid";
import { Score } from "../Scorebox/Score";
export const CenterBox = ({ theme }) => {
  const dispatch = useDispatch();
  const newsdisplay = useSelector((state) => state.news);
  let [arr1, setarr] = React.useState([]);
  const newsloading = useSelector((state) => state.loading);
  const newserror = useSelector((state) => state.error);

  React.useEffect(() => {
    dispatch(Fetchdata());
  }, []);

  // if(newsdisplay.length>4){
  // for(let i=0;i<4;i++){
  //   arr2[i]=newsdisplay[i];
  // }
  // }
  //  arr1=setarr(arr2)

  function getnewsdata() {
    dispatch(getnewsloading());
    fetch(`https://cricbuzz-cricket.p.rapidapi.com/news/v1/index`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bd73fbab72msh41aa8b1ae34d02fp1118fcjsnb86ef1d3cf9d",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return dispatch(getnews(res.storyList));
      })

      .catch((error) => dispatch(getnewerror()));
  }

  //console.log(newsdisplay,newserror,newsloading)
  return (
    <div
      style={
        theme === "light" ? null : { backgroundColor: "black", color: "black" }
      }
      className={styles.centerbox1}
    >
      <div>
        <img
          src="https://tpc.googlesyndication.com/simgad/16233217720762028300?"
          alt="Advertisment Logo"
        />
      </div>
      <div
        className={styles.midbox}
        style={
          theme === "light"
            ? null
            : { backgroundColor: "black", color: "black" }
        }
      >
        <div className={styles.leftbox}>
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
            className={styles.firstbox}
          >
            <img
              src="https://wassets.hscicdn.com/static/images/nlp-logo.svg"
              alt=""
            />

            <p>Which batter has the most 50+ scores in men's T20Is?</p>
            <button>
              {" "}
              <FaSearch /> Ask a question
            </button>
          </div>
          <div
            className={styles.keyseries}
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
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>Key Series</h1>
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
            <h1>
              {" "}
              <FaAngleRight color="#03a9f4" /> Asia Cup
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              England vIndia "(W)"
            </h1>
            <h1>
              {" "}
              <FaAngleRight color="#03a9f4" /> Duleep Trophy
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              IND A - NZ A
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              England v South Africs
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              Australia v Zimbabwe
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Australia v New Zealand
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              The Hundred "(M)"
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              The Hundred (W)
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              County Divl
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              County Div2
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              CPl 2022
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Women's CPL 2022
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              Test Championship
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Women Championship
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              CWC Super League
            </h1>{" "}
            <h1>
              <FaAngleRight color="#03a9f4" />
              -Future series
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              -Archives
            </h1>
          </div>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              Quick Links
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>
              <FaAngleRight color="#03a9f4" />
              Players in focus
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              T20 Time Out
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              T20 Time Out Hindi
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              ICC Rankings
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Fantasy Pick
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Haan Ya Naa
            </h1>
          </div>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              ESPncricinfo Apps
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>
              <FaAngleRight color="#03a9f4" />
              Android App
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              IOS App
            </h1>
          </div>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              Follow ESPNcricinfo
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>
              <FaAngleRight color="#03a9f4" />
              Instagram
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Twitter
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Facebook
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Youtube
            </h1>
          </div>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              ESPncricinfo Sites
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>
              <FaAngleRight color="#03a9f4" />
              The Cricket Monthly
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              ESPN
            </h1>
          </div>
        </div>
        <div
          className={styles.secbox}
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
          <img
            src="https://tpc.googlesyndication.com/simgad/17909822381541812721?"
            alt="adImage"
          />

          <img
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/345300/345311.6.jpg"
            alt="adimg"
          />
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
            className={styles.newsfeed}
          >
            <p>Well-rounded Afghanistan look to bounce back against Pakistan</p>
            <p>
              A win will take Pakistan closure to the final while Afghanistan
              will be keen to open their account in the Super 40's
            </p>
          </div>
          <hr />
          <Score
            info={{
              team1: "India A",
              team2: "New Zealand A",
              score: "(55ov) 201/5",
              status: "Day2 NZ choose to field",
              con: "Tom Bruce : free spirit who's found his identity ",
              head: "2ND FOUR-DAY GAME,HUBLI",
              image1:
                "https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
              image2:
                "https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg",
            }}
            theme={theme}
          />

          <div
            className={styles.threebox}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridRow: "1",
            }}
          >
            {newsdisplay.map((news) =>
              news.story === undefined ? (
                console.log(news)
              ) : (
                <RightNavBox
                  key={news.story.id}
                  theme={theme}
                  info={news.story}
                />
              )
            )}

            <div
              style={{
                border: "1px solid  #ebebeb",
                position: "absolute",
                width: "100%",
                top: "187px",
                padding: "0px",
              }}
            >
              <Newsmid theme={theme} />
            </div>
          </div>

          {newsdisplay.map((news) =>
            news.story === undefined ? (
              console.log(news)
            ) : (
              <NavBox key={news.story.id} theme={theme} info={news.story} />
            )
          )}
          {newsdisplay.map((news) =>
            news.story === undefined ? (
              console.log(news)
            ) : (
              <NavBox key={news.story.id} theme={theme} info={news.story} />
            )
          )}
        </div>
        <div className={styles.third}>
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
            className={styles.keyseries}
          >
            <h1 style={{ fontWeight: "500", marginTop: "10px" }}>
              News Headlines
            </h1>
            <hr style={{ width: "100%" }} />

            <h1>
              <FaAngleRight color="#03a9f4" />
              Rizwan is the new No.1 T20I batter{" "}
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              T20 WC:England call up Hales
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Asia Cup: Can India make the final?
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Kallis Joins Pretoria Capitals staff
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Pak recall Ameen for Asia Cup
            </h1>
            <h1>
              <FaAngleRight color="#03a9f4" />
              Did NZ take a backward?
            </h1>
          </div>
          <img
            src="https://tpc.googlesyndication.com/simgad/14828744798620350827?"
            alt="adImage"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/2819355493784373752?"
            alt="ad"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/11639078905771269026?"
            alt="ad"
          />
          {newsdisplay.map((news) =>
            news.story === undefined ? (
              console.log(news)
            ) : (
              <RightNavBox
                key={news.story.id}
                theme={theme}
                info={news.story}
              />
            )
          )}
          <img
            src="https://tpc.googlesyndication.com/simgad/14765500984849215753?"
            alt="g"
          />
        </div>
      </div>

      <Footer theme={theme} />
    </div>
  );
};
