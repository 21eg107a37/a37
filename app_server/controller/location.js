/* GET 'home' page */
module.exports.homelist =function(req,res){
    res.render('location-list',{title: 'Home'});
};

/* GET 'Location info' page */
module.exports.locationInfo =function(req,res){
    res.render('location-info',{title: 'Location info'});
};

/* GET 'Location info' page */
module.exports.locationInfo2 =function(req,res){
    res.render('location-info2',{title: 'Location info2'});
};

/* GET 'Location info' page */
module.exports.locationInfo3 =function(req,res){
    res.render('location-info3',{title: 'Location info3'});
};



/* GET 'Add review' page */
module.exports.addReview =function(req,res){
    res.render('loaction-review-form',{title: 'Add review'});
};