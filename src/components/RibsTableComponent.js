import React from 'react';
import '../styles.scss';

export default class RibsTableComponent extends React.Component {
    getTableData(ribsTable, nodes, providers, highlightedCells = null, snakeData = null)
    {
        let table = ribsTable.map((tr, y) => {
            return <tr key={y}>
                {
                    tr.map((td, x) => {
                        let tdStyle = {};
                        if(Array.isArray(snakeData) && snakeData[y][x] > 0 && snakeData[y][x] % 2 === 1)
                        {
                            tdStyle = {color: '#4CAF50'};
                            td += "'";
                        }

                        if(highlightedCells)
                        {
                            if (highlightedCells[y][x] === 1)
                            {
                                tdStyle = {color: "#FFCA28"};
                            }
                        }

                        return <td style={tdStyle}>{td}</td>;
                    })
                }
            </tr>
        });

        let tableHead = <tr>
            <td><span className={"blue"}>Поставщик</span> <span className={"white"}>/</span> <span className={"pink"}>точка</span></td>
            {nodes.map((node, index) => {
                return <td key={index}>{node}</td>
            })}
        </tr>;

        table.unshift(tableHead);

        table.map((tr, index) => {
            if(index > 0)
            {
                tr.props.children.unshift(<td>{providers[index - 1]}</td>);
            }
        });

        return table;
    }

    render()
    {
        let highlightedCells;
        if(this.props.highlightedCells)
        {
            highlightedCells = this.props.highlightedCells;
        }

        try
        {
            let tableData = Object.assign({}, this.props.initialData);
            let nodes = tableData.nodes.slice();
            let providers = tableData.providers.slice();
            let ribsTable = tableData.ribsTable.slice();
            let snakeData = null;

            if(Array.isArray(this.props.snakeData))
            {
                snakeData = this.props.snakeData.slice();
            }

            //todo сделать чтобы оно не только квадратную таблицу рисовало
            if(nodes.length === providers.length && nodes.length === ribsTable.length)
            {
                let table;
                if(highlightedCells)
                {
                    if (snakeData)
                    {
                        table = this.getTableData(ribsTable, nodes, providers, highlightedCells, snakeData);
                    }
                    else
                    {
                        table = this.getTableData(ribsTable, nodes, providers, highlightedCells);
                    }
                }
                else
                {
                    table = this.getTableData(ribsTable, nodes, providers);
                }

                return (
                    <div className="mainBodyRightPart">
                        <section className="given-data">
                            <div className="givenRebraTable">
                                {this.props.title ? <h3>{this.props.title}</h3> : null}
                                <table>
                                    {table}
                                </table>
                            </div>
                        </section>
                    </div>
                );
            }
            else
            {
                return <div className="givenRebraTable"><h3> </h3></div>;
            }
        }
        catch (e) {
            console.log(e);
            return <div className="givenRebraTable"><h3>Ошибка исходных данных</h3></div>;
        }
    }
}
