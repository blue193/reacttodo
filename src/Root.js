import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import TodoList from './containers/TodoList'
import RightList from './containers/RightList'
import Operate from './containers/Operate'

const Root = () => (
    <div className="container">
        <div className="row">
            <div className="col-5">
                <TodoList />
            </div>
            <div className="col-2">
                <Operate />
            </div>
            <div className="col-5">
                <RightList />
            </div>
        </div>
    </div>
)

export default Root