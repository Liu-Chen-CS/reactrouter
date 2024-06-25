import {useParams, useSearchParams} from "react-router-dom";

function Article(){
    const [params] = useSearchParams();
    const paramss = useParams();
    const id = params.get("id");
    const pid = paramss.id;
    return(
        <div>
            article
            my id is {id}
            my id is {pid}
        </div>
    );
}

export default Article;