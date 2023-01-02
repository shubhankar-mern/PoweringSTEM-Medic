import React from 'react';
import Table from "rc-table";

const EyeTable = () => {
    const columns = [
        {
          title: "Vision",
          dataIndex: "name",
          key: "name",
          width: 100,
        },
        {
          title: "LogMAR-Left",
          dataIndex: "logmarl",
          key: "age",
          width: 150,
        },
        {
            title: "LogMAR-Right",
            dataIndex: "logmarr",
            key: "age",
            width: 150,
          },
        {
          title: "Computed Snellen Left",
          dataIndex: "readingsL",
          key: "email",
          width: 200,
        },
        {
            title: "Computed Snellen Right",
            dataIndex: "readingsR",
            key: "email",
            width: 200,
          },
      ];
      const data = [
        {
          name: "Without Glasses",
          age: 28,
          logmarl: "+0.10",
          logmarr: "+0.11",
          readingsR: "6/7.5",
          readingsL: "6/6",
        },
        {
          name: "With Glasses",
          age: 36,
          logmarl: "+0.12",
          logmarr: "+0.10",
          readingsR: "6/6.5",
          readingsL: "6/7",
        },
        {
          name: "With Contact Lens",
          age: 23,
          logmarl: "",
          logmarr: "",
          readingsR: "",
          readingsL: "",
        },
        
      ];
  return (
    <div className='shadow-lg  bg-white rounded  mt-5 mx-1'><Table
    columns={columns}
    data={data}
    tableLayout="auto"
  /></div>
  )
}

export default EyeTable;