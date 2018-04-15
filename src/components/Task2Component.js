import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

import task2InitialData from '../consts/Task2/InitialData';
import {check} from '../consts/Task2/Checker';
import resultData from '../consts/Task2/Result';

import RibsTableVisible from '../containers/RibsTableVisible';
import AceEditor from 'react-ace';

import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class Task2Component extends React.Component
{
    executeCode()
    {
        let iDoc = this.ifr.contentWindow;
        let data = {
            initialRibsTable: Object.assign(task2InitialData.ribsTable),
            resultData: Object.assign(resultData),
        };

        let result = null;

        iDoc.postMessage(data, "*");
        iDoc.postMessage(result, "*");

        this.ifr.contentWindow.document.body.innerHTML = "<script class='task2Code' type='text/javascript'>" +
            eval(this.props.currentCodeTask2) +
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
        let resultObject = Object.assign({}, task2InitialData);
        resultObject.ribsTable = this.props.resultTask2;

        return(
            <div>
                <section className="mainBody">
                    <div className="mainBodyLeftPart">
                        <AceEditor
                            mode="javascript"
                            theme="twilight"
                            name="task2Editor"
                            onChange={this.props.editCodeTask2}
                            value={this.props.currentCodeTask2}
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
                                    value={this.props.currentTask2RibsTable}
                                    onChange={(value) => this.tabHandleChange(value)}
                                >
                                    <Tab label="Исходник" value="source">
                                        <RibsTableVisible initialData={task2InitialData}/>
                                    </Tab>
                                    <Tab label="Результат" value="result">
                                        <RibsTableVisible initialData={resultObject}/>
                                    </Tab>
                                    <Tab label="Визуализация" value="graph">

                                    </Tab>
                                </Tabs>
                            </div>
                        </section>
                    </div>

                    <section className="userResult">
                        <iframe ref={(f) => this.ifr = f} style={{display: "none"}} className="task2-iframe"/>
                    </section>
                </section>
            </div>
        );
    }
}