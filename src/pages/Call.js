import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
// import ColorChips from "../components/CallCategory";
// import styles from "../styles/Call.module.css";
import "../styles/Call.css";

const cate = [
  { id: 0, name: "물" },
  { id: 1, name: "물컵" },
  { id: 2, name: "숟가락" },
  { id: 3, name: "젓가락" },
  { id: 4, name: "포크" },
  { id: 5, name: "앞접시" },
];

export default function Call() {
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const click = (e) => {
    let index = e.target.value;
    console.log(index);
    clicked[index] = !clicked[index];
    console.log(clicked);
    setClicked(() => [...clicked]);
  };
  const handleRequest = () => {
    setClicked([false, false, false, false, false, false]);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: "30px" }}>
        {cate.map((item, index) => {
          return (
            <>
              <button
                onClick={click}
                value={item.id}
                className={"button" + (clicked[index] ? " buttonClicked" : "")}
              >
                {item.name}
              </button>
            </>
          );
        })}
        <Box
          sx={{
            display: "flex",
            width: 1,
            height: "50vh",
            justifyContent: "flex-end",
          }}
        >
          <button onClick={handleRequest} className={"subButton"}>
            요청
          </button>
        </Box>

        <button className={"callServer"}>직원만 호출하기</button>
      </Box>
    </>
  );
}
