import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'
import {Button} from './Components/Button';


function Header() {

    const [hidden, setHidden] = useState<boolean>(true)

    return (
        <div className={styles.container}>
            <Button hidden={hidden} callback={() => setHidden(!hidden)}/>
            {/*{hidden ? null :*/}
            {/*    <div className={hidden ? styles.hiddenLinks : styles.showLinks}>*/}
            {/*        <NavLink to="/pre-junior">Pre-junior</NavLink>*/}
            {/*        <NavLink to="/junior">Junior</NavLink>*/}
            {/*        <NavLink to="/junior-plus">Junior+</NavLink>*/}
            {/*    </div>*/}
            {/*}*/}
            <div className={hidden ? styles.hiddenLinks : styles.showLinks}>
                <NavLink to="/pre-junior">Pre-junior</NavLink>
                <NavLink to="/junior">Junior</NavLink>
                <NavLink to="/junior-plus">Junior+</NavLink>
            </div>

        </div>
    )
}

export default Header
