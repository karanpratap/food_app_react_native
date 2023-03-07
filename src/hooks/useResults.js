import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [ results, setResults ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState('')
    console.log('call')
    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San Jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('')
        }
        catch(error) {
            console.log(error)
            setErrorMessage('Something went wrong!')
        };
    }
 
    useEffect(() => {
        searchAPI('pasta')
    }, []);

    return [errorMessage, results, searchAPI];
};