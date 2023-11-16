import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import AffirmationFetch from './affirmationFetch';

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0} orientation={"vertical"}>
        <View style={styles.page} key="1">
          <Text><AffirmationFetch/></Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text><AffirmationFetch/></Text>
        </View>
        <View style={styles.page} key="3">
          <Text><AffirmationFetch/></Text>
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
});

export default MyPager;