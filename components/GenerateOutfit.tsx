import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function GenerateOutfit() {
    const [image, setImage] = useState<string | null>(null);

    const generateRandomPhoto = async () => {
        try {

            // Get outfit list from AsyncStorage.
            const photos = await AsyncStorage.getItem('outfitPhotos');
            if (!photos) return null;
            const outfits = JSON.parse(photos);
            if (outfits.length === 0) return null;

            // Pick random outfit from the list then set the image property equal to the image uri.
            const randomNumber = Math.floor(Math.random() * outfits.length);
            setImage(outfits[randomNumber]);
        }
        catch {
            console.log("Error getting random photo");
        }
    }

    // Add a random photo to the homescreen when it loads.
    useEffect(() => {
        generateRandomPhoto();
    }, []);
        


return (
    <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image}/>}

        {/* Generate a new photo every time the user presses the "pick my outfit" button. */}
        <Pressable onPress={generateRandomPhoto} >
            <Text style={styles.button}>Pick my outfit</Text>
        </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
    container: { alignItems: 'center', padding: 20, height: 375 },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginTop: 20,
        padding: 20
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    }
});