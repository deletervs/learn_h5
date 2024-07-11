import {
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache,
  gql, 
  useQuery
} from '@apollo/client'


const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache,
})

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function Dogs() {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);
  
  return (
    <div>xxx</div>
  );
}


export default function L1(){
    return(
        <>
            <ApolloProvider client={client}>
              <Dogs />   
            </ApolloProvider>
        </>
    )
}