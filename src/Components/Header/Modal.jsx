import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { addData } from "../Redux/App/action";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./Modal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "transparent",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

const init = {
  id: uuid(),
  name: "",
  company: "",
  status: false,
  last_updated: new Date(),
  notes: "",
};

function ModalComp({ open, handleOpen }) {
  const [initialdata, setInitialData] = useState(init);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInitialData({
      ...initialdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = () => {
    console.log("clicked");
    dispatch(addData(initialdata));
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <label>Name</label>
            <br />
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <label>Company: </label>
            <br />
            <input type="text" name="company" onChange={handleChange} />
            <br />
            <label> Status</label> <br />
            <input type="checkbox" name="status" onChange={handleChange} />
            <br />
            <label>Notes</label> <br />
            <input type="text" name="notes" onChange={handleChange} />
            <br />
          </div>
          <div id="buttonDiv">
            <span>
              <button className="button1" onClose={handleOpen}>Cancel</button>
              <button className="button2" onClick={(e) => handleSubmit(e)}>
                Save
              </button>
            </span>
          </div>
        </Box>
      </Modal>
    </>
  );
}
export { ModalComp };
