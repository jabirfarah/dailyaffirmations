import React from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';
import PagerView from 'react-native-pager-view';
import AffirmationFetch from './affirmationFetch';
import * as Sharing from 'expo-sharing';



const MyPager = () => {

  const text = "You can do it, I believe in you!"

  const share = async () => {
      try {
          const result = await Share.share({
              message: text
          });
          if (result.action === Share.sharedAction) {
              if (result.activityType) {
                  // shared with activity type of result.activityType
              } else {
                  // shared
              }
          } else if (result.action === Share.dismissedAction) {
              // dismissed
          }
      
      } catch(error) {
        console.error(error)
      }
  }

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0} orientation={"vertical"}>
        <View style={styles.page} key="1">
          <Text style={styles.text}><AffirmationFetch/>.</Text>
          <Button title='SHARE BUTTON' onPress={share}></Button>
        </View>
        <View style={styles.page} key="2">
          <Text style={styles.text}><AffirmationFetch/>.</Text>
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.text}><AffirmationFetch/>.</Text>
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
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default MyPager;