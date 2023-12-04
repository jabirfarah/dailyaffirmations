import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = () => {

    const translateY = useSharedValue(0)

    const context = useSharedValue({ y: 0 }); 

    const gesture = Gesture.Pan().onStart(() => {
        context.value = { y: translateY.value }; 
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y );

        console.log(translateY.value)
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
         return {
            transform: [{ translateY: translateY.value }],
            
         } 
    });
 
    useEffect(() => {
        translateY.value = withSpring(-SCREEN_HEIGHT /3, {damping: 50, duration: 1000 })
    }, [])

  return ( 
    <>
         <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle ]}>
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
        top: SCREEN_HEIGHT,
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