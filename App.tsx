import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const RectangleAnimation = () => {
  const translateY = new Animated.Value(0);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, { toValue: 100, duration: 1000 }),
        Animated.timing(translateY, { toValue: 0, duration: 1000 }),
      ])
    ).start();
  }, []);

  const animatedStyle = {
    transform: [{ translateY: translateY }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.rectangle, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  rectangle: {
    borderRadius: 10,
    width: 300,
    height: 150,
    backgroundColor: 'blue',
    position: 'absolute',
    top: '50%',
    marginTop: -25,
  },
});

export default RectangleAnimation;