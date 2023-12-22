import { Link, Outlet } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Dashboard = () => {
  return (
    <div>
      <SectionTitle title={"Dashboard"} />
      <Tabs>
        <TabList>
          <Tab>
            <Link to={"/dashboard/addTask"}>Add-Task</Link>
          </Tab>
          <Tab to={"/updateTask"}>update</Tab>
        </TabList>
      </Tabs>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
