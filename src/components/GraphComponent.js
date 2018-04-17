import React from 'react';
import '../styles.scss';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

export default class GraphComponent extends React.Component {
    getNodesObject(nodes, providers)
    {
        let nodesObject = [];

        for (let i = 0; i < nodes.length; i++)
        {
            nodesObject.push({
                id: "n" + i, label: nodes[i],
                color: '#E91E63',
            });
        }

        for (let i = nodes.length; i < nodes.length + providers.length; i++)
        {
            nodesObject.push({
                id: "n" + i, label: providers[i - nodes.length],
                color: '#4DD0E1',
            });
        }

        return nodesObject;
    }

    getEdgesObject(nodes, providers, ribsTable)
    {
        let edgesObject = [];

        for(let i = 0; i < ribsTable.length; i++)
        {
            for(let j = 0; j < ribsTable[i].length; j++)
            {
                if(!isNaN(parseFloat(ribsTable[i][j])) && isFinite(ribsTable[i][j])) // isNumeric?
                {
                    edgesObject.push({
                        id: "e" + (edgesObject.length + 1),
                        source: "n" + j,
                        target: "n" + (nodes.length + i),
                        color: '#000000',
                    });
                }
            }
        }

        return edgesObject;
    }

    render()
    {
        if(this.props.nodes && this.props.providers && this.props.ribsTable)
        {
            return (
                <div style={{background: '#EEEEEE', marginTop: '20px'}}>
                    <Sigma
                        graph={{
                                nodes: this.getNodesObject(this.props.nodes, this.props.providers),
                                edges: this.getEdgesObject(this.props.nodes, this.props.providers, this.props.ribsTable)
                        }}
                        settings={{
                            drawEdges: true,
                            font: 'Helvetica',
                        }}>
                        <RelativeSize initialSize={15}/>
                        <RandomizeNodePositions/>
                    </Sigma>
                </div>
            );
        }
        else
        {
            return <div className="givenRebraTable"><h3>Ошибка исходных данных</h3></div>;
        }
    }
}
