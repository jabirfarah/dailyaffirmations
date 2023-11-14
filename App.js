import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import AffirmationFetch from './affirmationFetch';
import { Link } from 'expo-router';


 function App() {
  const image = {uri: "https://external-content.duckduckgo.com/iu/?u=https://wallpaperaccess.com/full/1155299.png&f=1&nofb=1&ipt=0be5032c3fda98333cb1b4a215856ea09189f5f2299878ee30507c33165b3839&ipo=images"}
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>
            <AffirmationFetch/>
          </Text>
          <Text style={styles.buttons}>
            <Button title="❤️"/>
            <Button title="🔖"/>
            <Button title="📥"/>
          </Text>
          <Text>
          <Link href={""} isReady="true">GO TO THE SETTINGS PAGE</Link>
        </Text>
        <StatusBar style="auto" />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,

  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 30,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: "flex-end",
    borderWidth: 2,
    alignContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "auto"


  },
});

export default App;