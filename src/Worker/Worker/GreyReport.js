import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./../ErrorMessages/Error.css";
import "./InputFormStyle/formBGStyle.css";

function GreyReport() {
  const [form, setForm] = useState({
    date: "",
    shift: "",
    loom_no: "",
    worker: "",
    meters: "",
    points: "",
    order_no: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3006/grey_report", form)
      .then((res) => {
        console.log(res);
        alert("successful insert");
      })
      .catch((err) => {
        console.log(err);
      });

    setForm({
      date: "",
      shift: "",
      loom_no: "",
      worker: "",
      meters: "",
      points: "",
      repairable: "",
      order_no: "",
      grade: "",
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="login">
          <div class="form">
            <div className="upperButtons">
              <NavLink to="/worker1">
                <button class="button">Back</button>
              </NavLink>
              <a class="button" href="#popup1">
                Error
              </a>
            </div>
            <h2>GreyReport Form</h2>

            <input
              type="date"
              value={form.date}
              onChange={handleChange}
              name="date"
              placeholder="Date"
              required
            />
            <input
              type="number"
              value={form.shift}
              onChange={handleChange}
              name="shift"
              placeholder="Shift"
              required
            />
            <input
              type="number"
              value={form.loom_no}
              onChange={handleChange}
              name="loom_no"
              placeholder="Loom"
              required
            />
            <input
              type="text"
              value={form.worker}
              onChange={handleChange}
              name="worker"
              placeholder="Worker"
              required
            />
            <input
              type="number"
              value={form.meters}
              onChange={handleChange}
              name="meters"
              placeholder="Meters"
              required
            />
            <input
              type="number"
              value={form.points}
              onChange={handleChange}
              name="points"
              placeholder="points"
              required
            />
            <input
              type="number"
              value={form.order_no}
              onChange={handleChange}
              name="order_no"
              placeholder="Order Number"
              required
            />
            <input
              type="number"
              value={form.repairable}
              onChange={handleChange}
              name="repairable"
              placeholder="Repairable"
              required
            />
            <input
              type="number"
              value={form.grade}
              onChange={handleChange}
              name="grade"
              placeholder="Grade"
              required
            />
            <input type="submit" value="SUBMIT" class="submit" />
          </div>
        </div>
      </form>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Report Error</h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <input type="text" placeholder="error" />
            <button className="MainButton">Submit</button>
          </div>
          <input
            type="date"
            value={form.date}
            onChange={handleChange}
            name="date"
            placeholder="Date"
            required
          />
          <input
            type="number"
            value={form.shift}
            onChange={handleChange}
            name="shift"
            placeholder="Shift"
            required
          />
          <input
            type="number"
            value={form.loom_no}
            onChange={handleChange}
            name="loom_no"
            placeholder="Loom"
            required
          />
          <input
            type="text"
            value={form.worker}
            onChange={handleChange}
            name="worker"
            placeholder="Worker"
            required
          />
          <input
            type="number"
            value={form.meters}
            onChange={handleChange}
            name="meters"
            placeholder="Meters"
            required
          />
          <input
            type="number"
            value={form.points}
            onChange={handleChange}
            name="points"
            placeholder="points"
            required
          />
          <input
            type="number"
            value={form.order_no}
            onChange={handleChange}
            name="order_no"
            placeholder="Order Number"
            required
          />
          <input
            type="number"
            value={form.repairable}
            onChange={handleChange}
            name="repairable"
            placeholder="Repairable"
            required
          />
          <input
            type="number"
            value={form.grade}
            onChange={handleChange}
            name="grade"
            placeholder="Grade"
            required
          />
          <input type="submit" value="SUBMIT" class="submit" />
        </div>
      </div>
    </div>
  );
}
export default GreyReport;
