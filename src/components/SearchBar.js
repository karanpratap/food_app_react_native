import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                style={styles.inputStyle} 
                value={term}
                onChangeText={newTerm => {onTermChange(newTerm)}}
                onEndEditing={onTermSubmit}
            />
        </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#EAEAEA',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 10
        // borderColor: 'black',
        // borderWidth: 3
        // alignItems: 'flex-start',
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;