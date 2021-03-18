import { createContext, useState } from 'react';

export interface IUser {
    name: string,
    email: string,
}

interface IContext {
    user: IUser,
    setUser: any
}

export const UserContext = createContext({} as IContext);

function User({ children }: any) {
    const [user, setUser] = useState<IUser>({name: '', email: ''});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
}

export default User;