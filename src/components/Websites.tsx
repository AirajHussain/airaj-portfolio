import { useContext, useState } from 'react';
import { styles } from "../styles";
import { context } from "../App";
import { websites } from '../constants';
import { dropdown, github, popout } from "../assets";

const Websites = () => {
    const { isLight } = useContext(context);
    const [ active, setActive ] = useState<number>(2); 

    return (
        <div id="websites" className="mt-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
        
        </div>
    )
}

export default Websites;