import React from 'react';
import '../styles.scss';
import Task1Visible from '../containers/Task1Visible';
import FlatButton from 'material-ui/FlatButton';

export default class TasksAppComponent extends React.Component {
    render()
    {
        let currentTaskVisible = '';
        let currentTaskBar = '';
        if(this.props.currentTask === 1)
        {
            currentTaskVisible = <Task1Visible/>;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1" secondary={true}/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2"/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3"/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4"/>
            </section>;
        }
        else if(this.props.currentTask === 2)
        {
            currentTaskVisible = null;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1"/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2" secondary={true}/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3"/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4"/>
            </section>;
        }
        else if(this.props.currentTask === 3)
        {
            currentTaskVisible = null;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1"/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2"/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3" secondary={true}/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4"/>
            </section>;
        }
        else if(this.props.currentTask === 4)
        {
            currentTaskVisible = null;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1"/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2"/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3"/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4" secondary={true}/>
            </section>;
        }

        return (
            <div>
                <div className="application-window">
                    {currentTaskBar}
                </div>

                <div className="TasksContainer">
                    {currentTaskVisible}
                </div>
            </div>
        );
    }
}
