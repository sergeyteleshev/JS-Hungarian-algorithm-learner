import React from 'react';
import '../styles.scss';

export default class TestRibsTableComponent extends React.Component {
    getTableData(ribsTable, nodes, providers)
    {
        let table = ribsTable.map((tr) => {
            return <tr>
                {
                    tr.map((td) => {
                        return <td>{td}</td>
                    })
                }
            </tr>
        });

        let tableHead = <tr>
            <td>Поставщик/точка</td>
            {nodes.map((node) => {
                return <td>{node}</td>
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
        let tableData = Object.assign({}, this.props.initialData);
        let nodes = tableData.nodes.slice();
        let providers = tableData.providers.slice();
        let ribsTable = tableData.ribsTable.slice();

        try
        {
            if(nodes.length === providers.length && nodes.length === ribsTable.length)
            {
                let table = this.getTableData(ribsTable,nodes, providers);

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
