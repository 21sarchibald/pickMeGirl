import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

export default function AddOutFitPhoto() {
    const [image, setImage] = useState<string | null>(null);


    const pickFromGallery = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert('Permission required to access photos!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
        alert('Permission required to use camera!');
        return;
    }

    const result = await ImagePicker.launchCameraAsync({
        quality: 1,
    });

    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
};

return (
    <View style={styles.container}>
        <Button title="Take Photo" onPress={takePhoto} />
        <View style={{ height: 10}} />
        <Button title="Pick from Gallery" onPress={pickFromGallery} />
        
        {image && (
            <Image
            source={{ uri: image }}
            style={styles.image}
            />
        )}
        </View>
)

}

const styles = StyleSheet.create({
    container: { alignItems: 'center', padding: 20 },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
    },
});