import React, { useState } from "react";
import ApolloProviderContainOther from "./ApolloProviderContainOther";
import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/client";

const GET_USERS = gql`
    query GetUsers{
        users{
            id
            name
            age
        }
    }
`;
const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(userInput: $input) {
      id
      name
      age
    }
  }
`;
const UPDATE_USER = gql`
  mutation UpdateUser($update: UserUpdate!) {
    updateUser(userUpdate: $update) {
      id
      name
      age
    }
  }
`;
const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
      name
      age
    }
  }
`;
const GET_USER = gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      name
      age
    }
  }
`;



export default function Users() {
    const { data } = useQuery(GET_USERS);

    const [createUser] = useMutation(CREATE_USER, {
      refetchQueries: [{ query: GET_USERS }],
    });
    
    const [deleteUser] = useMutation(DELETE_USER, {
      refetchQueries: [{ query: GET_USERS }],
    });
    
    const [getUser, { data: userData, loading: userLoading, error: userError }] =useLazyQuery(GET_USER);
    
    const [updateUser] = useMutation(UPDATE_USER, {
      refetchQueries: [{ query: GET_USERS }],
    });
    
    const [userId, setUserId] = useState("");
    
    async function handleDeleteUser(id:number){
        await getUser({ variables: { id: userId } });
    }
    
    async function handleUpdateUser(id:any, name:any, age:any){
        const newName = prompt("Enter new name (默认: " + name + "):", name);
        const newAge = prompt("Enter new age (默认: " + age + "):", age);
    
        // 检查用户是否输入了新值
        if (newName === null || newName === "") {
          // 用户点击了取消或没有输入新值，使用默认值
        } else {
          // 用户输入了新值
          name = newName;
        }
    
        age = !newAge || isNaN(parseInt(newAge, 10)) ? age : parseInt(newAge, 10);    
    
        if (id && name && !isNaN(age)) {
            try {
              await updateUser({
                variables: {
                  update: {
                    id,
                    name,
                    age,
                  },
                },
              });
            } catch (err) {
              console.error(err);
            }
          } else alert("Invalid input");
    }   
    
    async function handleGetUser () {
        if (userId) {
            try {
              await getUser({ variables: { id: userId } });
            } catch (err) {
              console.error(err);
            }
        }
    };
    
    function UserList(){
        return (
            <ul>
                {data && data.users && data.users.length > 0 ? (
                data.users.map(({ id, name, age }) => (
                    <li key={id}>
                    {id} - {name} - {age} years old
                    <button onClick={() => handleDeleteUser(id)}>Delete</button>
                    <button onClick={() => handleUpdateUser(id, name, age)}>
                        Update
                    </button>
                    </li>
                ))
                ) : (
                <li>No users found</li>
                )}
            </ul>
            )
    }
    
    function GetUserByID(){
    
        return(
            <>
            <input
              type="text"
              placeholder="Enter user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleGetUser}>Get User</button>
            {userData && userData.getUser && (
              <div>
                <p>User Details:</p>
                <p>ID: {userData.getUser.id}</p>
                <p>Name: {userData.getUser.name}</p>
                <p>Age: {userData.getUser.age}</p>
              </div>
            )}
            </>
        )
    }

    return (
        <>
            <div>
                <h2>user list</h2>
                <UserList></UserList>
                <GetUserByID></GetUserByID>
            </div>
        </>
    )

}