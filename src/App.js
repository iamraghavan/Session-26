import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import TeacherList from "./components/TeacherList";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/students" component={StudentList} />
        <Route path="/teachers" component={TeacherList} />
        <Route path="/add-student" component={AddStudent} />
        <Route path="/add-teacher" component={AddTeacher} />
      </Switch>
    </Router>
  );
}

export default App;
