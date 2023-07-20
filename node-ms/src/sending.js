const stateData = require('../data/state-details') ;



const  sendInformation = (req, res, next) => {

	const stateName = req.params.stateName;
    let searchStatus = 9 ;
    
    stateData.map((info, idx)=> {
        // console.log(info) ;

        if (stateName.toLowerCase() === info.state.toLowerCase()) {
            searchStatus = 1;
			res.send(info);
        } else{
            searchStatus = 0 ;
            // console.log("not found");
        }

    });

    if (searchStatus == 0) { res.send({searchStatus: "no data found"}); }
}

module.exports = sendInformation ;