exports.home = function(req, res){
    res.render('home');
};

exports.about = function(req, res){
    res.render('about');
};

exports.products = function(req, res){
    res.render('products');
};

exports.protectfx = function(req, res){
    res.render('protectfx');
};

exports.demo_register = function(req, res){
    console.log(req.body);
    res.render('demo_register', {
        first_name : req.body.first_name,
        last_name : req.body.surname
    });
};

exports.contact = function(req, res){
    res.render('contact');
};