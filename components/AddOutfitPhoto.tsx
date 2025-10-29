import firestore from '@react-native-firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from "../firebaseConfig";

export default function AddOutFitPhoto() {
    const userID = auth.currentUser?.uid
    const [image, setImage] = useState<string | null>(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const addImage = () => {
        firestore().collection("users").doc(userID).collection("photos").add({
            image: image,
            description: description,
            category: category,
            timestamp: firestore.FieldValue.serverTimestamp()
        })
        setShowConfirmation(true);
        setTimeout(() => {
            setImage(null);
            setShowConfirmation(false);
        }, 2000);
    }

    // const addImage = async (uri: string) => {
    //     try {
    //         // Get the current outfit photo list from AsyncStorage
    //         const currentOutfitPhotos = await AsyncStorage.getItem('outfitPhotos');
    //         const photoList = currentOutfitPhotos ? JSON.parse(currentOutfitPhotos) : [];

    //         // Add the photo uri to the list.
    //         photoList.push(uri);

    //         // Re-store the list into AsyncStorage.
    //         await AsyncStorage.setItem('outfitPhotos', JSON.stringify(photoList));
    //     }
    //     catch (error) {
    //         console.error('Error saving photo', error);
    //     }
        
    // };


    const pickFromGallery = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        // Warn the user if the app does not have access to their phone gallery.
        if (!permission.granted) {
            alert('Permission required to access photos!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        // If there is access to the Gallery, set the image, add it to the Gallery, then unset the image.
        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);
            // await addImage(uri);
            setShowOptions(false);
        }
    };

const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    
    // Warn the user if the app doesn't have access to the camera.
    if (!permission.granted) {
        alert('Permission required to use camera!');
        return;
    }

    const result = await ImagePicker.launchCameraAsync({
        quality: 1,
    });

    // If there is access to the camera, set the image, add it to the Gallery, then unset the image.
    if (!result.canceled) {
        const uri = result.assets[0].uri;
        setImage(uri);

        // await addImage(uri);
        setShowOptions(false);
    }

    };

return (
    <View style={styles.addPhotoContainer}>

{/* Display two options for adding a new photo to the app 
(taking a new photo or picking from the gallery). */}
        <Button title="Add Photo" onPress={() => setShowOptions(!showOptions)} />
            
        {showOptions && (
            <View style={styles.optionsContainer}>

            <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Text style={styles.buttonText}>TAKE NEW PHOTO</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.button} onPress={pickFromGallery}>
                <Text style={styles.buttonText}>PICK FROM GALLERY</Text>
            </TouchableOpacity>
            </View>
        )}
        
        {image && (
            <Modal transparent style={styles.modal}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                    <Image
                            source={{ uri: image }}
                            style={styles.image}
                        />
                    <TextInput
                    placeholder='Outfit Description'
                    value={description}
                    onChangeText={setDescription}
                    />
                    <TextInput
                    placeholder='Outfit Category'
                    value={category}
                    onChangeText={setCategory}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={addImage}>
                        <Text style={styles.modalButtonText}>ADD PHOTO</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )}


{/* Display image and confirmation message that it has been added to the app. */}
        {image && showConfirmation && (
            <Modal transparent style={styles.modal}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                        />
                        <Text style={styles.confirmationMessage}>Outfit added!</Text>
                    </View>
                </View>
            </Modal>
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
    },
    confirmationMessage: {
        color: 'black',
        fontWeight: 'bold',
        padding: 10,
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: '#C5C8F9',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    input: {
        height: 50,
        width: '80%',
        backgroundColor: '#C5C8F9',
        margin: 10,
        color: 'black',
        borderRadius: 10,
        padding: 5,
      },
      modalButton: {
          margin: 15,
          // backgroundColor: 'white',
          padding: 7,
          alignItems: 'center',
          fontWeight: 'bold',
          backgroundColor: '#3E4190',
          borderRadius: 10,
      },
      modalButtonText: {
          fontWeight: 600,
          color: 'white',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
      },
});