import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,ImageBackground,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.cover}>
            <Text style= {styles.cover}>{place}</Text>
            <Text style= {styles.cover}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>

            <ImageBackground source={require('./jo3o3l.jpg')} style={styles.backdrop}>  
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',

        width: '100%',
        height: '100%'
    },
    cover: {
        backgroundColor: 'black',        
        width: 'auto',
        height: 'auto',
        opacity: 15,
        fontSize: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        marginTop: 15,
        
    },
    medium: {
        marginTop: 32,
        fontSize: 15,
        color: 'white',
    }
   
}); 