import { Code } from "@mantine/core";
import { useGetGameQuery } from "../../types/generated";
import Inventory from "../molecules/Inventory";
import Opponents from "../molecules/Opponents";
import Player from "../molecules/Player";

interface DashboardProps {
  prop?: string;
}

const Dashboard = ({ prop }: DashboardProps) => {
  const { data, loading } = useGetGameQuery();

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <Code block>{JSON.stringify(data, null, 2)}</Code>
      <Player />
      <Opponents />
    </div>
  );
};

export default Dashboard;
