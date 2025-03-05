import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { Product } from '../types';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
	return (
    <View style={styles.container}>
      <Image 
      source ={{ uri: product.image || defaultPizzaImage}} // if there is no image, use defaultPizzaImage
      style={styles.image}
      resizeMode='contain'
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}TL</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({

  container:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1, // take the whole space, share equally 2 items in a row, if we delete one of them, the other will take the whole space
    maxWidth: '50%', // 2 items in a row, to solve the problem of 1 item in a row, we use maxWidth
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
