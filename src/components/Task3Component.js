import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

import task3InitialData from '../consts/Task3/InitialData';
import compressedResult from '../consts/Task3/SolutionCode';
import initialRibsTable from '../consts/Task3/initialRibsTable';
import resultData from '../consts/Task3/Result';

import RibsTableVisible from '../containers/RibsTableVisible';
import AceEditor from 'react-ace';
import RaisedButton from 'material-ui/RaisedButton';

export default class Task3Component extends React.Component
{
    shouldComponentUpdate()
    {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {

        }
    }

    //todo добавить функции в айфрейм или наоборот результат вытаскивать в компоненту и в ней самой уже чекать. лучше второе, думаю
    componentDidMount()
    {
        window.addEventListener("message", this.handleFrameTasks);
    }

    handleFrameTasks(e)
    {
        // if(e.data.from.ifr === "load_products")
        // {
        //     console.log(e);
        // }
    }

    componentWillUnmount()
    {
        window.removeEventListener("message", this.handleFrameTasks);
    }

    executeCode()
    {
        let iDoc = this.ifr.contentWindow;
        let data = {
            initialRibsTable: initialRibsTable,
            compressedResult: compressedResult,
            resultData: resultData,
        };

        iDoc.postMessage(data, "*");

        this.ifr.contentWindow.document.body.innerHTML = "<script class='task3Code' type='text/javascript'>" +
            eval(this.props.currentCodeTask3) +
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
                            name="task3Editor"
                            onChange={this.props.editCodeTask3}
                            value={this.props.currentCodeTask3}
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
                        <RibsTableVisible title={"Исходные данные"} initialData={task3InitialData}/>

                        <section className="userReulst">
                            <iframe ref={(f) => this.ifr = f} style={{display: "none"}} className="task3-iframe"/>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}