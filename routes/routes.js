/**
 * Created by raghuveer on 6/18/2016.
 */
exports.home = function(req, res){
    res.render('home',{headline:"Every city has something to say",title:'iLoveMyCity'});

};

exports.city = function(req,res){
    var cityName = req.params.city;
    var title,heading;
    var imagecount=4;

    if(cityName === 'berlin'){
        title="Berlin";
        heading = "where Love is in the air"
    }
    else if(cityName === 'paris'){
        title = "Paris";
        heading = "Paris: Good Talkers are only found in paris";
    }
    else if(cityName === 'madrid'){
        title = "Madrid";
        heading = "Madrid: Buzz beautiful architecture and football"
    }
    else if(cityName === 'London'){
        title = "London";
        heading = "London: Sparkling, Still, Food, Gorgeous"
    }

    else if(cityName === 'newyork'){
        title = "New York";
        heading = "New York: come to newyork to become someone new";
        imagecount = 6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imagecount
    });
};