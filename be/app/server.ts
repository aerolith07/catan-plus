import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createConnection, FindManyOptions, Repository } from 'typeorm';
import { ApolloServer, gql, IResolvers } from 'apollo-server-express';
import { resolver } from './resolvers/resolver';
import mongoose from 'mongoose';
import Game, { GameType } from './model/game';
const port = 4000;
const app = express();

app.get('/', (_, res) => res.send('hello'));
app.use(cors());
app.use(bodyParser.json());

const typeDefs = gql`
    type Query {
        getGame(id: String!): Game!
    }
    type Mutation {
        createGame(gameInput: GameInput!): Game!
    }
    type Game {
        _id: ID!
        name: String!
        players: [Player]!
        config: Config!
    }
    input GameInput {
        name: String!
    }
    type Config {
        showOthersResources: Boolean!
    }
    type Player {
        id: String!
        name: String!
        resources: ResourceMap!
    }
    type ResourceMap {
        brick: Int!
        wood: Int!
        sheep: Int!
        grain: Int!
        rock: Int!
    }
`;

const run = async() => {

    const conn = mongoose.createConnection('mongodb://localhost:27017');

    const GameModel = conn.model<GameType>('Game', Game)

    const resolvers = [resolver] as IResolvers[];
    const server = new ApolloServer({ typeDefs, resolvers, context: {db: {game: GameModel }} });
    


    server.applyMiddleware({ app, cors: false, bodyParserConfig: false });
    
    
    app.listen(port, '0.0.0.0', () => console.log('Listening on port: ' + port));
}

run()