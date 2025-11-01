import { auth, db } from '@/firebaseConfig';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
export default function GenerateOutfit() {

    interface Outfit {
        id: string;
        image: string;
        description: string;
        category: string;
        timestamp?: any;
      }

    const [image, setImage] = useState<string | null>(null);
    const [outfits, setOutfits] = useState<Outfit[]>([]);

    const user = auth.currentUser;
    

    const generateRandomPhoto = async () => {
        try {
            if (!user) return;

        const outfitsReference = collection(doc(collection(db, "users"), user.uid), "outfits");
        const snapshot = await getDocs(outfitsReference);

          const storedOutfits = snapshot.docs.map(doc => {
          const data = doc.data();
            return {
            id: doc.id,
            image: data.image,
            description: data.description,
            category: data.category,
            timestamp: data.timestamp,
          };
        });
          setOutfits(storedOutfits);
    
      // Pick random outfit from the list then set the image property equal to the image uri.
      
      if (storedOutfits.length > 0) {
      const randomNumber = Math.floor(Math.random() * storedOutfits.length);
      setImage(storedOutfits[randomNumber].image);
      }
    }
    catch (error) {
        console.log("Error getting random photo", error);
    }
        
    }

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
})