// import { Image } from 'expo-image';
import { auth, db } from '@/firebaseConfig';
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  // const [showModal, setShowModal] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const user = auth.currentUser;
  const userID = auth.currentUser?.uid
  
  const editOutfit = async (outfitId) => {
    console.log("Edit button worked");
    if (!userID) {
      console.log("No user logged in");
      return;
    }
    const outfitRef = doc(db, "users", userID, "outfits", outfitId)

    await updateDoc(outfitRef, {
      description: description,
      category: category,
    }
      
    );
  }


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
          <TouchableOpacity style={styles.images} onPress={() => {
            setSelectedOutfit(item);
            setDescription(item.description);
            setCategory(item.category)
          }
          }>
          <Image source={{ uri: item.image }} style={styles.galleryImage}/>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}

        // Display images in 2 columns.
        numColumns={2}
        />

  {selectedOutfit && (
            <Modal transparent style={styles.modal}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                    <Image
                            source={{ uri: selectedOutfit.image }}
                            style={styles.modalImage}
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
                    <TouchableOpacity style={styles.modalButton} onPress={() => editOutfit(selectedOutfit)}>
                        <Text style={styles.modalButtonText}>EDIT OUTFIT</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )}


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
modalImage: {
  width: 200,
  height: 200,
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 20
},
galleryImage: {
  width: '100%',
  height: '100%',
  borderRadius: 10,
},
});
