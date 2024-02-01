import { ReactNode, createContext, useState } from "react";
import { UserModal } from "../components/UserModel";
import { User } from "../types/user";

type UserContextProps = {
    children: ReactNode;
}

type UserContextType = {
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    selectedUser: number;
    setSelectedUser: (newState: number) => void;
    users: User[];
    setUsers: (newState: User[])=> void;
    filterUsers: (filter: string) => void;
    setFormName: (newState: string) => void;
    formName: string;
    formEmail: string;
    setFormEmail: (newState: string) => void;
    formPhone: string;
    setFormPhone: (newState: string) => void;
    formCountry: string;
    setFormCountry: (newState: string) => void;
    formState: string;
    setFormState: (newState: string) => void;
    formStreet: string;
    setFormStreet: (newState: string) => void;
    formNumber: string;
    setFormNumber: (newState: string) => void;
    formAvatar: string;
    setFormAvatar: (newState: string) => void;

}

const initialValue = {
    isOpenModal: false,
    setIsOpenModal:() => {},
    selectedUser: -1,
    setSelectedUser: () => {}, 
    users:[],
    setUsers: () => {},
    filterUsers: () => {},
    formName: '',
    setFormName: () => {},
    formEmail: '',
    setFormEmail: () => {},
    formPhone: '',
    setFormPhone: () => {},
    formCountry: '',
    setFormCountry: () => {},
    formState: '',
    setFormState: () => {},
    formStreet: '',
    setFormStreet: () => {},
    formNumber: '',
    setFormNumber: () => {},
    formAvatar: '',
    setFormAvatar: () => {},
}
export const UserContext = createContext<UserContextType>( initialValue );

export const UserContextProvider = ({ children }: UserContextProps) =>{
   
    const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal);
    const [selectedUser, setSelectedUser] = useState(initialValue.selectedUser)
    const [users, setUsers] = useState<User[]>([]); 
    const [formName, setFormName] = useState(initialValue.formName);
    const [formEmail, setFormEmail] = useState(initialValue.formEmail);
    const [formPhone, setFormPhone] = useState(initialValue.formPhone);
    const [formCountry, setFormCountry] = useState(initialValue.formCountry);
    const [formState, setFormState] = useState(initialValue.formState);
    const [formStreet, setFormStreet] = useState(initialValue.formStreet);
    const [formNumber, setFormNumber] = useState(initialValue.formNumber);
    const [formAvatar, setFormAvatar] = useState(initialValue.formAvatar);

    const filterUsers = async (filter: string ) => {
        const response = await fetch(`http://localhost:3333/users?q=${filter}`);
        const data = await response.json();
        setUsers( data );
    
    }

    return (
        <UserContext.Provider 
            value={{ isOpenModal, setIsOpenModal, 
                     selectedUser, setSelectedUser,
                     users, setUsers, 
                     filterUsers,
                     formName, 
                     setFormName,
                     formEmail, 
                     setFormEmail,
                     formPhone, 
                     setFormPhone,
                     formCountry, 
                     setFormCountry,
                     formState, 
                     setFormState,
                     formStreet, 
                     setFormStreet,
                     formNumber, 
                     setFormNumber,
                     formAvatar, 
                     setFormAvatar

                     }}>

            {isOpenModal && <UserModal />}
            {children} 
        </UserContext.Provider>
    )
}