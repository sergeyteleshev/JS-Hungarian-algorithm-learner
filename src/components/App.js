import React from 'react';
import '../styles.scss';
import TasksAppVisible from '../containers/TasksAppVisible';

export default class App extends React.Component {
    render()
    {
        return (
            <TasksAppVisible/>
        );
    }
}
