import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Table = () => {
  let [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Sname</th>
            <th>Dept No</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data) => (
            <tr>
              <td>{data.regNo}</td>
              <td>{data.Sname}</td>
              <td>{data.deptNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
