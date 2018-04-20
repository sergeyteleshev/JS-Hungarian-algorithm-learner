/* eslint-disable react/prop-types,react/jsx-key */
import React from 'react';
import '../styles.scss';
import Task1Visible from '../containers/Task1Visible';
import Task2Visible from '../containers/Task2Visible';
import Task3Visible from '../containers/Task3Visible';
import Task4Visible from '../containers/Task4Visible';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class TasksAppComponent extends React.Component {
    openTaskErrorDialog()
    {
        this.props.openChosenTaskErrorDialog();
    }

    closeTaskErrorDialog()
    {
        this.props.closeChosenTaskErrorDialog();
    }

    openTaskDoneDialog()
    {
        this.props.closeTaskDoneDialog();
    }

    closeTaskDoneDialog()
    {
        this.props.closeTaskDoneDialog();
    }

    render()
    {
        let currentTaskVisible = '';
        let currentTaskBar = '';
        const taskErrorActions = [
            <FlatButton
                label="Закрыть"
                secondary={true}
                onClick={() => this.closeTaskErrorDialog()}
            />,
        ];

        const taskDoneActions = [
            <FlatButton
                label="Закрыть"
                secondary={true}
                onClick={() => this.closeTaskDoneDialog()}
            />,
        ];


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
            currentTaskVisible = <Task4Visible/>;
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

                <div className={"taskErrorDialog"}>
                    <Dialog
                        actions={taskErrorActions}
                        modal={false}
                        open={this.props.isChosenTaskErrorDialogOpened}
                        onRequestClose={() => this.closeTaskErrorDialog()}
                    >
                        {this.props.currentTask === 4? "Все задания пройдены. Хорош!" : "Алло, сначала нужно пройти все предыдущие задания!"}
                    </Dialog>
                </div>

                <div className={"taskDoneDialog"}>
                    <Dialog
                        actions={taskDoneActions}
                        modal={false}
                        open={this.props.isTaskDoneDialogOpened}
                        onRequestClose={() => this.closeTaskDoneDialog()}
                    >
                        Задаение пройдено. Красава!
                    </Dialog>
                </div>
            </div>
        );
    }
}
