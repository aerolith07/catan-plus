import Inventory from "../molecules/Inventory";
import Player from "../molecules/Player";

interface DashboardProps {
  prop?: string;
}

const Dashboard = ({ prop }: DashboardProps) => {
  return (
    <div>
      <Player />
    </div>
  );
};

export default Dashboard;
