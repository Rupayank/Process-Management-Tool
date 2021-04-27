/*Order Form in React js*/
import React, { useState, useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import Appbar from "./../AppBar/Appbar";
import "./InputFormStyle/formBGStyle.css";

function Warping() {
  var date = new Date();
  var curDate = date.toISOString().slice(0, 10);
  const [data, setData] = useState([
  ]);
  const [form, setForm] = useState({
    order_no: "",
    date: curDate,
    shift: "",
    weight_o_w_y: "",
    waste_weight: "",
    package_defect: "",
  });

  useEffect((e) => {
    axios
      .get("http://localhost:3006/warping")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/warping", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      order_no: "",
      date: curDate,
      shift: "",
      weight_o_w_y: "",
      waste_weight: "",
      package_defect: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prv) => {
      return {
        ...prv,
        [name]: value,
      };
    });
  }


  function createSelectItems() {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items.push(
      <option key={data[i].order_no} value={data[i].order_no}>
        {data[i].order_no+" - "+data[i].company}
      </option>);
    }
    return items;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="login">
          <Appbar processName="Warping Form" />
          <div class="form">
          <select 
            value={form.order_no}
            name="order_no"
            onChange={handleChange}
            placeholder="Order no.">
              {createSelectItems()}
            </select>
            <br />
            <input
              type="number"
              name="shift"
              value={form.shift}
              onChange={handleChange}
              placeholder="Shift"
              required
            />
            <br />
            <input
              type="number"
              name="weight_o_w_y"
              value={form.weight_o_w_y}
              onChange={handleChange}
              placeholder="Weight of Waste Yarn"
              required
            />
            <br />
            <input
              type="number"
              name="waste_weight"
              value={form.waste_weight}
              onChange={handleChange}
              placeholder="Waste Weight"
              required
            />
            <br />
            <input
              type="text"
              name="package_defect"
              value={form.package_defect}
              onChange={handleChange}
              placeholder="Package Defect"
              required
            />
            <br />
            <input type="submit" value="SUBMIT" className="submit" />
          </div>
        </div>
        </form>
      </div>
  );
}
export default Warping;
