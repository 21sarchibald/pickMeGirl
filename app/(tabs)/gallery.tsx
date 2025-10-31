// import { Image } from 'expo-image';
import { auth, db } from '@/firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Gallery() {

  interface Outfit {
    id: string;
    image: string;
    description: string;
    category: string;
    timestamp?: any;
  }

  const [loading, setLoading] = useState(true);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const user = auth.currentUser;

  useFocusEffect(
    useCallback(() => {
      if (!user) return;

      const outfitsReference = collection(doc(collection(db, "users"), user.uid), "outfits");
      const unsubscribe = onSnapshot(outfitsReference, (snapshot) => {
        const outfits = snapshot.docs.map(doc => {
        const data = doc.data();
          return {
          id: doc.id,
          image: data.image,
          description: data.description,
          category: data.category,
          timestamp: data.timestamp,
        };
      });
        setOutfits(outfits);

    });

    return () => unsubscribe();
  }, [user])
);

//   async function fetchOutfits() {

//     // Retrieve stored outfit photos from AsyncStorage.
//     const storedOutfits = await AsyncStorage.getItem('outfitPhotos');
//     if (storedOutfits) {
//       const parsed = JSON.parse(storedOutfits);
//       setOutfits(JSON.parse(storedOutfits));
//       console.log(parsed);
//     }
//     else {
//       console.log('No outfits stored');
//     }

//   }

//   // Re-render the gallery when user navigates to that screen.
//   useFocusEffect(
//     useCallback(() => {
//     fetchOutfits();
//   },[])
// );

  return (
    <SafeAreaView style={styles.container}>

      {/* Create scrollable display of images stored in AsyncStorage. */}
      <FlatList
        data={outfits}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.images} />
        )}
        keyExtractor={ (item, index) => index.toString()}

        // Display images in 2 columns.
        numColumns={2}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images: {
    height: 200,
    width: '48%',
    margin: '1%',

  },
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: 'black',
  },
});
