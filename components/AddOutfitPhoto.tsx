import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AddOutFitPhoto() {
    const [image, setImage] = useState<string | null>(null);
    const [showOptions, setShowOptions] = useState(false);

    const addImage = async (uri: string) => {
        try {
            const currentOutfitPhotos = await AsyncStorage.getItem('outfitPhotos');
            const photoList = currentOutfitPhotos ? JSON.parse(currentOutfitPhotos) : [];
            photoList.push(uri);
            await AsyncStorage.setItem('outfitPhotos', JSON.stringify(photoList));
        }
        catch (error) {
            console.error('Error saving photo', error);
        }
        
    };


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
            const uri = result.assets[0].uri;
            setImage(uri);
            await addImage(uri);
            setShowOptions(false);
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
        const uri = result.assets[0].uri;
        setImage(uri);
        await addImage(uri);
        setShowOptions(false);
    }

    };

return (
    <View style={styles.addPhotoContainer}>
        <Button title="Add Photo" onPress={() => setShowOptions(!showOptions)} />

        {showOptions && (
            <View style={styles.optionsContainer}>
                {/* <View style={{ height: 10}} /> */}
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Text style={styles.buttonText}>TAKE NEW PHOTO</Text>
            </TouchableOpacity>
            
            {/* <View style={{ height: 10}} /> */}
            <TouchableOpacity style={styles.button} onPress={pickFromGallery}>
                <Text style={styles.buttonText}>PICK FROM GALLERY</Text>
            </TouchableOpacity>
            {/* <Button title="Take New Photo" onPress={takePhoto} /> */}
            
            {/* <Button title="Pick from Gallery" onPress={pickFromGallery} /> */}
            </View>
        )}
        
        
        {image && (
            <Image
            source={{ uri: image }}
            style={styles.image}
            />
        )}
        </View>
)};

const styles = StyleSheet.create({
    addPhotoContainer: { alignItems: 'center', padding: 20, height: 100 },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        margin: 3,
        backgroundColor: 'white',
        height: 30,
        padding: 7,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    buttonText: {
        fontWeight: 600,
        color: '#3E4190'
    },
    optionsContainer: {
        padding: 5,
    }
});