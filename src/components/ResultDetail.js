import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        borderRadius: 8,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 20
    }
});

export default ResultDetail;