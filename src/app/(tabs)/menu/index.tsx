import { FlatList, View } from 'react-native';
import products from '../../../../assets/data/products';
import ProductListItem from '../../../../src/components/ProductsListItem';

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
