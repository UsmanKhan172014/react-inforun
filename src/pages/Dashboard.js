import Cards from "../components/Cards";
import {useEffect, useState} from "react";
import axios from "axios";
import Welcome from "../components/Welcome";
import Auth from "../data/auth";
import localforage from "localforage";

function Dashboard() {
    const [data, setData] = useState([]);
    const [login, setLogin] = useState(false);
    // const auth= Auth.isAuthenticated;
    // console.log(auth);
    // setLogin(Auth.isAuthenticated);
    // // if (!login){
    // //     window.location.href = "/login";
    // // }

    const isAuthenticated=()=>{

        localforage.getItem("auth").then((value) => {
            console.log(value);

        })
        // console.log(localforage.getItem("auth"));
    }

    useEffect(() => {


            isAuthenticated()
            axios.get("https://superadmin.theskysportsnet.com/api/schedule/all")
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })



        }
        , []);


    return (
        <div className="container">
            <Welcome remaining={1333}/>
            <div className="row">
                {data.map((item, index) => {
                        return <Cards item={item} key={item.id}/>
                    }
                )}
            </div>
        </div>
    );
}

export default Dashboard;