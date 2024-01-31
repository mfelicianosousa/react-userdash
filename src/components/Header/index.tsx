import { memo } from 'react';
import './styles.scss';

export function HeaderComponent(){
    return (
        <header>
            <h1>UserDash</h1>
        </header>
    )
}

export const Header = memo(HeaderComponent);
