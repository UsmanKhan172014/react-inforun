import {Link} from "react-router-dom";
import Meeting from "../pages/Meeting";

function Cards(props){
    const firstImage="https://superadmin.theskysportsnet.com/storage/"+ props.item.first_img;
    const secondImage= "https://superadmin.theskysportsnet.com/storage/"+props.item.second_img;

    return (
        <div className="col-md-4 mt-2">
            <div className="card">
                <div className="card-header text-center">
                    <h4> <span className="text-success">{props.item.first_team}</span>  vs <span className="text-primary">{props.item.second_team}</span> </h4>
                </div>
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-6">
                            <img className="img-fluid rounded-circle" src={firstImage} alt=""/>
                            {/*<img className="img-fluid rounded-circle" src={url+props.item.first_img} alt=""/>*/}
                        </div>

                        <div className="col-6">
                            <img className="img-fluid rounded-circle" src={secondImage} alt=""/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <h5>Date : {props.item.match_date}</h5>
                        </div>
                        <div className="col-md-6">
                            <h5>Time : {props.item.time}</h5>
                        </div>
                    </div>
                    <hr/>

                    <div className="row text-center">
                        <div className="col-md-12">
                            <h5>Match Venue : {props.item.venue}</h5>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    {/*<Meeting meetingNumber={props.item.meeting_id} password={props.item.password} />*/}
                    <Link to={"/meeting/"+props.item.meeting_id}>Join Meeting</Link>
                </div>
            </div>
        </div>
    )
}
export default Cards;