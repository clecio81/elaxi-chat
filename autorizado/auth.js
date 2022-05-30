const axios = require("axios")
exports.user = (req, res, next) =>{
	axios.get('https://elaxi-api.web.app/auth')
  .then(function (response){
  	if(response.data.displayName){
  	next();
  	}
}).catch(function (error) {
    // handle error
    res.send(error);
  })
}