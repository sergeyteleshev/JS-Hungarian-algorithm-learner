/* eslint-disable react/prop-types */
import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

import task4InitialData from '../consts/Task4/InitialData';
import resultData from '../consts/Task4/Result';

import RibsTableVisible from '../containers/RibsTableVisible';
import AceEditor from 'react-ace';
import RaisedButton from 'material-ui/RaisedButton';
import {check} from "../consts/Task4/Checker";
import {Tabs, Tab} from 'material-ui/Tabs';
import GraphVisible from '../containers/GraphVisible';

export default class Task4Component extends React.Component
{
    executeCode()
    {
        let iDoc = this.ifr.contentWindow;
        let data = {
            initialRibsTable: Object.assign(task4InitialData.ribsTable),
            resultData: Object.assign(resultData),
        };

        let result = null;

        iDoc.postMessage(data, "*");
        iDoc.postMessage(result, "*");

        this.ifr.contentWindow.document.body.innerHTML = "<script class='task4Code' type='text/javascript'>" +
            eval(this.props.currentCodeTask4) +
            "</script>";

        this.props.setTaskResult(result);
        this.forceUpdate();

        if(check(result) === true)
        {
            this.props.openTaskDoneDialog();
            this.props.makeTaskAvailable(this.props.currentTask + 1);
        }
    }

    tabHandleChange(value)
    {
        this.props.changeTab(value);
    }

    render()
    {
        let resultObject = Object.assign({}, task4InitialData);
        resultObject.ribsTable = this.props.resultTask4;
        let highlightedData = [
            [0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1],
        ];

        return(
            <div>
                <section className="mainBody">
                    <div className="mainBodyLeftPart">
                        <AceEditor
                            mode="javascript"
                            theme="twilight"
                            name="task4Editor"
                            onChange={this.props.editCodeTask4}
                            value={this.props.currentCodeTask4}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            width={"100%"}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                        <div className="editorButtons">
                            <RaisedButton className={"executeButton editorButton"} type={"button"} label="Выполнить код" onClick={() => this.executeCode()}/>
                            <RaisedButton className={"showTaskButton editorButton"} type={"button"} label="Показать задание"/>
                        </div>
                    </div>

                    <div className={"mainBodyRightPart"}>
                        <section className={"ribTables"}>
                            <div className={"tabs"}>
                                <Tabs
                                    value={this.props.currentTask4RibsTable}
                                    onChange={(value) => this.tabHandleChange(value)}
                                >
                                    <Tab label="Результат" value="source">
                                        <RibsTableVisible initialData={task4InitialData} highlightedCells={highlightedData}/>
                                    </Tab>
                                    <Tab label="Визуализация" value="graph">
                                        <GraphVisible
                                            nodes={task4InitialData.nodes}
                                            providers={task4InitialData.providers}
                                            ribsTable={task4InitialData.ribsTable}
                                        />
                                    </Tab>
                                </Tabs>
                            </div>
                        </section>
                    </div>

                    <section className="userResult">
                        <iframe ref={(f) => this.ifr = f} style={{display: "none"}} className="task4-iframe"/>
                    </section>
                </section>
            </div>
        );
    }
}