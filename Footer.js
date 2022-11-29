import { useState, useEffect} from "react";
const Footer = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return (
        <footer>
            <div className="Timer">Strona działa już {count} sekund!</div>
            
        </footer>
    )
}

export default Footer;