import AddOutFitPhoto from '@/components/AddOutfitPhoto';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <Image source={{ uri: 'https://as2.ftcdn.net/v2/jpg/00/82/08/89/1000_F_82088925_d3CGYKQCUl7ptkwX2uwjPYZKQ78Ieye8.jpg'}} style={styles.img} />
      
      <Text style={ [styles.title, styles.text, {color: '#9EA3F5'}] }>Pick Me Girl</Text>

      <Text style={{ marginTop: 10, marginBottom: 30, color: 'yellow' }}>This is my app!</Text>

      <SafeAreaView style={styles.titleContainer}>
        <AddOutFitPhoto />

      </SafeAreaView>

      <SafeAreaView style={styles.card}>
        <Text style={[styles.text, {color: 'darkblue'}]}>Card on the page! Oh yeah!</Text>
      </SafeAreaView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    // flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4pcx 4px rgba(0,0,0,0.1)',
  },
  img: {
    marginVertical: 10,
    width: 200,
    height: 200,
    borderRadius: 100
  },
  text: {
    fontFamily: 'CoveredByYourGrace',
    fontSize: 50,
    color: 'white'
  },
}
)