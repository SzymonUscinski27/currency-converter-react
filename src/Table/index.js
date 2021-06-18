import "./style.css";

const Table = () => (
    <table className="table" >
        <caption className="table__caption">Kursy walut</caption>
        <thead>
            <tr>
                <th className="table__tableHeader table__tableCell" scope="col">Waluta</th>
                <th className="table__tableHeader table__tableCell" scope="col">Kurs waluty</th>
            </tr>
            <tr>
                <th className="table__tableHeader table__tableCell" scope="row">Euro</th>
                <td className="table__tableCell">4.5546</td>
            </tr>
            <tr>
                <th className="table__tableHeader table__tableCell" scope="row">Dolar amerykański</th>
                <td className="table__tableCell">3.8014</td>
            </tr>
            <tr>
                <th className="table__tableHeader table__tableCell" scope="row">Funt brytyjski</th>
                <td className="table__tableCell">5.2376</td>
            </tr>
        </thead>
    </table>
);

export default Table;