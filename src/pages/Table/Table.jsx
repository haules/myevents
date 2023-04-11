import React from "react";
import styles from "./table.module.css";
import fakeData from "../../data/MOCK_DATA.json";
import { useTable } from "react-table";

const Table = () => {

  // async function fetchImg() {
  //   const response = await fetch("");
  //   const jsonData = await response.json();
  //   setImg(jsonData);
  //   console.log(jsonData);
  // }

  // useEffect(() => {
  //   // fetchImg();
  //   // console.log("https://unsplash.com/photos/mpwF3Mv2UaU");
  //   // fetch("https://unsplash.com/photos/mpwF3Mv2UaU")
  //   //   .then((res) => res.json())
  //   //   .then((data) => console.log(data))
  //   //   .catch((err) => console.log(err));
  // });

  const data = React.useMemo(() => fakeData, []); //documentation recommends
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First name",
      accessor: "first_name",
    },
    {
      Header: "Last name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "University",
      accessor: "university",
    },
  ],[]); //return array

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });


  return (
    <div className={styles.mainDiv}>
      <h1>Table</h1>
      <div className={styles.container}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((header) => (
              <tr {...header.getHeaderGroupProps()}>
                {header.headers.map((column) =>(
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
