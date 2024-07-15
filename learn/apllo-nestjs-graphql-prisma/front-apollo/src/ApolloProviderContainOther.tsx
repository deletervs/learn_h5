import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
}from '@apollo/client'

interface ACType{
    item:React.ReactNode;
}

const client= new ApolloClient({
    link:createHttpLink({uri:'http://localhost:3000/graphql',}),
    cache: new InMemoryCache(),
})

export default function ApolloProviderContainOther({item}:ACType):React.ReactElement{
    return (
        <>
            <ApolloProvider client={client}>
                {item}
            </ApolloProvider>
        </>
    )
}