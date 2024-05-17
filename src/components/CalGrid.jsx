import React from "react";
import "./extra.css";

const resources = [
  "Resource A",
  "Resource B",
  "Resource C",
  "Resource D",
  "Resource E",
  "Resource F",
  "Resource G",
  "Resource H",
  "Resource I",
  "Resource J",
  "Resource K",
  "Resource L",
  "Resource M",
  "Resource N",
  "Resource O",
];

const CalGrid = ({ currentMonth, currentYear }) => {
  const today = new Date();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  const gridDetails = {
    cols: 31,
    rows: 16,
  };

  const getDayName = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  const grid = [];

  for (let i = 0; i < gridDetails.rows; i++) {
    const row = [];
    for (let j = 0; j < gridDetails.cols; j++) {
      if (i === 0) {
        if (j === 0) {
          row.push({ col: "", row: "", resource: "" });
        } else {
          const date = new Date(firstDayOfMonth);
          date.setDate(date.getDate() + j - 1);
          row.push({
            col: j,
            row: "",
            resource: `${date.getDate()} ${getDayName(date)}`,
          });
        }
      } else {
        if (j === 0) {
          row.push({ col: "", row: "", resource: resources[i - 1] });
        } else {
          row.push({ col: "", row: "", resource: "" });
        }
      }
    }
    grid.push(row);
  }

  return (
    <div className="cal-grid grid grid-cols-32 max-h-screen overflow-scroll">
      {/* Render grid */}
      {grid.map((row, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              className={`  border-[0.5px] border-gray-400
                            ${cell.resource.charAt(0) === "R" && "pt-1 pl-1 font-bold min-w-[192px]"}
                             ${
                               colIndex === 0 || rowIndex === 0
                                 ? "text-left font-normal text-sm "
                                 : "min-w-[50px] min-h-[61px] "
                             }
                            ${isNaN(parseInt(cell.resource.charAt(0))) ? "" : "pl-2 min-w-[74px] max-h-[26px]min-w-[50px] "}  ${cell.resource === "" && colIndex === 0 && "z-high"} `}
              style={{ gridColumn: `${colIndex + 1}` }} // Adjusting column placement
            >
              {/* Render cell content */}
              <p
                className={`m-1 ${parseInt(cell.resource.charAt(0) + cell.resource.charAt(1)) === parseInt(today.getDate()) && "bg-[#007aff] rounded-xl text-white text-center "} `}
              >
                {cell.resource !== "" ? `${cell.resource}` : ""}
              </p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CalGrid;
