import React, { useState } from 'react';
import classNames from "classnames";
import moment from "moment";
import styles from "./index.module.scss";

const InvestorsTable = props => {
  const [selectedRow, setSelectedRow] = useState('');

  const { tableData } = props;
  return (
    <div className={styles.tableWrap}>
      <table className={styles.eventsInfoTable}>
        <thead>
          <tr>
            <th>INVESTOR EVENT</th>
            <th>DATE</th>
            <th>VENUE</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(obj => {
            const { eventName, venue, date, startTime, endTime, id } = obj;
            return (
              <tr
                className={classNames({
                  [styles.selected]: selectedRow === id,
                })}
                onClick={() => setSelectedRow(id)}
                key={`eventData-${id}`}
              >
                <td>{eventName}</td>
                <td>{moment(date).format('MMMM D, YYYY')}</td>
                <td>{venue}</td>
                <td>{`${startTime} - ${endTime}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorsTable;
