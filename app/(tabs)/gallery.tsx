// import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Gallery() {
  const [outfits, setOutfits] = useState<string[]>([]);

  async function fetchOutfits() {
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

  useEffect(() => {
    fetchOutfits();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={outfits}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.images} />
        )}
        keyExtractor={ (item, index) => index.toString()}
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
