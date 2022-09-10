import * as React from "react";
import { TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { Tab } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./LivePage.css";

const LiveMatchData = [
  {
    id: 1,
    team1: "PK",
    team2: "BD",
    team1score: 179,
    team2score: 181,
  },
  {
    id: 2,
    team1: "PK",
    team2: "ZA",
    team1score: 174,
    team2score: 114,
  },
  {
    id: 3,
    team1: "PK",
    team2: "BD",
    team1score: 135,
    team2score: 140,
  },
  {
    id: 4,
    team1: "PK",
    team2: "ZA",
    team1score: 149,
    team2score: 178,
  },
  {
    id: 5,
    team1: "PK",
    team2: "LK",
    team1score: 142,
    team2score: 161,
  },
  {
    id: 6,
    team1: "NP",
    team2: "IE",
    team1score: 170,
    team2score: 120,
  },
  {
    id: 7,
    team1: "NP",
    team2: "ZA",
    team1score: 120,
    team2score: 135,
  },
  {
    id: 8,
    team1: "PK",
    team2: "ZA",
    team1score: 147,
    team2score: 149,
  },
  {
    id: 9,
    team1: "PK",
    team2: "IE",
    team1score: 141,
    team2score: 135,
  },
  {
    id: 10,
    team1: "PK",
    team2: "ZA",
    team1score: 109,
    team2score: 181,
  },
  {
    id: 11,
    team1: "AU",
    team2: "IE",
    team1score: 113,
    team2score: 140,
  },
  {
    id: 12,
    team1: "PK",
    team2: "LK",
    team1score: 103,
    team2score: 148,
  },
  {
    id: 13,
    team1: "ZW",
    team2: "ZA",
    team1score: 178,
    team2score: 194,
  },
  {
    id: 14,
    team1: "PK",
    team2: "IE",
    team1score: 176,
    team2score: 160,
  },
  {
    id: 15,
    team1: "NZ",
    team2: "LK",
    team1score: 171,
    team2score: 173,
  },
  {
    id: 16,
    team1: "NZ",
    team2: "IE",
    team1score: 110,
    team2score: 140,
  },
  {
    id: 17,
    team1: "PK",
    team2: "LK",
    team1score: 162,
    team2score: 163,
  },
  {
    id: 18,
    team1: "PK",
    team2: "ZA",
    team1score: 118,
    team2score: 188,
  },
  {
    id: 19,
    team1: "AU",
    team2: "ZA",
    team1score: 103,
    team2score: 142,
  },
  {
    id: 20,
    team1: "NZ",
    team2: "LK",
    team1score: 195,
    team2score: 160,
  },
  {
    id: 21,
    team1: "PK",
    team2: "ZA",
    team1score: 191,
    team2score: 120,
  },
  {
    id: 22,
    team1: "ZW",
    team2: "IE",
    team1score: 130,
    team2score: 129,
  },
  {
    id: 23,
    team1: "PK",
    team2: "ZA",
    team1score: 194,
    team2score: 134,
  },
  {
    id: 24,
    team1: "PK",
    team2: "IE",
    team1score: 161,
    team2score: 158,
  },
  {
    id: 25,
    team1: "PK",
    team2: "ZA",
    team1score: 137,
    team2score: 190,
  },
  {
    id: 26,
    team1: "PK",
    team2: "HU",
    team1score: 130,
    team2score: 119,
  },
  {
    id: 27,
    team1: "PK",
    team2: "LK",
    team1score: 187,
    team2score: 101,
  },
  {
    id: 28,
    team1: "AU",
    team2: "IE",
    team1score: 164,
    team2score: 106,
  },
  {
    id: 29,
    team1: "PK",
    team2: "LK",
    team1score: 155,
    team2score: 107,
  },
  {
    id: 30,
    team1: "PK",
    team2: "ZA",
    team1score: 187,
    team2score: 135,
  },
  {
    id: 31,
    team1: "PK",
    team2: "BD",
    team1score: 129,
    team2score: 135,
  },
  {
    id: 32,
    team1: "PK",
    team2: "ZA",
    team1score: 159,
    team2score: 183,
  },
  {
    id: 33,
    team1: "NZ",
    team2: "ZA",
    team1score: 129,
    team2score: 184,
  },
  {
    id: 34,
    team1: "PK",
    team2: "ZA",
    team1score: 188,
    team2score: 110,
  },
  {
    id: 35,
    team1: "PK",
    team2: "ZA",
    team1score: 121,
    team2score: 190,
  },
  {
    id: 36,
    team1: "PK",
    team2: "BD",
    team1score: 177,
    team2score: 123,
  },
  {
    id: 37,
    team1: "NP",
    team2: "ZA",
    team1score: 122,
    team2score: 182,
  },
  {
    id: 38,
    team1: "ZW",
    team2: "IE",
    team1score: 195,
    team2score: 126,
  },
  {
    id: 39,
    team1: "PK",
    team2: "IE",
    team1score: 117,
    team2score: 143,
  },
  {
    id: 40,
    team1: "AU",
    team2: "ZA",
    team1score: 100,
    team2score: 182,
  },
  {
    id: 41,
    team1: "AU",
    team2: "ZA",
    team1score: 135,
    team2score: 132,
  },
  {
    id: 42,
    team1: "NZ",
    team2: "LK",
    team1score: 107,
    team2score: 197,
  },
  {
    id: 43,
    team1: "NZ",
    team2: "ZA",
    team1score: 156,
    team2score: 200,
  },
  {
    id: 44,
    team1: "PK",
    team2: "ZA",
    team1score: 196,
    team2score: 140,
  },
  {
    id: 45,
    team1: "PK",
    team2: "IE",
    team1score: 183,
    team2score: 155,
  },
  {
    id: 46,
    team1: "PK",
    team2: "IE",
    team1score: 200,
    team2score: 127,
  },
  {
    id: 47,
    team1: "NZ",
    team2: "LK",
    team1score: 137,
    team2score: 174,
  },
  {
    id: 48,
    team1: "PK",
    team2: "IE",
    team1score: 102,
    team2score: 137,
  },
  {
    id: 49,
    team1: "PK",
    team2: "ZA",
    team1score: 139,
    team2score: 170,
  },
  {
    id: 50,
    team1: "NZ",
    team2: "IE",
    team1score: 150,
    team2score: 188,
  },
  {
    id: 51,
    team1: "NZ",
    team2: "ZA",
    team1score: 193,
    team2score: 101,
  },
  {
    id: 52,
    team1: "NZ",
    team2: "IE",
    team1score: 115,
    team2score: 157,
  },
  {
    id: 53,
    team1: "ZW",
    team2: "ZA",
    team1score: 141,
    team2score: 133,
  },
  {
    id: 54,
    team1: "PK",
    team2: "ZA",
    team1score: 127,
    team2score: 124,
  },
  {
    id: 55,
    team1: "NP",
    team2: "IE",
    team1score: 183,
    team2score: 112,
  },
  {
    id: 56,
    team1: "PK",
    team2: "IE",
    team1score: 184,
    team2score: 147,
  },
  {
    id: 57,
    team1: "ZW",
    team2: "LK",
    team1score: 109,
    team2score: 126,
  },
  {
    id: 58,
    team1: "PK",
    team2: "BD",
    team1score: 174,
    team2score: 155,
  },
  {
    id: 59,
    team1: "NP",
    team2: "HU",
    team1score: 172,
    team2score: 191,
  },
  {
    id: 60,
    team1: "PK",
    team2: "ZA",
    team1score: 196,
    team2score: 155,
  },
  {
    id: 61,
    team1: "PK",
    team2: "ZA",
    team1score: 169,
    team2score: 189,
  },
  {
    id: 62,
    team1: "NP",
    team2: "HU",
    team1score: 162,
    team2score: 192,
  },
  {
    id: 63,
    team1: "NZ",
    team2: "BD",
    team1score: 168,
    team2score: 173,
  },
  {
    id: 64,
    team1: "NZ",
    team2: "HU",
    team1score: 105,
    team2score: 115,
  },
  {
    id: 65,
    team1: "ZW",
    team2: "ZA",
    team1score: 183,
    team2score: 147,
  },
  {
    id: 66,
    team1: "ZW",
    team2: "IE",
    team1score: 171,
    team2score: 104,
  },
  {
    id: 67,
    team1: "PK",
    team2: "IE",
    team1score: 176,
    team2score: 131,
  },
  {
    id: 68,
    team1: "NP",
    team2: "BD",
    team1score: 138,
    team2score: 141,
  },
  {
    id: 69,
    team1: "NP",
    team2: "BD",
    team1score: 163,
    team2score: 183,
  },
  {
    id: 70,
    team1: "NZ",
    team2: "IE",
    team1score: 186,
    team2score: 185,
  },
  {
    id: 71,
    team1: "PK",
    team2: "BD",
    team1score: 186,
    team2score: 161,
  },
  {
    id: 72,
    team1: "PK",
    team2: "HU",
    team1score: 151,
    team2score: 161,
  },
  {
    id: 73,
    team1: "PK",
    team2: "ZA",
    team1score: 122,
    team2score: 163,
  },
  {
    id: 74,
    team1: "PK",
    team2: "ZA",
    team1score: 160,
    team2score: 126,
  },
  {
    id: 75,
    team1: "PK",
    team2: "ZA",
    team1score: 107,
    team2score: 145,
  },
  {
    id: 76,
    team1: "PK",
    team2: "BD",
    team1score: 109,
    team2score: 158,
  },
  {
    id: 77,
    team1: "PK",
    team2: "BD",
    team1score: 188,
    team2score: 189,
  },
  {
    id: 78,
    team1: "ZW",
    team2: "BD",
    team1score: 106,
    team2score: 115,
  },
  {
    id: 79,
    team1: "PK",
    team2: "IE",
    team1score: 196,
    team2score: 115,
  },
  {
    id: 80,
    team1: "NZ",
    team2: "ZA",
    team1score: 137,
    team2score: 177,
  },
  {
    id: 81,
    team1: "NP",
    team2: "IE",
    team1score: 104,
    team2score: 167,
  },
  {
    id: 82,
    team1: "ZW",
    team2: "IE",
    team1score: 116,
    team2score: 180,
  },
  {
    id: 83,
    team1: "NP",
    team2: "ZA",
    team1score: 174,
    team2score: 181,
  },
  {
    id: 84,
    team1: "PK",
    team2: "ZA",
    team1score: 144,
    team2score: 113,
  },
  {
    id: 85,
    team1: "PK",
    team2: "LK",
    team1score: 189,
    team2score: 162,
  },
  {
    id: 86,
    team1: "PK",
    team2: "ZA",
    team1score: 150,
    team2score: 148,
  },
  {
    id: 87,
    team1: "PK",
    team2: "ZA",
    team1score: 159,
    team2score: 157,
  },
  {
    id: 88,
    team1: "PK",
    team2: "ZA",
    team1score: 127,
    team2score: 131,
  },
  {
    id: 89,
    team1: "PK",
    team2: "IE",
    team1score: 103,
    team2score: 189,
  },
  {
    id: 90,
    team1: "ZW",
    team2: "IE",
    team1score: 188,
    team2score: 173,
  },
  {
    id: 91,
    team1: "PK",
    team2: "LK",
    team1score: 156,
    team2score: 174,
  },
  {
    id: 92,
    team1: "AU",
    team2: "ZA",
    team1score: 140,
    team2score: 121,
  },
  {
    id: 93,
    team1: "ZW",
    team2: "ZA",
    team1score: 195,
    team2score: 124,
  },
  {
    id: 94,
    team1: "PK",
    team2: "LK",
    team1score: 103,
    team2score: 145,
  },
  {
    id: 95,
    team1: "ZW",
    team2: "ZA",
    team1score: 143,
    team2score: 186,
  },
  {
    id: 96,
    team1: "PK",
    team2: "ZA",
    team1score: 149,
    team2score: 114,
  },
  {
    id: 97,
    team1: "PK",
    team2: "ZA",
    team1score: 119,
    team2score: 102,
  },
  {
    id: 98,
    team1: "PK",
    team2: "IE",
    team1score: 111,
    team2score: 193,
  },
  {
    id: 99,
    team1: "PK",
    team2: "ZA",
    team1score: 108,
    team2score: 151,
  },
  {
    id: 100,
    team1: "PK",
    team2: "ZA",
    team1score: 161,
    team2score: 190,
  },
];
const LivePage = () => {
  const [value, setValue] = React.useState("one");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="MainDiv_live">
      <img
        src="https://tpc.googlesyndication.com/simgad/4142572825207069660?"
        alt="advertisement"
      />
      <img
        src="https://tpc.googlesyndication.com/simgad/2556233134448649851?"
        alt="advertisement"
      />
      <div className="container_liveDiv">
        <div>
          {/* <Box
            display="flex"
            sx={{ width: "100%", margin: "0px" }}
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <Tabs
              value={value}
              onChange={handleChangeTab}
              aria-label="wrapped label tabs example"
            >
              <Tab
                value="one"
                label="Live"
                style={{ width: "33%", fontWeight: "700" }}
              />
              <Tab
                value="two"
                label="Upcoming "
                style={{ width: "33%", fontWeight: "700" }}
              />
              <Tab
                value="three"
                label="Results"
                style={{ width: "33%", fontWeight: "700" }}
              />
            </Tabs>
          </Box> */}
          <Tabs bg="white" borderRadius="10px">
            <TabList>
              <Tab w="33%">Live</Tab>
              <Tab w="33%">Upcoming</Tab>
              <Tab w="33%">Results</Tab>
            </TabList>
          </Tabs>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <div style={{ borderBottom: "1px solid gray", padding: "0 15px" }}>
              <h2 style={{ padding: "15px", fontWeight: "700" }}>Top Events</h2>
            </div>
            <div className="Container_liveMatch">
              {LiveMatchData.map((ele) => {
                let src1 = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${ele.team1}.svg`;
                let src2 = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${ele.team2}.svg`;
                let regionNames = new Intl.DisplayNames(["en"], {
                  type: "region",
                });
                let team1Name = regionNames.of(ele.team1);
                let team2Name = regionNames.of(ele.team2);
                let score = ele.team2score;
                return (
                  <div key={ele.id} className="smallDivMatch">
                    <p style={{ fontWeight: "700", color: "crimson" }}>
                      Result
                    </p>
                    <p>
                      {ele.id}th Match, {ele.team1} vs {ele.team2}
                    </p>

                    <div>
                      <div>
                        <img src={src1} alt="flag" className="flagClass" />
                        <p>{team1Name}</p>
                      </div>
                      <div>
                        {score + 1}/{Math.floor(Math.random() * 6)}
                      </div>
                    </div>
                    <div>
                      <div>
                        <img src={src2} alt="flag" className="flagClass" />
                        <p>{team2Name}</p>
                      </div>
                      <div>
                        {score}/{Math.floor(Math.random() * 6)}
                      </div>
                    </div>
                    <p
                      style={{
                        borderBottom: "1px solid wheat",
                        padding: "8px 0px",
                      }}
                    >
                      {team1Name} Won the Match
                    </p>
                    <p>Series Home</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="Advertisement_container">
          <img
            src="https://tpc.googlesyndication.com/simgad/605161044816525343?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/14828744798620350827?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/12885726672715156796?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/3023903939702895094?"
            alt="Advertisement "
            className="Advertisement_container"
          />
          <div></div>
          <img
            src="https://tpc.googlesyndication.com/simgad/14765500984849215753?"
            alt="Advertisement "
            className="Advertisement_container"
          />
        </div>
      </div>
    </div>
  );
};

export default LivePage;
