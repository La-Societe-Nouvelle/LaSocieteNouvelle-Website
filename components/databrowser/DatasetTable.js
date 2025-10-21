"use client";

import { Table } from "react-bootstrap";

export default function DatasetTable({
  data,
  metadata,
  columnsParameter,
  rowsParameter
}) {
  if (!data || !metadata) {
    return null;
  }

  const columnMetadata = metadata[columnsParameter]
    ?.filter((col) => parseInt(col.code) >= 2010)
    .sort((a, b) => parseInt(a.code) - parseInt(b.code)) || [];

  const rowMetadata = metadata[rowsParameter] || [];

  return (
    <div className="dataset-table-wrapper">
      <div className="table-container">
        <Table className="dataset-table">
          <thead>
            <tr>
              <th className="sticky-column">Industries</th>
              {columnMetadata.map((col) => (
                <th key={col.code}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowMetadata.map((row) => (
              <tr key={row.code}>
                <td className="sticky-column row-label">
                  {row.label}
                </td>
                {columnMetadata.map((col) => {
                  const value = data.find(
                    (item) =>
                      item[rowsParameter] == row.code &&
                      item[columnsParameter] == col.code
                  )?.value;

                  return (
                    <td key={col.code} className="data-cell">
                      {value !== undefined && value !== null ? value : ":"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
