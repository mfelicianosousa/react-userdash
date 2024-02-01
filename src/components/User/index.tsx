import React,{ memo, useContext } from 'react'
import {User as UserTypes } from '../../types/user'
import './styles.scss'
import { UserContext } from '../../contexts/UserContext';


function UserComponent({ 
    id,
    name,
    email,
    image,
    phone,
    address 
    }:  Omit<UserTypes, 'birthdate'> ){

    const { selectedUser, 
            setSelectedUser,
            deleteUser,
            setIsOpenModal,
            setUserFormDefaultValues, } = useContext(UserContext);

    function updateUserModal(){
        const editValues = {
            name,
            email,
            phone,
            country: address.country,
            state: address.state,
            street: address.street,
            number: String(address.number),
            avatar: image,

        }
        setUserFormDefaultValues(editValues);
        setIsOpenModal(true);
    }

    return (
        <li className={selectedUser === id ? 'isActive' : ''}
            onClick={() => setSelectedUser(id)}>
            <section className='info'>
                <img src={image} alt={`${name} avatar`}/>
                <div>
                    <h2>{name}</h2>
                    <span>{email}</span>
                    <span>{phone}</span>
                </div>
                {selectedUser === id && (
                    <div className="buttons">
                        <button type="button" onClick={updateUserModal}>Editar</button>
                        <button type="button" onClick={deleteUser}>Delete</button>
                    </div>
                )}
            </section>
            <aside className='address'>
                <div>
                    <span>País</span>
                    {address.country}
                </div>
                <div>
                    <span>Estado</span>
                    {address.state}
                </div>
                <div>
                    <span>Rua</span>
                    {address.street}, {address.number}
                </div>
            </aside>
        </li>
    )
}

export const User = memo(UserComponent)

/*
  Deixar o react renderizar por conta 
  1 - Components que não recebem props
  2 - Components que renderizam frequentements
  3 - Components que renderizam com as mesmas props
  4 - Components grandes 
*/