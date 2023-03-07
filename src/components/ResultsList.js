import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            data={results} 
            keyExtractor={(result => result.id)} 
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                    <ResultDetail result={item} />
                </TouchableOpacity>;
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);