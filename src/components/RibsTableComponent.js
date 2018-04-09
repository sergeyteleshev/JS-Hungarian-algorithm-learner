import React from 'react';
import '../styles.scss';

export default class RibsTableComponent extends React.Component {
    render()
    {
        let tableData = this.props.initialData;

        if(tableData.nodes.length === tableData.providers.length && tableData.nodes.length === tableData.ribsTable.length && tableData.ribsTable.length === 8)
        {
            return (
                <div className="mainBodyRightPart">
                    <section className="given-data">
                        <div className="givenRebraTable">
                            <h3>{this.props.title}</h3>
                            <table>
                                <tr>
                                    <td>Точка/Поставщик</td>
                                    <td>{tableData.nodes[0]}</td>
                                    <td>{tableData.nodes[1]}</td>
                                    <td>{tableData.nodes[2]}</td>
                                    <td>{tableData.nodes[3]}</td>
                                    <td>{tableData.nodes[4]}</td>
                                    <td>{tableData.nodes[5]}</td>
                                    <td>{tableData.nodes[6]}</td>
                                    <td>{tableData.nodes[7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[0]}</td>
                                    <td>{tableData.ribsTable[0][0]}</td>
                                    <td>{tableData.ribsTable[0][1]}</td>
                                    <td>{tableData.ribsTable[0][2]}</td>
                                    <td>{tableData.ribsTable[0][3]}</td>
                                    <td>{tableData.ribsTable[0][4]}</td>
                                    <td>{tableData.ribsTable[0][5]}</td>
                                    <td>{tableData.ribsTable[0][6]}</td>
                                    <td>{tableData.ribsTable[0][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[1]}</td>
                                    <td>{tableData.ribsTable[1][0]}</td>
                                    <td>{tableData.ribsTable[1][1]}</td>
                                    <td>{tableData.ribsTable[1][2]}</td>
                                    <td>{tableData.ribsTable[1][3]}</td>
                                    <td>{tableData.ribsTable[1][4]}</td>
                                    <td>{tableData.ribsTable[1][5]}</td>
                                    <td>{tableData.ribsTable[1][6]}</td>
                                    <td>{tableData.ribsTable[1][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[2]}</td>
                                    <td>{tableData.ribsTable[2][0]}</td>
                                    <td>{tableData.ribsTable[2][1]}</td>
                                    <td>{tableData.ribsTable[2][2]}</td>
                                    <td>{tableData.ribsTable[2][3]}</td>
                                    <td>{tableData.ribsTable[2][4]}</td>
                                    <td>{tableData.ribsTable[2][5]}</td>
                                    <td>{tableData.ribsTable[2][6]}</td>
                                    <td>{tableData.ribsTable[2][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[3]}</td>
                                    <td>{tableData.ribsTable[3][0]}</td>
                                    <td>{tableData.ribsTable[3][1]}</td>
                                    <td>{tableData.ribsTable[3][2]}</td>
                                    <td>{tableData.ribsTable[3][3]}</td>
                                    <td>{tableData.ribsTable[3][4]}</td>
                                    <td>{tableData.ribsTable[3][5]}</td>
                                    <td>{tableData.ribsTable[3][6]}</td>
                                    <td>{tableData.ribsTable[3][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[4]}</td>
                                    <td>{tableData.ribsTable[4][0]}</td>
                                    <td>{tableData.ribsTable[4][1]}</td>
                                    <td>{tableData.ribsTable[4][2]}</td>
                                    <td>{tableData.ribsTable[4][3]}</td>
                                    <td>{tableData.ribsTable[4][4]}</td>
                                    <td>{tableData.ribsTable[4][5]}</td>
                                    <td>{tableData.ribsTable[4][6]}</td>
                                    <td>{tableData.ribsTable[4][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[5]}</td>
                                    <td>{tableData.ribsTable[5][0]}</td>
                                    <td>{tableData.ribsTable[5][1]}</td>
                                    <td>{tableData.ribsTable[5][2]}</td>
                                    <td>{tableData.ribsTable[5][3]}</td>
                                    <td>{tableData.ribsTable[5][4]}</td>
                                    <td>{tableData.ribsTable[5][5]}</td>
                                    <td>{tableData.ribsTable[5][6]}</td>
                                    <td>{tableData.ribsTable[5][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[6]}</td>
                                    <td>{tableData.ribsTable[6][0]}</td>
                                    <td>{tableData.ribsTable[6][1]}</td>
                                    <td>{tableData.ribsTable[6][2]}</td>
                                    <td>{tableData.ribsTable[6][3]}</td>
                                    <td>{tableData.ribsTable[6][4]}</td>
                                    <td>{tableData.ribsTable[6][5]}</td>
                                    <td>{tableData.ribsTable[6][6]}</td>
                                    <td>{tableData.ribsTable[6][7]}</td>
                                </tr>
                                <tr>
                                    <td>{tableData.providers[7]}</td>
                                    <td>{tableData.ribsTable[7][0]}</td>
                                    <td>{tableData.ribsTable[7][1]}</td>
                                    <td>{tableData.ribsTable[7][2]}</td>
                                    <td>{tableData.ribsTable[7][3]}</td>
                                    <td>{tableData.ribsTable[7][4]}</td>
                                    <td>{tableData.ribsTable[7][5]}</td>
                                    <td>{tableData.ribsTable[7][6]}</td>
                                    <td>{tableData.ribsTable[7][7]}</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </div>
            );
        }
        else
        {
            return <div className="givenRebraTable"><h3>Ошибка исходных данных</h3></div>;
        }
    }
}
