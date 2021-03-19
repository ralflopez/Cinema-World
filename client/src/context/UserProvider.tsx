import { createContext, useState } from 'react';

export interface IUser {
    name: string,
    email: string,
}

interface IContext {
    user: IUser,
    setUser: any,
    token: string,
    setToken: any
}

export const UserContext = createContext({} as IContext);

function User({ children }: any) {
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<IUser>({name: '', email: ''});

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            { children }
        </UserContext.Provider>
    );
}

export default User;