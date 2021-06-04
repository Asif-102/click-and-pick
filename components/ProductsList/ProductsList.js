import React from 'react';
import { View, SafeAreaView, ScrollView, FlatList, Dimensions } from 'react-native';
import styles from './style';
import cars from './Products';
import ProductItem from '../ProductItem/ProductItem';

const CarsList = (props) => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={cars}
                    renderItem={({ item }) => <ProductItem car={item} />}
                    showsVerticalScrollIndicator={false}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get('window').height}
                />
            </SafeAreaView>
        </ScrollView>
    );
};

export default CarsList;