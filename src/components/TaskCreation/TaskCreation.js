import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./TaskCreation.module.css"
import NavScrollExample from './NavBar'
import WorkFlow from './WorkFlow';

const TaskCreation = () => {
  return (
    <>
      <NavScrollExample />
      <WorkFlow />
    </>
  )
}

export default TaskCreation
