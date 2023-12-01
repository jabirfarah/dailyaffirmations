import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';
import PagerView from 'react-native-pager-view';
import * as Sharing from 'expo-sharing';

const AffirmationFetch = () => {

  const [affirmation, setAffirmation] = useState([])

  const today = new Date();
  const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  console.log(midnight)


  useEffect(() => {
      const something = async () => {
          const res = await fetch('https://www.affirmations.dev/');
          const json = await res.json();
          const jsonParse = await JSON.parse(JSON.stringify(json));
          setAffirmation(jsonParse.affirmation);
          for (i = 0; i < 3; i++) {
            setAffirmation(...affirmation, jsonParse.affirmation);
            console.log(affirmation);
            // make it so that a different affirmation pops up now
            
            console.log(jsonParse);
          }
      }
     something();
  }, [])
  console.log(affirmation);


return (
  <Text>{affirmation}</Text>
)
}

const MyPager = () => {

  const text = "You can do it, I believe in you!"

  const share = async () => {
      try {
          const result = await Share.share({
              message: text
          });
          if (result.action === Share.sharedAction) {
              if (result.activityType) {
              } else {
              }
          } else if (result.action === Share.dismissedAction) {
             console.log("dismissed");
          }
      
      } catch(error) {
        console.error(error)
      }
  }


  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0} orientation={"vertical"}>
        <View style={styles.page} key="1">
          <Text style={styles.text}>{AffirmationFetch.affirmation}.</Text>
          <Button title='SHARE BUTTON' onPress={share}></Button>
        </View>
        <View style={styles.page} key="2">
          <Text style={styles.text}><AffirmationFetch/>.</Text>
          <Button title='SHARE BUTTON' onPress={share}></Button>
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.text}><AffirmationFetch/>.</Text>
          <Button title='SHARE BUTTON' onPress={share}></Button>
        </View>
      </PagerView>
    </View>

  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    backgroundColor: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default MyPager;