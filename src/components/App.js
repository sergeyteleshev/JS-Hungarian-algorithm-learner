import React from 'react';
import '../styles.scss';
import Task1Visible from '../containers/Task1Visible';
import FlatButton from 'material-ui/FlatButton';

export default class App extends React.Component {
    render()
    {
        return (
            <div>
                <div className="application-window">
                    <section className="tasks-bar">
                        <FlatButton label="Задание 1" secondary={true}/>
                        <FlatButton label="Задание 2"/>
                        <FlatButton label="Задание 3"/>
                        <FlatButton label="Задание 4"/>
                    </section>
                </div>

                <div className="TasksContainer">
                    <Task1Visible/>
                </div>
            </div>
        );
    }
}
