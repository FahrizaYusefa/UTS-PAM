import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Beranda = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>QR & Video App</Text>
            </View>

            <View style={styles.content}>

                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => { navigation.navigate('Scanner') }}>
                    <Image source={require('../assets/qr.png')} style={styles.ikon} />
                    <Text style={styles.teks}>Scan Pesan Rahasia (QR)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => { navigation.navigate('Preview') }}>
                    <Image source={require('../assets/video.png')} style={styles.ikon} />
                    <Text style={styles.teks}>  Video Player</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Beranda;

const styles = StyleSheet.create({
    ikon: {
        width: 170,
        height: 170,
        borderRadius: 20,

    },
    menu: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container: {
        //      marginHorizontal: 10,
        backgroundColor: 'white'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -160
    },
    teks: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4e4f4f',
        textAlign: 'center'
    },
    box: {
        backgroundColor: '#b29e9d',
        height: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    title: {
        fontSize: 38,
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        paddingTop: 50,
    }
})