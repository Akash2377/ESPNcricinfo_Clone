import { Navbar } from "../Component/NavbarBox/Navbar";
import { CenterBox } from "../Component/CenterBox/Center";
import { LiveScoreBox } from "../Component/LiveScorebox/LiveScore";

export const Home = (props) => {
  return (
    <>
      {/* <LiveScoreBox
        style={{
          marginTop: "-200px",
          zIndex: "100",
          position: "absolute",
          top: "0",
        }}
      />

      <Navbar theme={props.theme} handleTheme={props.handleTheme} /> */}
      <CenterBox theme={props.theme} />
    </>
  );
};
