import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import ButtonStyle from '../ButtonStyle/ButtonStyle';
import styles from './styles';

export default function ProductItem(props) {

    const { name, tagline, image} = props.car;

    return (
        <View style={styles.productContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <ButtonStyle
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was pressed");
                    }}
                />
                <ButtonStyle
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Existing Inventory was pressed");
                    }}
                />
            </View>

        </View>
    )
}

