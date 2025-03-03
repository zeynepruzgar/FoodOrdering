import { View } from '@/src/components/Themed';
import products from '../../../assets/data/products';
import ProductListItem from '@/src/components/ProductsListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[5]}/>
      <ProductListItem product= {products[1]}/>
    </View>
  );
}
