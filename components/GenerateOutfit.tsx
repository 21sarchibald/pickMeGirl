import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

export default function GenerateOutfit() {
    const [image, setImage] = useState<string | null>(null);

    const generateRandomPhoto = async () => {
        try {
            const photos = await AsyncStorage.getItem('outfitPhotos');
            if (!photos) return null;
            const outfits = JSON.parse(photos);
            if (outfits.length === 0) return null;

            const randomNumber = Math.floor(Math.random() * outfits.length);
            setImage(outfits[randomNumber]);
        }
        catch {
            console.log("Error getting random photo");
        }
    }

    useEffect(() => {
        generateRandomPhoto();
    }, []);
        


return (
    <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image}/>}
        <Button title="Pick my outfit for me" onPress={generateRandomPhoto} />
        </View>
    );
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