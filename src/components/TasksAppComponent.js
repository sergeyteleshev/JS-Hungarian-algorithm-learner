import React from 'react';
import '../styles.scss';
import Task1Visible from '../containers/Task1Visible';
import Task2Visible from '../containers/Task2Visible';
import Task3Visible from '../containers/Task3Visible';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class TasksAppComponent extends React.Component {
    openTaskErrorDialog()
    {
        this.props.openChosenTaskErrorDialogStatus();
    }

    closeTaskErrorDialog()
    {
        this.props.closeChosenTaskErrorDialogStatus();
    };

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
        else if(this.props.currentTask === 2 && this.props.isOpenedTask2)
        {
            currentTaskVisible = <Task2Visible/>;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1"/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2" secondary={true}/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3"/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4"/>
            </section>;
        }
        else if(this.props.currentTask === 3 && this.props.isOpenedTask3)
        {
            currentTaskVisible = <Task3Visible/>;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1"/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2"/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3" secondary={true}/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4"/>
            </section>;
        }
        else if(this.props.currentTask === 4 && this.props.isOpenedTask4)
        {
            currentTaskVisible = null;
            currentTaskBar = <section className="tasks-bar">
                <FlatButton onClick={() => this.props.goAnotherTask(1)} label="Задание 1"/>
                <FlatButton onClick={() => this.props.goAnotherTask(2)} label="Задание 2"/>
                <FlatButton onClick={() => this.props.goAnotherTask(3)} label="Задание 3"/>
                <FlatButton onClick={() => this.props.goAnotherTask(4)} label="Задание 4" secondary={true}/>
            </section>;
        }

        const actions = [
            <FlatButton
                label="Закрыть"
                secondary={true}
                onClick={() => this.closeTaskErrorDialog()}
            />,
        ];

        return (
            <div>
                <div className="application-window">
                    {currentTaskBar}
                </div>

                <div className="TasksContainer">
                    {currentTaskVisible}
                </div>

                <div>
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.props.isChosenTaskErrorDialogOpened}
                        onRequestClose={() => this.closeTaskErrorDialog()}
                    >
                        Йо, сначала нужно пройти все предыдущие задания!
                    </Dialog>
                </div>
            </div>
        );
    }
}
