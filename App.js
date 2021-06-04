import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ALL_PRODUCTS_API_URL } from './components/API/API';
import ProductItem from './components/ProductItem/ProductItem';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function loadData(){
      const response = await fetch(ALL_PRODUCTS_API_URL);
      const data = await response.json();
      setProducts(data);
      return data;
    }
    loadData();
  },[])

  return (
    <View style={styles.container}>

      <ProductItem />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
