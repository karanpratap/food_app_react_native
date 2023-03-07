import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResulstsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if(!result) {
        return null;
    }

    return <View style={styles.container}>
        <FlatList 
            data={result.photos} 
            keyExtractor={(photo => photo)} 
            renderItem={({item}) => {
                return <Image style={styles.image} source={{ uri: item }}/>;
            }}
        />
        <Text style={styles.textStyle}>Images for {result.name}</Text>
    </View>
};

const styles = StyleSheet.create({
    image: {
        // height: 120,
        // width: 250,
        // flex: 1,
        alignSelf: 'center',
        height:180,
        width: 320,
        borderRadius: 8,
        // marginLeft: 20,
        marginBottom: 20
    },
    container: {
        marginTop: 20
    },
    textStyle: {
        fontWeight: 'bold',
        alignContent: "center",
        alignSelf: 'center'
    }
});

export default ResulstsShowScreen;
