import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useImperativeHandle, useCallback } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef( ({}, ref) => {

    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 }); 
    const active = useSharedValue(false); 

    const scrollTo = useCallback((destination) => {
        'worklet';
        active.value = destination !== 0;
        translateY.value = withTiming(destination, {duration: 500});
    });
     
     
    const isActive = useCallback(()=> {
         return active.value
    })
    useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo, isActive])
 
    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { y: translateY.value }; 
    }).onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        console.log(translateY.value)
    }).onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
            scrollTo(0)
        } 
        else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
            scrollTo(MAX_TRANSLATE_Y)
        
        }
    
    })

    const rBottomSheetStyle = useAnimatedStyle(() => {
        //instead of removing the border radius, make it have a slight spring when you go further than max_translate_y
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        );

         return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
         } 
    });
 


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
) 



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