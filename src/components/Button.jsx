import { Button } from "bootstrap";
import { useNavigate, useSelector } from "react-router-dom";

const BackHome =() => {
    const navigate = useNavigate ();
    const selector = useSelector ((state) => state.getJob.favorite.length)
    return(
    <Button variant="success" onclick={() => navigate("/")}>Home</Button>
    <Button variant="success" onclick></Button>
    )
}
export default BackHome;
