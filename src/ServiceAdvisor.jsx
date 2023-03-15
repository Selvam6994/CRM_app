import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ServiceAdvisor() {

    const [serviceAdvisorData,setServiceAdvisorData] =useState([])
    const get_serviceAdvisor_data=async()=>{
      const getData =await fetch("http://localhost:4000/CRM/showServiceAdvisor",{
        headers: {
          "x-auth-managerToken": localStorage.getItem("managerToken"),
        },
      })  
  const jsonData = await getData.json();
  setServiceAdvisorData(jsonData);
  }
  
  useEffect(() => {
    get_serviceAdvisor_data(); 
  
  }, [])
  const titleColor = {color:"#14A44D"};
  return (
    <div>
      
    <h3 style={{color:"#E4A11B"}}>Service Advisors</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={titleColor} >Name</TableCell>
            <TableCell style={titleColor}  align="right">Id</TableCell>
            <TableCell style={titleColor}  align="right">Email</TableCell>
            <TableCell style={titleColor}  align="right">Department</TableCell>
            <TableCell style={titleColor}  align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {serviceAdvisorData.map((data) => (
          <TableRow
            key={data.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {data.name}
            </TableCell>
            <TableCell align="right">{data._id}</TableCell>
            <TableCell align="right">{data.email}</TableCell>
            <TableCell align="right">{data.department}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default ServiceAdvisor