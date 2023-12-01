import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {

    const translateY = useSharedValue(0)

    const gesture = Gesture.Pan().onUpdate((event) => {
        console.log(event.translationY)
        translateY.value = event.translationY
    })

  return ( 
    <>
         <GestureDetector gesture={gesture}>
            <Animated.View style={styles.bottomSheetContainer}>
                <View style={styles.line}/>

            </Animated.View>
        </GestureDetector>
       
    </>
  )
}



const styles = StyleSheet.create({

    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT / 1.5,
        borderRadius: 25
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'gray',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 50
    },
})

export default BottomSheet