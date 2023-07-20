const mylogger =  (req, res, next) => {
    console.log("my log: ", req.url) ;
    return next() ;

}

module.exports = mylogger ;
