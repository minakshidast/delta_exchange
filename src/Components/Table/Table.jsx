import React, { useEffect, useState } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { getData, deleteData, filterData } from "../Redux/App/action";
import DeleteIcon from "@mui/icons-material/Delete";
function Table() {
  const [selectVal, setSelectVal] = useState({ name: "", value: "" });
  const dispatch = useDispatch();
  const all = useSelector((state) => state.app);
  const { isLoading, data } = all;
  console.log(data);
  console.log(all);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteData(id));
  };
  const handleFilter = () => {
    dispatch(filterData(selectVal.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectVal({ ...data, [name]: value });
  };

  return (
    <>
      <div id="selectDiv">
        <select
          name="states"
          id="states"
          onClick={handleFilter}
          onChange={handleChange}
        >
          <option value="selectall">Select all</option>
          <option value="dc_united">DC United</option>
          <option value="manchester">Manchester United</option>
          <option value="la_galaxy">LA Galaxy</option>
        </select>
        <select name="status" id="status">
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <table id="table">
        <tr>
          <th>
            <input type="checkbox"></input>
          </th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
          <th></th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>
                {" "}
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  value={item.name}
                ></input>
              </td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.status ? "Active" : "Closed"}</td>
              <td>{item.last_updated}</td>
              <td>{item.notes}</td>
              <td>
                <DeleteIcon onClick={() => handleDelete(item.id)} />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export { Table };
