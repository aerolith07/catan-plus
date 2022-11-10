import { Button, Code, Text } from "@mantine/core";
import { useCreateGameMutation, useGameEventsSubscription, useGetGameQuery } from "../../types/generated";
import Inventory from "../molecules/Inventory";
import Opponents from "../molecules/Opponents";
import Player from "../molecules/Player";

interface DashboardProps {
  prop?: string;
}

const Dashboard = ({ prop }: DashboardProps) => {
  const { data, loading } = useGetGameQuery();
  const gameEvents = useGameEventsSubscription()
  const [createGame, createGameResult] = useCreateGameMutation()

  if (loading) return <div>Loading</div>;

  console.log(createGameResult);

  return (
    <div>
      <Button onClick={() => createGame()}>Make a game!</Button>
      <Text>Events</Text>
      <Code block>{JSON.stringify(gameEvents, null, 2)}</Code>
      <Text>Create Game mutation</Text>
      <Code block>{JSON.stringify({loading: createGameResult.loading,data: createGameResult.data}, null, 2)}</Code>
      <Player />
      <Opponents />
    </div>
  );
};

export default Dashboard;
