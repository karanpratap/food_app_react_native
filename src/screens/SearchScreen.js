import React, {useState} from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [ term, setTerm ] = useState('')
    const [errorMessage, results, searchAPI] = useResults();  

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return <>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results!</Text> */}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Low Budget' />
                <ResultsList results={filterResultsByPrice('$$')} title='Middle Class' />
                <ResultsList results={filterResultsByPrice('$$$')} title='High Class' />
                <ResultsList results={filterResultsByPrice('$$$$')} title='Out of your league' />
            </ScrollView>
        </>
};

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red'
    }
});

export default SearchScreen;