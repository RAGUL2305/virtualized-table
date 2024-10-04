import React, { CSSProperties } from "react";
import { GetAllDataResponse, useGetAllDataQuery } from "./VirtualTableApi";
import { FixedSizeList as List } from "react-window";
import _ from "lodash";
import "./style.css";

interface RowProps {
  index: number;
  style: CSSProperties;
}

const VirtualTable = () => {
  const { data } = useGetAllDataQuery();

  const columns = data ? (_.keys(data[0]) as (keyof GetAllDataResponse)[]) : [];

  if (!data) {
    return <h1>Data Not Found</h1>;
  }

  const Row = ({ index, style }: RowProps) => {
    const item = data[index];
    return (
      <div style={style} className="table-row">
        {_.map(columns, (column) => (
          <div className="table-cell">{item[column]}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="table-row">
        {_.map(columns, (column) => (
          <div className="table-cell">{column}</div>
        ))}
      </div>
      <List
        className="List"
        height={250}
        itemCount={data.length}
        itemSize={35}
        width={800}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualTable;
