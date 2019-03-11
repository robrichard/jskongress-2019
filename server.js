const { ApolloServer, gql } = require('apollo-server');
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const data = [
  {
    title: 'Opening Keynote',
    time: '10:30 - 11:00',
    speaker: {
      name: 'Sean Larkin',
    },
    comments: [
      {
        body: 'Loved this!',
      },
    ],
  },
  {
    title: 'Knock knock, who’s there?',
    time: '11:30 - 12:00',
    speaker: {
      name: 'Sam Bellen',
    },
    comments: [
      {
        body: 'Interesting!',
      },
    ],
  },
  {
    title: 'Event Sourcing Architecture',
    time: '12:00 - 12:30',
    speaker: {
      name: 'Tamar Twena-Stern',
    },
    comments: [
      {
        body: 'Wow! Incredible Stuff!',
      },
      {
        body: 'This is awesome!',
      },
    ],
  },
];

const MyGraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      talks: {
        resolve: () => data,
        type: new GraphQLList(
          new GraphQLObjectType({
            name: 'Talk',
            fields: {
              title: { type: GraphQLString },
              time: { type: GraphQLString },
              speaker: {
                type: new GraphQLObjectType({
                  name: 'Speaker',
                  fields: {
                    name: { type: GraphQLString },
                  },
                }),
              },
              comments: {
                resolve: root =>
                  new Promise(resolve => setTimeout(() => resolve(root.comments), 3000)),
                type: new GraphQLList(
                  new GraphQLObjectType({
                    name: 'Comment',
                    fields: {
                      body: { type: GraphQLString },
                    },
                  })
                ),
              },
            },
          })
        ),
      },
    },
  }),
});

const server = new ApolloServer({ schema: MyGraphQLSchema, tracing: false, cacheControl: false });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
