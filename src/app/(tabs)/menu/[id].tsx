import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import {Stack, useLocalSearchParams } from "expo-router";
import products from '../../../../assets/data/products';
import Button from '../../../../src/components/Button';
import { PizzaSize } from '../../../types';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.error('Adding to cart, size: ', selectedSize);
  };

  if (!product) {
    return (<Text>Product not found</Text>)
  }

  return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: product.name }} />
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        
        <Text style={styles.subtitle}>Select size</Text>
        <View style={styles.sizes}>
          {sizes.map((size) => (
            <Pressable
              onPress={() => setSelectedSize(size)}
              key={size}
              style={[
                styles.size,
                {
                  backgroundColor: size === selectedSize ? 'gainsboro' : 'white',
                },
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  { color: size === selectedSize ? 'black' : 'gray' },
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <Button onPress={() => addToCart()} text="Add to cart" />
      </View>
    );
  };
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },

  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});

export default ProductDetailsScreen;