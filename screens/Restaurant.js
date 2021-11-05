import React, {useEffect, useState} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Animated,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import {icons, FONTS, COLORS, SIZES, images} from '../constants';
const Restaurant = ({route, navigation}) => {
    const [restaurant, setRestaurant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    useEffect(() => {
        let {item, currentLocation} = route.params;
        setRestaurant(item);
        setCurrentLocation(currentLocation);
    }, [route.params]);
    const renderHeader = () => {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        padding: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}
                    />
                </TouchableOpacity>
                {/*  레스토랑 이름 */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3,
                        }}>
                        <Text style={{...FONTS.h3}}>{restaurant?.name}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}>
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>
    );
};

export default Restaurant;
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray2,
    },
});
