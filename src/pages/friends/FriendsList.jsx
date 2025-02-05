import React from 'react'
import { useEffect ,useState} from 'react'

function FriendsList() {
  const [friends, setFriends] = useState([]);
  async function getUsers(){
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
     setFriends(users);
    }catch(error){
      console.log('error', error);
    }
    
    
  }
  function deleteFriend(id){
    const newFriends = friends.filter((friend) => friend.id !== id);
    setFriends(newFriends);
  }
  
  
  


  useEffect(() => {
    getUsers();
  }, [])
  console.log(friends);
  
  return (
    <div>
      <h1>Friends List</h1>
      {friends.length > 0 &&
        friends.map((friend) => (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default FriendsList
