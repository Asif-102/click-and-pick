import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import ButtonStyle from '../ButtonStyle/ButtonStyle';
import styles from './styles';

export default function ProductItem() {
    return (
        <View style={styles.productContainer}>

            <ImageBackground
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <ButtonStyle
                type="primary"
                content={"Custom Order"}
                onPress={()=>{
                    console.warn("Custom Order was pressed");
                } }
            />
            <ButtonStyle
                type="secondary"
                content={"Existing Inventory"}
                onPress={()=>{
                    console.warn("Existing Inventory was pressed");
                } }
            />

        </View>
    )
}

