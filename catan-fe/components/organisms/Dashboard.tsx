import Inventory from "../molecules/Inventory";
import Opponents from "../molecules/Opponents";
import Player from "../molecules/Player";

interface DashboardProps {
  prop?: string;
}

const Dashboard = ({ prop }: DashboardProps) => {
  return (
    <div>
      <Player />
      <Opponents />
    </div>
  );
};

export default Dashboard;
