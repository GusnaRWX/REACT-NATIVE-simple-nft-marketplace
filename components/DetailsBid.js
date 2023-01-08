import { View, Text, Image, StyleSheet } from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constans'

const DetailsBid = ({ bid }) => {
    return (
        <View style={styles.root}>
            <Image
                source={bid.image}
                resizeMode='contain'
                style={styles.image}
            />
            <View>
                <Text style={styles.bidName}>
                    Bid placed by {bid.name}
                </Text>
                <Text style={styles.bidDate}>
                    {bid.date}
                </Text>
            </View>
            <EthPrice price={bid.price} />
        </View>
    )
}

export default DetailsBid

const styles = StyleSheet.create({
    image: {
        width: 48,
        height: 48
    },
    root: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2
    },
    bidName: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    bidDate: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3
    }
})