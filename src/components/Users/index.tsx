import { User } from '../User';
import React,{ memo, useContext} from 'react'
import './styles.scss'
import { UserContext } from '../../contexts/UserContext';
import { useApi } from '../../hooks/useApi';

function UsersComponent() {

  const { users, setUsers, filter } = useContext(UserContext);

  const { data } = useApi(filter ? `users?q=${filter}` : 'users');
  
  setUsers(data);

  if(!users){
    return <h1>Carregando...</h1>
  }

  return (
    <ul>
        {users?.map((user) => (
            <User 
               key={user.id}
                id={user.id}
                name={user.name} 
               email={user.email}
               phone={user.phone}
               image={user.image}
               address={user.address}
            />
        ))}
    </ul>

  )
}
export const Users = memo(UsersComponent)
