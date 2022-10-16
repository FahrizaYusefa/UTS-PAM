import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function Home() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState('');

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setData(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.teks}>Arahkan kamera ke QR code.</Text>
            <View style={styles.kamera}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
            {scanned && (
                <View>
                    <TouchableOpacity style={styles.button}

                        onPress={() => { setScanned(false) }}
                    >
                        <Text style={styles.teks2}>Scan Lagi</Text>
                    </TouchableOpacity>
                </View>
            )}
            <Text></Text>
            <Text style={styles.teks}> Hasil scan pesan akan muncul dibawah: </Text>
            {scanned && (
                <View style={styles.box}>
                    <Text> {data} </Text>
                </View>
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },
    kamera: {
        padding: 150
    },
    teks: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16,
        fontWeight: '700',
        color: '#3b3b3b'
    },
    button: {
        padding: 20,
        backgroundColor: '#171717',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    teks2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
}); 