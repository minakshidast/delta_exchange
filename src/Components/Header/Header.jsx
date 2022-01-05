import React, { useState } from "react";
import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import { ModalComp } from "./Modal";
function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div id="header">
        <h2>Team Memebers</h2>
        <button id="addButton" onClick={handleOpen}>
          <span>Add Members</span> <AddIcon />
        </button>
      </div>
      <hr />
      <ModalComp handleOpen={handleOpen} open={open} />
    </>
  );
}
export { Header };
