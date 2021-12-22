import {ApolloServer, gql} from 'apollo-server';
//import { ApolloServer } from 'apollo-server-express';
const users =[
    {name: "leetu chermue ", sex: "M",ID: "62021203"},//by leetu
    {name: "thanapot kamkhanheang", sex: "M",ID: "62020954"},//by thanapot
    {name: "Titipong Khannta", sex: "M",ID: "62022732"},//by Titipong
    {name: "Thanawat", sex: "M",ID: "62020965"},//by Thanawat
    {name: "Kittiphumi", sex: "M",ID: "62022686"},//by Kittiphumi
];

//schema
const typeDefs = gql`
    type Query{
        hello: String
        hi: String
        users:[User]
        user(name: String): User
    }
    type User{
        name: String
        sex: String
        ID: String
    }
`;
//resolver
const resolvers ={
    Query:{
        hello: (parent, args, context, info) =>{
            return "world";
        },
        hi: (parent, args, context, info) =>{
            return "62021203";
        },
        users: (parent, args, context, info) =>{
            return users;
        },
        user: (parent, args, context, info) =>{
            return users.find( user => user.name ===args.name);
        }

    }
};


//function apollo-server
const startApolloServer = async (typeDefs, resolvers) =>{
    const server = new ApolloServer({typeDefs, resolvers});
    const {url} = await server.listen();
    console.log(`Server ready at ${url}`);

};


//call function
startApolloServer(typeDefs, resolvers);
