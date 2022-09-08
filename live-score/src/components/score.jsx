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
const intiStateBowler=[
{
        bowlId:7710,
        bowlName:"Mitchell Starc",
        bowlMaidens:0,
        bowlNoballs:0,
        bowlOvs:6.5,
        bowlRuns:12,
        bowlWides:1,
        bowlWkts:2,
        bowlEcon:1.8
      }
]

const Div = styled.div`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  justify-content: space-between;
  gap: 20px;
  align-items:left;
  padding:10px;
  width:70%;
`;
export const Score = () => {
  const [liveScore, setLiveScore] = React.useState(intiStateBatsman);
  const [bowler,setBowler]=React.useState(intiStateBowler);
  let [commentry, setComm] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://www.cricbuzz.com/api/cricket-match/commentary/49677")
      .then((res) => res.json())
      .then((res) => {
        setLiveScore(res.commentaryList[0].batsmanStriker);
        setComm(commentry => [...commentry, res.commentaryList[0].commText])
        setBowler(res.commentaryList[0].bowlerStriker)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);


  let { batName, batRuns, batBalls, batFours, batSixes, batStrikeRate } =
    liveScore;

    let{bowlName,bowlOvs,bowlMaidens,bowlRuns,bowlWkts,bowlEcon,bowlNoballs,bowlWides}=bowler

  if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div>
        <TableContainer>
          <Table size="sm">
            <Thead>
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
                <Td>{batName}*</Td>
                <Td>{batRuns}</Td>
                <Td>{batBalls}</Td>
                <Td>{batFours}</Td>
                <Td>{batSixes}</Td>
                <Td>{batStrikeRate}</Td>
              </Tr>
              <Tr>
                <Td>Rohit Sharma</Td>
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
        <TableContainer>
          <Table size="sm">
            <Thead>
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
                <Td>{bowlName}*</Td>
                <Td>{bowlOvs}</Td>
                <Td>{bowlMaidens}</Td>
                <Td>{bowlRuns}</Td>
                <Td>{bowlWkts}</Td>
                <Td>{bowlEcon}</Td>
                <Td>{bowlWides}</Td>
                <Td>{bowlNoballs}</Td>

              </Tr>
              <Tr>
                <Td>Jasprit Bumrah</Td>
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
        <Div>{commentry}</Div>
        <Commentary/>
      </div>
    );
  }
};
