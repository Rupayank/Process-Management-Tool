import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Demo2.css";
export default function Yarn() {
    const [form, setForm] = useState({
        order_no: "",
            length: "",
            weight: ""
    });

  const [data, setData] = useState([
  ]);

  useEffect((e) => {
    axios
      .get("http://localhost:3006/packing")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    function handleSubmit(e) {

        e.preventDefault();

        axios.post("http://localhost:3006/packing", form)
            .then(res => {
                console.log(res);
                alert("successful insert");
            })
            .catch(err => {
                console.log(err);
            });

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
          <Appbar processName="Packing Form" />
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
              value={form.length}
              onChange={handleChange}
              name="length"
              placeholder="Length"
              required
            />
            <br />
            <input
              type="number"
              value={form.weight}
              onChange={handleChange}
              name="weight"
              placeholder="Weight"
              required
            />
            <br />
            <input type="submit" value="SUBMIT" class="submit" />
          </div>
        </div>
      </form>
    </div>
  )}
