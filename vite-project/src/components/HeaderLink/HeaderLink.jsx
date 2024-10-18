import './HeaderLink.css'
import {Link} from "react-router-dom";

export default function HeaderLink(props) {
    return (
        <>
            <div className='header-link'>
                <Link to={props.url}>{ props.title }</Link>
            </div>
            {/*<a href="#" className='header-link'> { props.title }</a>*/}
        </>
    )
}