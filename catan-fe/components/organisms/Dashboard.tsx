import { Button, Code, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useCreateGameMutation, useGameEventsSubscription, useGetGameLazyQuery, useGetGameQuery } from "../../types/generated";
import Inventory from "../molecules/Inventory";
import Opponents from "../molecules/Opponents";
import Player from "../molecules/Player";

interface DashboardProps {
  prop?: string;
}

const Dashboard = ({ prop }: DashboardProps) => {
  const [gameId, setGameId] = useState<string>()

  const [getGame, data] = useGetGameLazyQuery();
  const gameEvents = useGameEventsSubscription()
  const [createGame, createGameResult] = useCreateGameMutation()

  useEffect(() => {
    if(createGameResult.data?.createGame.id) {
      setGameId(createGameResult.data.createGame.id)
    }
  
  }, [createGameResult.data?.createGame.id])

  const handleGetGame = () => {
    if (gameId) {
      getGame({variables: {id: gameId}})
    }
  }

  console.log(createGameResult);

  return (
    <div>
      <Code block>{gameId ? gameId : 'id:'}</Code>
      <Button onClick={() => createGame()}>Make a game!</Button>
      <Button onClick={() => handleGetGame()}>Get game!</Button>
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
