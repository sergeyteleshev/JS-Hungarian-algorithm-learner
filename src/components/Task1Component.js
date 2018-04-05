import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/twilight';
import task1InitialData from '../consts/Task-1';
import RibsTableVisible from '../containers/RibsTableVisible';

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
                    <RibsTableVisible title={"Исходные данные"} initialData={task1InitialData}/>
                </section>

                <section className="userReulst">
                    <iframe className="task1-iframe"></iframe>
                </section>
            </div>
        );
    }
}