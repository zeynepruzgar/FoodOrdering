import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import products from '../../../assets/data/products';
const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source ={{ uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}(Yok böyle bi lezzet!)</Text>
      <Text style={styles.price}>{product.price}TL</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },

  image:{
    width: '100%',
    aspectRatio:1,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: { 
    fontSize: 18, 
    fontWeight: '600',
    marginVertical: 10
  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  }

  
});
