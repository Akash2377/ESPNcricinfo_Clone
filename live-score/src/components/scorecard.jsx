import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

export const ScoreCard=()=>{
    return <Accordion defaultIndex={[0]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Austallia Innings Score
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <TableContainer>
    <Table size='sm'>
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
    <h3>Fall of wickets: 1-0 (Aaron Finch, 1.2 ov), 2-7 (David Warner, 3.1 ov), 3-22 (Marnus Labuschagne, 6.4 ov), 4-26 (Marcus Stoinis, 8.3 ov), 5-54 (Alex Carey, 18.3 ov),</h3>
    <h3>6-103 (Glenn Maxwell, 32.5 ov), 7-111 (Sean Abbott, 35.5 ov), 8-117 (Steven Smith, 36.3 ov)</h3>
    <br />
  <Table size='sm'>
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
        <Td size='md'>Trent Boult</Td>
        <Td>9.2</Td>
        <Td>2</Td>
        <Td>3</Td>
        <Td>37</Td>
        <Td>3.96</Td>
        <Td>1</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>Matt Henrry</Td>
        <Td>9</Td>
        <Td>0</Td>
        <Td>3</Td>
        <Td>25</Td>
        <Td>2.77</Td>
        <Td>0</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>Tim Southee</Td>
        <Td>10</Td>
        <Td>0</Td>
        <Td>1</Td>
        <Td>39</Td>
        <Td>3.9</Td>
        <Td>0</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>Mitchell Satner</Td>
        <Td>8</Td>
        <Td>0</Td>
        <Td>3</Td>
        <Td>23</Td>
        <Td>2.87</Td>
        <Td>1</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>James Neesham</Td>
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
          <Box flex='1' textAlign='left'>
            NewZeland Inning Score
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <TableContainer>
    <Table size='sm'>
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
    <h3>Fall of wickets: 1-0 (Aaron Finch, 1.2 ov), 2-7 (David Warner, 3.1 ov), 3-22 (Marnus Labuschagne, 6.4 ov), 4-26 (Marcus Stoinis, 8.3 ov), 5-54 (Alex Carey, 18.3 ov),</h3>
    <h3>6-103 (Glenn Maxwell, 32.5 ov), 7-111 (Sean Abbott, 35.5 ov), 8-117 (Steven Smith, 36.3 ov)</h3>
    <br />
  <Table size='sm'>
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
        <Td size='md'>Trent Boult</Td>
        <Td>9.2</Td>
        <Td>2</Td>
        <Td>3</Td>
        <Td>37</Td>
        <Td>3.96</Td>
        <Td>1</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>Matt Henrry</Td>
        <Td>9</Td>
        <Td>0</Td>
        <Td>3</Td>
        <Td>25</Td>
        <Td>2.77</Td>
        <Td>0</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>Tim Southee</Td>
        <Td>10</Td>
        <Td>0</Td>
        <Td>1</Td>
        <Td>39</Td>
        <Td>3.9</Td>
        <Td>0</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>Mitchell Satner</Td>
        <Td>8</Td>
        <Td>0</Td>
        <Td>3</Td>
        <Td>23</Td>
        <Td>2.87</Td>
        <Td>1</Td>
        <Td>0</Td>
      </Tr>
      <Tr>
        <Td size='md'>James Neesham</Td>
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
  </Accordion>
}