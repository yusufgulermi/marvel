
import { Link } from "react-router-dom"

const CharacterCard = ({ data }) => {
    return (
        <Link to={`/${data.id}`} >
            <div className="content cursor">
                <img src={data.thumbnail.path +"."+ data.thumbnail.extension} alt=""  className="img"/>
                <p>
                    {data.name}
                </p>
            </div>
            
        </Link>
       
    )
}

export default CharacterCard
