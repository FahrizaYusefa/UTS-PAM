import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Preview = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                {/* smiling baby */}
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://www.videvo.net/video/cool-fun-kid-laughing-and-smiling-lying-in-bed-holding-a-finger-sveogo-father-a-boy-of-two-months/518448/ ',
                            judul: 'A cute of Me'
                        })
                    }}
                >
                    <Image source={require('../assets/baby.png')} style={styles.ikon} />
                    <Text style={styles.teks} >A cute of Me</Text>
                </TouchableOpacity>
                
                {/* keluarga */}
                <TouchableOpacity style={styles.menu}
                    onPress={() => { 
                        navigation.navigate('Videoss', {
                            link: "https://joy.videvo.net/videvo_files/video/free/video0469/large_watermarked/_import_6174f7175a78a2.67231114_preview.mp4",
                            judul: 'Keluarga Bahagia'
                        })
                    }}
                >
                    <Image source={require('../assets/happy-family.jpg')} style={styles.ikon} />
                    <Text style={styles.teks} >Keluarga Bahagia</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                {/* kupu-kupu */}
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://cdn.videvo.net/videvo_files/video/premium/video0035/large_watermarked/butterfly_world07_preview.mp4',
                            judul: 'Kupu-Kupu Indah'
                        })
                    }}
                >
                    <Image source={require('../assets/kupu-kupu.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Kupu-Kupu Indah</Text>
                </TouchableOpacity>
                
                {/* Buaya */}
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://www.videvo.net/video/an-alligator-thrashes-underwater-and-catches-a-fish/645055/',
                            judul: 'Buaya Pemangsa'
                        })
                    }}
                >
                    <Image source={require('../assets/buaya.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Buaya Pemangsa</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                {/* puppies */}
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://cdn.videvo.net/videvo_files/video/premium/video0223/small_watermarked/09_Lena_lanny_slow_294_happy_box_preview.webm',
                            judul: 'Puppies in Box'
                        })
                    }}
                >
                    <Image source={require('../assets/puppies.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Puppies in Box</Text>
                </TouchableOpacity>
                
                {/* vacation */}
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Videoss', {
                            link: 'https://www.videvo.net/video/car-going-through-the-beatiful-forest-aerial-shooting/801258/',
                            judul: 'Beautiful View'
                        })
                    }}
                >
                    <Image source={require('../assets/vacation.png')} style={styles.ikon} />
                    <Text style={styles.teks} >Beautiful View</Text>
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
        marginTop: 10,
        textAlign: 'center'
    }
})