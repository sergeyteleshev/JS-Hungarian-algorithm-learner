import React from 'react';
import '../styles.scss';
import FlatButton from 'material-ui/FlatButton';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/twilight';

export default class App extends React.Component {
    render()
    {
        return(
        <div className="application-window">
            <section className="tasks-bar">
                <FlatButton label="Задание 1" secondary={true}/>
                <FlatButton label="Задание 2"/>
                <FlatButton label="Задание 3"/>
                <FlatButton label="Задание 4"/>
            </section>

            <section className="mainBody">
                <div className="mainBodyLeftPart">
                    <AceEditor
                        mode="javascript"
                        theme="twilight"
                        name="ace_first_task"
                        editorProps={{$blockScrolling: true}}
                        setOptions={{
                            enableLiveAutocompletion: true,
                            highlightActiveLine: true,
                        }}
                    />
                </div>
                <div className="mainBodyRightPart">
                    <section className="given-data">
                        <div className="givenRebraTable">
                            <h3>Исходные данные</h3>
                            <table>
                                <tr>
                                    <td>i/j</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>4</td>
                                    <td>6</td>
                                    <td>9</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>13</td>
                                    <td>9</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        );
    }
}
