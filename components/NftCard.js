import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constans'
import { CircleButton, RectButton } from './Button'
import { NFTTitle, EthPrice, SubInfo } from './SubInfo'

const NftCard = ({ data }) => {
    const navigation = useNavigation()
    const handlePress = () => {
        console.log('here')
    }
    return (
        <View style={styles.root}>
            <View style={styles.card}>
                <Image style={styles.image} source={data.image} resizeMode='cover' />
                <CircleButton imgUrl={assets.heart} right={10} top={10} handlePress={handlePress} />
            </View>
            <SubInfo />
            <View style={styles.titleContainer}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <View style={styles.ethContainer}>
                    <EthPrice price={data.price} />
                    <RectButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={() => navigation.navigate("Details", { data })}
                    />
                </View>
            </View>
        </View>
    )
}

export default NftCard

const styles = StyleSheet.create({
    root: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    card: {
        width: '100%',
        height: 250
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    },
    titleContainer: {
        width: '100%',
        padding: SIZES.font
    },
    ethContainer: {
        marginTop: SIZES.font,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})