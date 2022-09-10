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

export const PlayingXI = () => {
  return (
    <>
      <NavbarLive />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>AUSTRALIA</Th>
              <Th>NEW ZEALAND</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td size="lg">1</Td>
              <Td>David Warner</Td>
              <Td>Martin Guptil</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Aaron Finch (c)</Td>
              <Td>Devon Conway</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Steven Smith</Td>
              <Td>Kane Williamson (c)</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>Marnus Labuschagne</Td>
              <Td>Tom Latham (wk)</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>Marcus Stoinis</Td>
              <Td>Daryl Mitchell</Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>Alex Carey (wk)</Td>
              <Td>Micchalle Bracewell</Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>Glenn Maxwell</Td>
              <Td>James Neesham</Td>
            </Tr>
            <Tr>
              <Td>8</Td>
              <Td>Sean Abott</Td>
              <Td>Mtchel Satner</Td>
            </Tr>
            <Tr>
              <Td>9</Td>
              <Td>Mitchell Starc</Td>
              <Td>Mat Henry</Td>
            </Tr>
            <Tr>
              <Td>10</Td>
              <Td>Adam Zampa</Td>
              <Td>Tim southee</Td>
            </Tr>
            <Tr>
              <Td>11</Td>
              <Td>Josh Hazelewwod</Td>
              <Td>Trent Boult</Td>
            </Tr>
            <Tr>
              <Th size="lg">Bench</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Th>12</Th>
              <Th>Ashton Agar</Th>
              <Th>Finn Allen</Th>
            </Tr>
            <Tr>
              <Th>13</Th>
              <Th>Camerron Green</Th>
              <Th>Lokie Fergusson</Th>
            </Tr>
            <Tr>
              <Th>14</Th>
              <Th>Josh Inglis</Th>
              <Th>Glenn Phillips</Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
