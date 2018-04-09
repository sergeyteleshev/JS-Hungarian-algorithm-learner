import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

import task1InitialData from '../consts/Task1/InitialData';
import resultData from '../consts/Task1/Result';
import compressedResult from '../consts/Task1/SolutionCode';
import initialRibsTable from '../consts/Task1/initialRibsTable';
import {check} from '../consts/Task1/Checker';

import RibsTableVisible from '../containers/RibsTableVisible';
import AceEditor from 'react-ace';
import RaisedButton from 'material-ui/RaisedButton';

export default class Task1Component extends React.Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        //todo правильно?
        if (this.props !== nextProps) {

        }
    }

    //todo добавить функции в айфрейм или наоборот результат вытаскивать в компоненту и в ней самой уже чекать. лучше второе, думаю
    componentDidMount()
    {
        window.addEventListener("message", this.handleFrameTasks);

        if(this.ifr)
        {
            //todo при загрузке надо чтобы всё влетало в компоненту
        }
    }

    handleFrameTasks(e)
    {
        if(e.data.from.iframe === "load_products")
        {
            console.log(e);
        }
    }

    componentWillUnmount()
    {
        window.removeEventListener("message", this.handleFrameTasks);
    }

    executeCode()
    {
        let data = {
            initialRibsTable: initialRibsTable,
            compressedResult: compressedResult,
            resultData: resultData,
        };

        this.ifr.contentWindow.postMessage(data, "*");

        this.ifr.contentWindow.document.body.innerHTML = "<script type='text/javascript'>"
            + eval(this.props.currentCodeTask1) +
            "</script>";
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
                            onChange={this.props.editCode}
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
                            <iframe ref={(f) => this.ifr = f} style={{display: "none"}} className="task1-iframe" src="javascript:blank" sandbox/>
                        </section>
                    </div>
                </section>

            </div>
        );
    }
}