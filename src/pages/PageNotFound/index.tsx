import { Link } from "react-router-dom";
interface IPageNotFound{

}

const PageNotFound: React.FunctionComponent<IPageNotFound> = ()=>{
    return<div>
        <h1>Page Not Found</h1>
        <div><Link to={'/login'}>Login</Link></div>
    </div>
}

export default PageNotFound;