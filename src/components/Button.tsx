import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Button;
