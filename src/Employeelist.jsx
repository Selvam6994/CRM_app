import Admin from "./Admin";
import ServiceAdvisor from "./ServiceAdvisor";
import Teamlead from "./Teamlead";
import Technicians from "./Technicians";






 function Employeelist() {
  return (
    <div className='employeeTable'>
   <Admin></Admin>
    <Teamlead></Teamlead>
    <ServiceAdvisor></ServiceAdvisor>
    <Technicians></Technicians>
    </div>
  );
}
export default Employeelist;