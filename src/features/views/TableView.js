import React from 'react'
import { parseUnixTimestamp, parseUnixDate } from '../../utils';
import { HEADER_LABELS } from '../../constants';
import '../../assets/styles/main.scss'; 

export const TableView = ({ data, dateFrom, dateTo }) => {

    const renderTableHeader = () => {
        let header = HEADER_LABELS; 
        return header.map((key, index) => {
            return <th key={index}>
                {key.toUpperCase()}
            </th>
        }); 
    }

    const getParsedDate = (date) => {
        return parseUnixDate(date);
    }

    const renderTableData = (tableData) => {
        return tableData.map((item, index) => {
            const { time, high, low, open, volumefrom, volumeto, close } = item; 
            return (
                <tr key={index}>
                    <td>{parseUnixTimestamp(time)}</td>
                    <td>{high}</td>
                    <td>{low}</td>
                    <td>{open}</td>
                    <td>{volumefrom}</td>
                    <td>{volumeto}</td>
                    <td>{close}</td>
                </tr>
            )
        });
    }

    return (
        <div className="center large overflow-auto">
             <h1 className="secodary-color">Bitcoin History</h1>
            <p className="primary-color">{getParsedDate(dateFrom)} - {getParsedDate(dateTo)}</p>
            <table >
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData(data)}
                </tbody>
            </table>
        </div>
    ); 
}

export default TableView; 