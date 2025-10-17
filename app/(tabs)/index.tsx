import AddOutFitPhoto from '@/components/AddOutfitPhoto';
import GenerateOutfit from '@/components/GenerateOutfit';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      
      <Text style={ [styles.title, styles.text, {color: '#C5C8F9'}] }>Pick Me Girl</Text>

      <SafeAreaView style={styles.titleContainer}>
        <GenerateOutfit />
        <AddOutFitPhoto />

      </SafeAreaView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
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
    color: 'white'
  },
}
)