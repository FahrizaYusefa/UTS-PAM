import * as React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Videoss({ route, navigation }) {
    const { link, judul } = route.params;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    // console.log(link)
    return (
        <View style={styles.container}>

            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: link,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Text style={styles.title}>{judul}</Text>
            <View >
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                >
                    <Text style={styles.teks}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    video: {
        width: '100%',
        height: 300
    },
    buttons: {
        padding: 20,
        backgroundColor: '#171717',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    teks: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    title: {
        textAlign: 'center',
        fontSize: 18
    }
}); 