import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Registration from './registration';
import ContactUs from './contactUs';
import ProgramsInformation from './programsInformation';
import BrowsePrograms from './browsePrograms';
import Home from './home';
import Registration_FR from './registration_FR';


function UncontrolledExample() {
  return (
    
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
    
      <Tab eventKey="home" title="Home">
        <Home/>
      </Tab>
      <Tab eventKey="registration" title="Registration">
        <Registration/>
      </Tab>
      <Tab eventKey="browse" title="Browse Programs" >
        <BrowsePrograms/>
      </Tab>
      <Tab eventKey="programs" title="Programs Information" >
        <ProgramsInformation/>
      </Tab>
      <Tab eventKey="contact" title="Contact Us" >
        <ContactUs/>
      </Tab>

      <Tab eventKey="registration_fr" title="FR" >
        <Registration_FR/>
      </Tab>

    </Tabs>
  );
}

export default UncontrolledExample;