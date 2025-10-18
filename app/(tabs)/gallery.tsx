// import { Image } from 'expo-image';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Gallery() {
  const [outfits, setOutfits] = useState<string[]>([]);

  async function fetchOutfits() {

    // Retrieve stored outfit photos from AsyncStorage.
    const storedOutfits = await AsyncStorage.getItem('outfitPhotos');
    if (storedOutfits) {
      const parsed = JSON.parse(storedOutfits);
      setOutfits(JSON.parse(storedOutfits));
      console.log(parsed);
    }
    else {
      console.log('No outfits stored');
    }

  }

  // Re-render the gallery when user navigates to that screen.
  useFocusEffect(
    useCallback(() => {
    fetchOutfits();
  },[])
);

  return (
    <SafeAreaView style={styles.container}>

      {/* Create scrollable display of images stored in AsyncStorage. */}
      <FlatList
        data={outfits}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.images} />
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
