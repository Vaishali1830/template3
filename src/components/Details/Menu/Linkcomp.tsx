import React from "react"
import { Link } from "react-router-dom";

interface LinkcompProps {
    title : string 
    route : string
}

export const Linkcomp:React.FC<LinkcompProps> = ({ title, route  }) => {
    return (
        <div>
            <Link to={route}> 
                <p className="anchor-text text-lg">{title}</p>    
            </Link>
        </div>
    )
}