import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';

export default class Task1Component extends React.Component
{
    render()
    {
        return(
            <div>
                <section className="mainBody">
                    <div className="mainBodyLeftPart">
                        <AceEditor
                            mode="javascript"
                            theme="twilight"
                            name="ace_first_task"
                            editorProps={{$blockScrolling: true}}
                            setOptions={{
                                enableLiveAutocomplete: true,
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
                                        <td>A</td>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>D</td>
                                    </tr>
                                    <tr>
                                        <td>Heisenberg</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>9</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Los Pollos</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Tuco Salamanka</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>Mike Ehrmantraut</td>
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

                <section className="userReulst">
                    <iframe className="task1-iframe"></iframe>
                </section>
            </div>
        );
    }
}