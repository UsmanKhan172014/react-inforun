import {Link} from "react-router-dom"
import Auth from "../data/auth"
import localforage from "localforage";
import axios from "axios";
import {useState} from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // console.log(Auth.isAuthenticated);
    async function signIn(e) {

        e.preventDefault();

        const response =await axios.post("https://superadmin.theskysportsnet.com/api/login", {
            username: username,
            password: password,
            mac: "00:00:00:00:00:00"
        })
        // console.log(response?.data[0]?.error);

        if (response?.data[0]?.error){
            alert(response?.data[0]?.message)
        }
        else{
            //current date
            const date = new Date();
            const expiry = new Date(response?.data?.customer?.expiry)
            console.log(expiry);
            //difference in days
            const diff = Math.ceil((expiry - date) / (1000 * 60 * 60 * 24));
            console.log(diff);

            console.log((expiry-date)/(1000*60*60*24));
            const days=(expiry-date)/(1000*60*60*24);
            //split whole and decimal part from days
            const daysLeft= Math.floor(days);
            console.log(daysLeft);


            //store decimal from days in new variable

            const decimal=days%1;
            console.log(decimal);
            //convert decimal to hours
            const hours=decimal*24;
            //slice hours upto two decimal places
            const hours2=hours.toFixed(2);
            console.log(hours2);


            console.log(hours);


            //difference in days and hours
            // const diffInHours = Math.ceil((expiry - date) / (1000 * 60 * 60));
            // console.log(diffInHours);
            console.log(response?.data?.customer);
            Auth.isAuthenticated=true;
            Auth.user.id=response?.data?.customer?.id;
            Auth.user.name=response?.data?.customer?.name;
            Auth.user.remainingDays=response?.data?.customer?.expiry;

        }

        // if (response.data.status === "success") {
        //
        // }

        // Auth.isAuthenticated = true;
        // Auth.user.name = "John Doe";
        // Auth.user.role = "admin";
        // Auth.user.id = 1;
        // Auth.user.remainingDays = 1333;
        // // console.log(Auth.isAuthenticated);
        // //
        // localforage.setItem("auth", Auth).then((value) => {
        //     console.log(value);
        // });
        //
        //
        // console.log(localforage.getItem("auth"));
        // // window.location.href = "/";
    }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
            <div className=" text-center">
            <h1>Login</h1>

            </div>
          
          <form>
            <div className="form-group">
              <label >Email address</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mt-2 text-center">
              {/* <button type="submit" className="btn btn-primary">
                Login
              </button> */}


                <button className="btn btn-primary" onClick={signIn}>
                    Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
