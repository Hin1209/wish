import "./Matelist.css";
import axios from 'axios';

function Matelist() {
    return (
        axios.get("/getFriendsList", {
            params :{
                id:331232
            }
        })
        .then((response) => {
            console.log(response);
        }) 
    );
 }
 
 export default Matelist;