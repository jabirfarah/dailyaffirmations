import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import AffirmationFetch from './affirmationFetch';

export default function App() {
  const image = {uri: "https://external-content.duckduckgo.com/iu/?u=https://wallpaperaccess.com/full/1155299.png&f=1&nofb=1&ipt=0be5032c3fda98333cb1b4a215856ea09189f5f2299878ee30507c33165b3839&ipo=images"}
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>
          <AffirmationFetch/>
          
        </Text>
        <Text style={styles.buttons}>
          <Button title="❤️" />
          <Button title="🔖" />
          <Button title="📥" />
        </Text>
      </ImageBackground>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
