import React from "react";
import { NavbarLive } from "./navbar";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

export const ScoreCard = () => {
  return (
    <>
      <NavbarLive />
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">Australia Innings</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Batting</Th>
                    <Th></Th>
                    <Th>R</Th>
                    <Th>B</Th>
                    <Th>4s</Th>
                    <Th>6s</Th>
                    <Th>SR</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>David Warner</Td>
                    <Td>c Williamson b Hennry</Td>
                    <Td>5</Td>
                    <Td>11</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>45.55</Td>
                  </Tr>
                  <Tr>
                    <Td>Aaron Finch (c)</Td>
                    <Td>c Williamson b Hennry</Td>
                    <Td>0</Td>
                    <Td>5</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Steven Smith</Td>
                    <Td>c Boult b Southee</Td>
                    <Td>61</Td>
                    <Td>94</Td>
                    <Td>5</Td>
                    <Td>1</Td>
                    <Td>64.89</Td>
                  </Tr>
                  <Tr>
                    <Td>Marnus Labuschagne</Td>
                    <Td>lbw b Boult</Td>
                    <Td>5</Td>
                    <Td>12</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>41.86</Td>
                  </Tr>
                  <Tr>
                    <Td>Marcus Stoinis</Td>
                    <Td>lbw b Boult</Td>
                    <Td>0</Td>
                    <Td>6</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Alex Carey</Td>
                    <Td>st Latham b Satner</Td>
                    <Td>12</Td>
                    <Td>28</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>42.86</Td>
                  </Tr>
                  <Tr>
                    <Td>Glenn Maxwell</Td>
                    <Td>c Southee b Boult</Td>
                    <Td>25</Td>
                    <Td>50</Td>
                    <Td>1</Td>
                    <Td>1</Td>
                    <Td>50.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Sean Abott</Td>
                    <Td>c Satner b Henrry</Td>
                    <Td>7</Td>
                    <Td>15</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>46.66</Td>
                  </Tr>
                  <Tr>
                    <Td>Mitchell Starc</Td>
                    <Td>not out</Td>
                    <Td>5</Td>
                    <Td>12</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>44.89</Td>
                  </Tr>
                  <Tr>
                    <Td>Adam Zampa</Td>
                    <Td>lbw b Satner</Td>
                    <Td>12</Td>
                    <Td>12</Td>
                    <Td>2</Td>
                    <Td>0</Td>
                    <Td>100.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Josh Hazellwood</Td>
                    <Td>b Satner</Td>
                    <Td>1</Td>
                    <Td>5</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>20.00</Td>
                  </Tr>
                </Tbody>
              </Table>
              <br />
              <h3>
                Fall of wickets: 1-0 (Aaron Finch, 1.2 ov), 2-7 (David Warner,
                3.1 ov), 3-22 (Marnus Labuschagne, 6.4 ov), 4-26 (Marcus
                Stoinis, 8.3 ov), 5-54 (Alex Carey, 18.3 ov),
              </h3>
              <h3>
                6-103 (Glenn Maxwell, 32.5 ov), 7-111 (Sean Abbott, 35.5 ov),
                8-117 (Steven Smith, 36.3 ov)
              </h3>
              <br />
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Bowler</Th>
                    <Th>O</Th>
                    <Th>M</Th>
                    <Th>R</Th>
                    <Th>W</Th>
                    <Th>ECON.</Th>
                    <Th>WD</Th>
                    <Th>NB</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td size="md">Trent Boult</Td>
                    <Td>9.2</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>37</Td>
                    <Td>3.96</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Matt Henrry</Td>
                    <Td>9</Td>
                    <Td>0</Td>
                    <Td>3</Td>
                    <Td>25</Td>
                    <Td>2.77</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Tim Southee</Td>
                    <Td>10</Td>
                    <Td>0</Td>
                    <Td>1</Td>
                    <Td>39</Td>
                    <Td>3.9</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Mitchell Satner</Td>
                    <Td>8</Td>
                    <Td>0</Td>
                    <Td>3</Td>
                    <Td>23</Td>
                    <Td>2.87</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">James Neesham</Td>
                    <Td>7</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>22</Td>
                    <Td>3.14</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text as="b">NewZeland Innings</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Batting</Th>
                    <Th></Th>
                    <Th>R</Th>
                    <Th>B</Th>
                    <Th>4s</Th>
                    <Th>6s</Th>
                    <Th>SR</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Martin Guptil</Td>
                    <Td>c Finch b Strac</Td>
                    <Td>2</Td>
                    <Td>5</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>40.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Devon Conway</Td>
                    <Td>c Zampa b Hennry</Td>
                    <Td>5</Td>
                    <Td>20</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>20.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Kane Williamson (C)</Td>
                    <Td>lbw b Zampa</Td>
                    <Td>17</Td>
                    <Td>58</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>29.31</Td>
                  </Tr>
                  <Tr>
                    <Td>Tom Latham (Wk)</Td>
                    <Td>c Finch B Abott</Td>
                    <Td>0</Td>
                    <Td>3</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>00.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Daryll Mitchell</Td>
                    <Td>lbw b Zampa</Td>
                    <Td>10</Td>
                    <Td>31</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>32.26</Td>
                  </Tr>
                  <Tr>
                    <Td>Michael Bracewell</Td>
                    <Td>c Maxwell b Starc</Td>
                    <Td>12</Td>
                    <Td>22</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>54.55</Td>
                  </Tr>
                  <Tr>
                    <Td>James Neesham</Td>
                    <Td>c Finch b Stoinis</Td>
                    <Td>2</Td>
                    <Td>4</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>50.00</Td>
                  </Tr>
                  <Tr>
                    <Td>Mitchell Satner</Td>
                    <Td>not out</Td>
                    <Td>16</Td>
                    <Td>29</Td>
                    <Td>2</Td>
                    <Td>0</Td>
                    <Td>55.17</Td>
                  </Tr>
                  <Tr>
                    <Td>Tim Southee</Td>
                    <Td>b Zampa</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>66.67</Td>
                  </Tr>
                  <Tr>
                    <Td>Matt Henry</Td>
                    <Td>c(sub) Agar b Zampa</Td>
                    <Td>5</Td>
                    <Td>11</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>45.55</Td>
                  </Tr>
                  <Tr>
                    <Td>Trent Boult</Td>
                    <Td>lbw b Zampa</Td>
                    <Td>9</Td>
                    <Td>12</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                    <Td>75.00</Td>
                  </Tr>
                </Tbody>
              </Table>
              <br />
              <h3>
                2-1 (Martin Guptill, 0.5), 14-2 (Devon Conway, 8.2), 14-3 (Tom
                Latham, 8.5), 33-4 (Kane Williamson, 18.1), 38-5 (Daryl
                Mitchell, 20.5), 45-6 (James Neesham, 21.6),
              </h3>
              <h3>
                54-7 (Michael Bracewell, 25.1), 57-8 (Tim Southee, 26.4), 72-9
                (Matt Henry, 30.1), 82-10 (Trent Boult, 32.6)
              </h3>
              <br />
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Bowler</Th>
                    <Th>O</Th>
                    <Th>M</Th>
                    <Th>W</Th>
                    <Th>R</Th>
                    <Th>ECON.</Th>
                    <Th>WD</Th>
                    <Th>NB</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td size="md">MItchell Starc</Td>
                    <Td>7</Td>
                    <Td>0</Td>
                    <Td>2</Td>
                    <Td>12</Td>
                    <Td>1.70</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Josh Hazellewood</Td>
                    <Td>6</Td>
                    <Td>2</Td>
                    <Td>0</Td>
                    <Td>11</Td>
                    <Td>1.80</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Sean Abott</Td>
                    <Td>5</Td>
                    <Td>4</Td>
                    <Td>2</Td>
                    <Td>1</Td>
                    <Td>0.20</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Adam Zampa</Td>
                    <Td>9</Td>
                    <Td>0</Td>
                    <Td>5</Td>
                    <Td>35</Td>
                    <Td>3.90</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td size="md">Marcus Stoinis</Td>
                    <Td>3</Td>
                    <Td>0</Td>
                    <Td>1</Td>
                    <Td>14</Td>
                    <Td>4.70</Td>
                    <Td>1</Td>
                    <Td>0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
