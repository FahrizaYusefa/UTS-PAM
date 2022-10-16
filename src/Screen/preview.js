import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Preview = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://bit.ly/3ez5JNC',
                            judul: 'Sunroof (Official Music Video)'
                        })
                    }}
                >
                    <Image source={require('../assets/sunroof.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Sunroof (Official Music Video)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}
                    onPress={() => { 
                        navigation.navigate('Videoss', {
                            link: "https://bit.ly/3EJkZC8",
                            judul: 'Kucing Lucu'
                        })
                    }}
                >
                    <Image source={require('../assets/kucing.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Kucing Lucu</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://bit.ly/3eFbARr',
                            judul: 'Kupu-Kupu Indah'
                        })
                    }}
                >
                    <Image source={require('../assets/kupu.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Kupu-Kupu Indah</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

export default Preview

const styles = StyleSheet.create({

    menu: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        width: 180,
        margin: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    container: {
        //      marginHorizontal: 10,
        backgroundColor: 'white'
    },
    ikon: {
        width: 170,
        height: 170,
        borderRadius: 20,
    },
    teks: {
        textAlign: 'center'
    }
})