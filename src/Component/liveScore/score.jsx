import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { NavbarLive } from "./navbar";
import { Commentary } from "./commentry";
import styled from "styled-components";
const intiStateBatsman = [
  {
    batBalls: 12,
    batDots: 7,
    batFours: 0,
    batId: 7662,
    batName: "Glenn Maxwell",
    batMins: 15,
    batRuns: 7,
    batSixes: 0,
    batStrikeRate: 58.33,
  },
];
const intiStateBowler = [
  {
    bowlId: 7710,
    bowlName: "Mitchell Starc",
    bowlMaidens: 0,
    bowlNoballs: 0,
    bowlOvs: 6.5,
    bowlRuns: 12,
    bowlWides: 1,
    bowlWkts: 2,
    bowlEcon: 1.8,
  },
];

const Div1 = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  justify-content: space-between;
  gap: 20px;
  text-align: left;
  padding: 10px;
  width: 100%;
`;
const Div = styled.div`
  justify-content: space-between;
  gap: 20px;
  align-items: left;
  width: 70%;
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  margin-top: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const ImgDiv = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 90%;
  margin-left: 10%;
`;

export const Score = () => {
  const [liveScore, setLiveScore] = React.useState(intiStateBatsman);
  const [bowler, setBowler] = React.useState(intiStateBowler);
  let [commentry, setComm] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://www.cricbuzz.com/api/cricket-match/commentary/38367")
      .then((res) => res.json())
      .then((res) => {
        setLiveScore(res.commentaryList[0].batsmanStriker);
        setComm((commentry) => [...commentry, res.commentaryList[0].commText]);
        setBowler(res.commentaryList[0].bowlerStriker);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let { batName, batRuns, batBalls, batFours, batSixes, batStrikeRate } =
    liveScore;

  let {
    bowlName,
    bowlOvs,
    bowlMaidens,
    bowlRuns,
    bowlWkts,
    bowlEcon,
    bowlNoballs,
    bowlWides,
  } = bowler;

  if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <>
        <NavbarLive />
        <MainDiv>
          <Div>
            <TableContainer mt="15px" w="100%">
              <Table size="sm">
                <Thead bg="#CECECE">
                  <Tr>
                    <Th>Batters</Th>
                    <Th>R</Th>
                    <Th>B</Th>
                    <Th>4s</Th>
                    <Th>6s</Th>
                    <Th>SR</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <b>{batName || "Virat Kohli"}*</b>
                    </Td>
                    <Td>{batRuns || 0}</Td>
                    <Td>{batBalls || 0}</Td>
                    <Td>{batFours || 0}</Td>
                    <Td>{batSixes || 0}</Td>
                    <Td>{batStrikeRate || 0}</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <b>Rohit Sharma</b>
                    </Td>
                    <Td>32</Td>
                    <Td>16</Td>
                    <Td>2</Td>
                    <Td>2</Td>
                    <Td>200</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <br />
            <br />
            <TableContainer maxW="100%">
              <Table size="sm">
                <Thead bg="#CECECE">
                  <Tr>
                    <Th>Bowlers</Th>
                    <Th>O</Th>
                    <Th>M</Th>
                    <Th>R</Th>
                    <Th>W</Th>
                    <Th>ECON</Th>
                    <Th>wd's</Th>
                    <Th>NO's</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <b>{bowlName || "Bhuvaneshwar Kumar"}*</b>
                    </Td>
                    <Td>{bowlOvs || 0}</Td>
                    <Td>{bowlMaidens || 0}</Td>
                    <Td>{bowlRuns || 0}</Td>
                    <Td>{bowlWkts || 0}</Td>
                    <Td>{bowlEcon || 0}</Td>
                    <Td>{bowlWides || 0}</Td>
                    <Td>{bowlNoballs || 0}</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <b>Jasprit Bumrah</b>
                    </Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>9</Td>
                    <Td>0</Td>
                    <Td>9.00</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Div1>{commentry}</Div1>
            <Commentary />
          </Div>
          <Div2>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_240/lsci/db/PICTURES/CMS/345600/345658.6.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/ind-vs-afg-asia-cup-2022-unshackled-virat-kohli-brings-the-joy-factor-back-to-his-batting-1333665"
                >
                  Unshackled Kohli brings the joy factor back to his batting
                </a>
              </b>
            </ImgDiv>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_240/esci/media/motion/2022/0908/dm_220908_INET_CRIC_asiacup_ind-afg_kohli_qatarairways_global/dm_220908_INET_CRIC_asiacup_ind-afg_kohli_qatarairways_global.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/afg-vs-ind-asia-cup-2022-virat-kohli-after-71st-century-time-away-from-game-taught-me-a-lot-1333657"
                >
                  Virat Kohli: 'Time away from game taught me a lot, when I came
                  back I wasn't desperate'
                </a>
              </b>
            </ImgDiv>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/345600/345664.4.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/reactions-to-kohli-s-ton-you-can-delay-class-but-you-can-t-deny-it-1333677"
                >
                  Reactions to Kohli's ton - 'You can delay class, but you can't
                  deny it'
                </a>
              </b>
            </ImgDiv>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/345500/345599.6.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/asia-cup-2022-afghanistan-can-learn-to-control-pressure-only-by-playing-top-teams-regularly-1333709"
                >
                  Ahmadzai: Afghanistan 'can learn to control pressure and
                  emotions' only by playing top teams regularly
                </a>
              </b>
            </ImgDiv>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/344100/344133.4.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/asia-cup-2022-one-year-after-taliban-takeover-afghanistan-is-still-living-and-loving-its-cricket-1330899"
                >
                  One year after Taliban takeover, Afghanistan is still living
                  and loving its cricket
                </a>
              </b>
            </ImgDiv>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/344600/344698.4.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/asia-cup-battles-babar-azam-takes-on-rashid-khan-and-virat-kohli-goes-up-against-wanindu-hasaranga-1329850"
                >
                  Asia Cup battles: Babar takes on Rashid, Kohli goes up against
                  Hasaranga
                </a>
              </b>
            </ImgDiv>
            <ImgDiv>
              <Img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/344600/344611.jpg"
                alt="virat1"
              />
              <b>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.espncricinfo.com/story/reactions-to-kohli-s-ton-you-can-delay-class-but-you-can-t-deny-it-1333677"
                >
                  The one that's been on hold - Mushfiqur vs Hardik
                </a>
              </b>
            </ImgDiv>
          </Div2>
        </MainDiv>
      </>
    );
  }
};
