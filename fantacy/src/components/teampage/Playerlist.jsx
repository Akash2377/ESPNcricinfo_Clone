import React from "react";
import {
  Box,
  Avatar,
  Text,
  background,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Teaminfo from "./teaminfo";
import { useBoolean } from "@chakra-ui/react";
import "../match/match.css";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

const Playerlist = ({ team1, team2 }) => {
  const [player, setplayer] = React.useState([]);
  const [playerlist, setplayerlist] = React.useState([]);
  const [page, setpage] = React.useState(1);
  const [isfilter, setisfilter] = React.useState(false);

  //   const [flag, setflag] = useBoolean();

  React.useEffect(() => {
    fetch(`https://rupesh-team.herokuapp.com/items?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((res) => setplayer(res))
      .catch((err) => console.log(err));
  }, [page]);

  const addplayer = (name, country, flag) => {
    let obj = {
      name: name,
      country: country,
    };
    if (flag === false) {
      setplayerlist([...playerlist, obj]);
    } else {
      setplayerlist(playerlist.filter((item) => item.name == { name }));
    }
  };
    const filterfn = () => {
      
    if (isfilter == true) {
      const data1 = player.sort((a, b) => {
        if (a.cr > b.cr) {
          return -1;
        }
        if (a.cr < b.cr) {
          return 1;
        }
      });
      setplayer((data) => {
        return data1;
      });
      setisfilter(false);
    } else {
      const data1 = player.sort((a, b) => {
        if (a.cr > b.cr) {
          return 1;
        }
        if (a.cr < b.cr) {
          return -1;
        }
      });
      setisfilter(true);

      setplayer((data) => {
        return data1;
      });
    }
  };

  // const addtolist = (e) => {
  //     return setflag.toggle

  // };

  return (
    <Box display='flex'  flexDirection='column' gap="5">
      <Tabs
        p=" 10px 0px"
        display="flex"
        colorScheme="red"
        gap="20"
        justifyContent="space-evenly"
      >
        <Tab className="machname" onClick={() => setpage(1)}>
          Wk
        </Tab>
        <Tab className="machname" onClick={() => setpage(2)}>
          BAT
        </Tab>
        <Tab className="machname" onClick={() => setpage(3)}>
          AR
        </Tab>
        <Tab className="machname" onClick={() => setpage(4)}>
          BOW
        </Tab>
      </Tabs>
      <Box
        m="0px -10.5px "
        display="flex"
        bg="#F8F8F9"
        p="14px   5px"
        mb="4"
        justifyContent="space-between"
      >
        <Text ml='10' fontSize='md' className="machname" w="35%">
          Players Name
        </Text>
        <Text className="machname">PTS</Text>
        <Text className="machname">S.by%</Text>
        <Text  className="machname" cursor='pointer' onClick={filterfn}>
          CR{isfilter == false ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" gap="5">
        {player.map((item) => (
          <Teaminfo
            team1={team1}
            team2={team2}
            onclickfn={addplayer}
            {...item}
          />
        ))}
          </Box>
          <Button m='auto' colorScheme='purple' size='lg' >Save & Continue</Button>
    </Box>
  );
};

export default Playerlist;
