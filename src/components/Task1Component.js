import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

import task1InitialData from '../consts/Task1/InitialData';
import compressedResult from '../consts/Task1/SolutionCode';
import initialRibsTable from '../consts/Task1/initialRibsTable';
import {check} from '../consts/Task1/Checker';
import resultData from '../consts/Task1/Result';

import RibsTableVisible from '../containers/RibsTableVisible';
import AceEditor from 'react-ace';
import RaisedButton from 'material-ui/RaisedButton';

export default class Task1Component extends React.Component
{
    executeCode()
    {
        window.addEventListener("message", (event) => this.handleFrameTasks(event));
        let iDoc = this.ifr.contentWindow;
        let data = {
            initialRibsTable: initialRibsTable,
            compressedResult: compressedResult,
            resultData: resultData,
        };

        let result = null;

        iDoc.postMessage(data, "*");
        iDoc.postMessage(result, "*");

        this.ifr.contentWindow.document.body.innerHTML = "<script class='task1Code' type='text/javascript'>" +
            eval(this.props.currentCodeTask1) +
            "</script>";

        if(check(result) === true)
        {
            alert(this.props.currentTask);
            this.props.makeTaskAvailable(this.props.currentTask + 1);
        }
    }

    render()
    {
        return(
            <div>
                <section className="mainBody">
                    <div className="mainBodyLeftPart">
                        <AceEditor
                            mode="javascript"
                            theme="twilight"
                            name="task1Editor"
                            onChange={this.props.editCodeTask1}
                            value={this.props.currentCodeTask1}
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
                            }}/>
                        <RaisedButton className={"executeButton"} type={"button"} label="Выполнить код" onClick={() => this.executeCode()}/>
                    </div>

                    <div className={"mainBodyRightPart"}>
                        <RibsTableVisible title={"Исходные данные"} initialData={task1InitialData}/>

                        <section className="userReulst">
                            <iframe ref={(f) => this.ifr = f} style={{display: "none"}} className="task1-iframe"/>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}