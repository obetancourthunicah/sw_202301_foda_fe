import {
  getDateFromInputString,
  getInputDateString,
} from "@helpers/DateFunctions";

import "./DateRange.css";

export interface IDateRangeProps {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  onSubmit: () => void;
  onClear: () => void;
  showClear: boolean;
  showSubmit: boolean;
}

const DateRange = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onSubmit,
  onClear,
  showClear = false,
  showSubmit = false,
}:IDateRangeProps) => {
  const startDateValue = getInputDateString(new Date(startDate));
  const endDateValue = getInputDateString(new Date(endDate));

  const validateDateRange = (startDate:Date, endDate:Date) => {
    console.log(startDate, endDate);
    if (startDate.getTime() > endDate.getTime()) {
      console.log("startDate > endDate");
      return false;
    }
    console.log("startDate <= endDate");
    return true;
  };

  return (
    <div className="date-range">
      <div className="date-range__start input">
        <label htmlFor="startdate">Fecha Inicio</label>
        <input
          id="startdate"
          type="date"
          value={startDateValue}
          onChange={(e) => {
            const newStartDate = getDateFromInputString(e.target.value);
            if (validateDateRange(newStartDate, new Date(endDate))) {
              onStartDateChange(newStartDate);
            } else {
              return false;
            }
          }}
        />
      </div>
      <div className="date-range__end input">
        <label htmlFor="enddate">Fecha Fin</label>
        <input
          id="enddate"
          type="date"
          value={endDateValue}
          onChange={(e) => {
            const newEndDate = getDateFromInputString(e.target.value);
            if (validateDateRange(new Date(startDate), newEndDate)) {
              onEndDateChange(newEndDate);
            } else {
              return false;
            }
          }}
        />
      </div>
      {showSubmit && (
        <div className="date-range__submit">
          <button onClick={onSubmit}>Buscar</button>
        </div>
      )}
      {showClear && (
        <div className="date-range__clear">
          <button onClick={onClear}>Limpiar</button>
        </div>
      )}
    </div>
  );
};

export default DateRange;
