const apiKey = 'rwuMLyVMsBH2G5-umwq_SEbeelM37mmUzw42RToyrOhjGvuLEoWWpFhxp4Bzbf8DnI5XaTTnvh287oMziNOKiD6ZkJ1gCWhnR4yOZYvFL1y3d3_TGVXG2kRR2OzVXHYx';
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers : {Authorization : `Bearer ${apiKey}`}
            }).then(
                (response) => {return response.json();
                }).then((jsonResponse) => {
                    if(jsonResponse.businesses){
                        return jsonResponse.businesses.map((business) => {
                            return {
                                id : business.id,
                                imageSrc: business.image_url,
                                name : business.alias,
                                address : business.location.address1,
                                city : business.location.city,
                                state : business.location.state,
                                zipCode : business.location.zip_code,
                                category : business.categories[0].title,
                                rating : business.rating,
                                reviewCount : business.review_count,
                            }
                        });
                    }
throw new Error('Request failed!');
                })

    }
};

export default Yelp;
