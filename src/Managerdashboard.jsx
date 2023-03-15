import Button from "@mui/material/Button";
import Dropdown from "react-bootstrap/Dropdown";
import * as React from "react";
import Employeelist from "./Employeelist";




function Managerdashboard() {
  const styles = { width: "200px" };

  return (
    <div className="managerDashBoard">
      {/* <div className="sideNav">
        <h4>Employees</h4>
        <div className="employeeList">
          <Button variant="contained" style={styles}>
            Admin
          </Button>
          <Button variant="contained" style={styles}>
            Team Lead
          </Button>
          <Button variant="contained" style={styles}>
            Service Advisors
          </Button>
          <Button variant="contained" style={styles}>
            Technicians
          </Button>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              style={styles}
              id="dropdown-basic"
            >
              +Add Employees
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Team Lead </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Service Advisor </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Technician</Dropdown.Item>s
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div> */}
      <Employeelist></Employeelist>
      
    </div>
  );
}

export default Managerdashboard;
