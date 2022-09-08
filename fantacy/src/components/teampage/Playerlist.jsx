import React from "react";
import {
  Box,
  Avatar,
  Text,
  background,
  Input,
  Button,
  IconButton,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Teaminfo from "./teaminfo";
import { Link } from "react-router-dom";
import "../match/match.css";
import { AuthContext } from "../../context/AuthContext";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Playerlist = ({ team1, team2 }) => {
  const { setTeamfn } = React.useContext(AuthContext);

  const [player, setplayer] = React.useState([]);
  const [playerlist, setplayerlist] = React.useState([]);
  const [page, setpage] = React.useState(1);
  const [isfilter, setisfilter] = React.useState(false);
  const [display, setdisplay] = React.useState("none");

  React.useEffect(() => {
    fetch(`https://rupesh-team.herokuapp.com/items?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((res) => setplayer(res))
      .catch((err) => console.log(err));
  }, [page]);

//   const addplayer = (id, name, country, flag) => {
    

//       if (flag == false) {
//         let obj = {
//           id: id,
//           name: name,
//           country: country,
//         };
//       fetch("https://rupesh-team.herokuapp.com/player", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj),
//       });
//     } else {
//       fetch(`https://rupesh-team.herokuapp.com/player/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }
//   };
    
    
    const addplayer = (id, name, country, flag) => {
        if (flag == false) {
            let obj = {
                id: id,
                name: name,
                country: country,
            };
            setplayerlist((data) => {
                return [...data,obj]
            })
        }
        else {
            let newdata = playerlist.filter((item) => item.id != id)
            setplayerlist(newdata)
        }
    }
    
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

  const sendtoconetxt = () => {
    if (playerlist.length < 12) {
      setdisplay("");
    } else {
        setTeamfn(playerlist)
      fetch("https://rupesh-team.herokuapp.com/player", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerlist),
      });
    }
    };
    
  const onClose = () => {
    setdisplay("none");
  };

  return (
    <Box display="flex" flexDirection="column" gap="5">
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
        <Text ml="10" fontSize="md" className="machname" w="35%">
          Players Name
        </Text>
        <Text className="machname">PTS</Text>
        <Text className="machname">S.by%</Text>
        <Text mr="2" className="machname" cursor="pointer" onClick={filterfn}>
          CR{isfilter == false ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Text>
      </Box>
      <Box display="flex" mt="-5" flexDirection="column" gap="5">
        {player.map((item) => (
          <Teaminfo
            key={item.id}
            team1={team1}
            team2={team2}
            onclickfn={addplayer}
            page={page}
            {...item}
          />
        ))}
      </Box>
      <Alert display={display} status="error">
        <Box display="flex">
          <AlertIcon />
          <AlertTitle>Select Minimum 11</AlertTitle>

          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-330}
            top={-1}
            onClick={onClose}
          />
        </Box>
      </Alert>
          <Link to="/" >
        <Button display='block' m="auto" colorScheme="purple" size="lg" onClick={sendtoconetxt}>
          Save & Continue
        </Button>
      </Link>
    </Box>
  );
};

export default Playerlist;
