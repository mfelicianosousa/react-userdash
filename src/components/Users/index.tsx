import { User } from '../User';
import React,{ memo, useContext} from 'react'
import './styles.scss'
import { UserContext } from '../../contexts/UserContext';

function UsersComponent() {

  const { users } = useContext(UserContext);

  return (
    <ul>
        {users.map((user) => (
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