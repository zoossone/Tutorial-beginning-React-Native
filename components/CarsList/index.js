import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            {/* need to know about FlatList */}
            <FlatList
                // It needs data
                data={cars}
                //   We send props just as a car so we have to fix CarItem component
                renderItem={(item) => <CarItem car={item} />}
                // those things are skill of FlatList to make it cool. Without these it works like Facebook, Instagram
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;