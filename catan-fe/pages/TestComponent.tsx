import React from "react";
import { gql, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useGetGameQuery } from "../src/generated";

// const GET_LOCATIONS = gql`
// query getGame {
// 	game(id: "6356d3d600665b646fa7bdad") {
// 		id,
// 		players {
// 			name
// 			resources {
// 				brick
// 			}
// 		}
// 	}
// }`;

const TestComponent = () => {
  const { loading, error, data } = useGetGameQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      hello
      <p>
        {data?.game.id}
        {data?.game.players.map((player) => {
          return (
            <div key={player.name}>
              {player.name}
              {player.resources.brick}
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default TestComponent;
