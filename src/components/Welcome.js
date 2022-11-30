function Welcome(props){
    return (
        <div className="row text-center mt-4">
            <div className="col-md-12">
                <h1>Welcome to Inforun Web</h1>
            </div>

            <div className="col-md-12">
                <h3>Remaining Days : {props.remaining}</h3>
            </div>
            <hr/>
        </div>
    )
}
export  default Welcome;
