// import { ZoomMtg } from '@zoomus/websdk';
//
// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.9.0/lib', '/av');
//
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

function Meeting(){
    // var signatureEndpoint = 'http://172.105.150.180:4500/';
    // const sdkKey = 'vxJpiQjWJ4W9Z7218bGtTUFqhQC9gmtNpmTC';
    // var meetingNumber = '5141559660';
    // var role = 0;
    // var leaveUrl = 'https://example.com/';
    // var userName = 'Test';
    // var userEmail = 'usmankhan7419@gmail.com';
    // var passWord = '1234';
    //
    // var registrantToken = ''

    function getSignature(e) {
        // e.preventDefault();
        //
        // fetch(signatureEndpoint, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         meetingNumber: meetingNumber,
        //         role: role
        //     })
        // }).then(res => res.json())
        //     .then(response => {
        //
        //         console.log(response)
        //         startMeeting(response.signature)
        //     }).catch(error => {
        //     // console.error(error)
        //     console.log(error)
        // })

        // startMeeting(signatureEndpoint)
    }

    function startMeeting(signature) {
        // document.getElementById('zmmtg-root').style.display = 'block'
        //
        // ZoomMtg.init({
        //     leaveUrl: leaveUrl,
        //     success: (success) => {
        //         console.log(success)
        //
        //         ZoomMtg.join({
        //             signature: signature,
        //             meetingNumber: meetingNumber,
        //             userName: userName,
        //             sdkKey: sdkKey,
        //             userEmail: userEmail,
        //             passWord: passWord,
        //             tk: registrantToken,
        //             success: (success) => {
        //                 console.log(success)
        //             },
        //             error: (error) => {
        //                 console.log(error)
        //             }
        //         })
        //
        //     },
        //     error: (error) => {
        //         console.log(error)
        //     }
        // })
    }


    return (
        <div className="App">
            <main>
                <h1>Zoom Meeting SDK Sample React</h1>

                {/*<button onClick={getSignature}>Join Meeting</button>*/}
            </main>
        </div>
    );


}
export default Meeting;