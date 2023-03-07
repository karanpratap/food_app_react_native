import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer EFSq07FlfX1nWBr-q3t6admfsyQVAnxs4DiV-zCWpoV0qaEZuBJe4b-cGfFO4VDy6HjPdWpheaVQOoXRLUI0QzUZqacDMewNfw8bVYzxFtBUG2tsLrkXoJ44sFwEZHYx'
    }
});