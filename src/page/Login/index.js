import {Link, useNavigate} from "react-router-dom";

const Login = ()=>{
    const navigate= useNavigate();
    return(
        <div>
            Login
            <Link to={"/article"}>To article</Link>
            <button onClick={()=>{navigate("/article")}}>TO ARTICLE</button>
            <button onClick={()=>{navigate("/article?id=123456&name=liuchen")}}>params</button>
            <button onClick={()=>{navigate("/article/1234567")}}>path variable</button>

        </div>
    );
}

export default Login;