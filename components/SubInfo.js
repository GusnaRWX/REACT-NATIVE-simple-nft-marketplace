import { View, Text, StyleSheet, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constans'

export const NFTTitle = ({ ...props }) => {
    return (
        <View>
            <Text style={styles(props).nftTitle}>{props.title}</Text>
            <Text style={styles(props).nftSubTitle}>{props.subTitle}</Text>
        </View>
    )
}


export const EthPrice = ({ ...props }) => {
    return (
        <View style={styles(props).priceRoot}>
            <Image
                source={assets.eth}
                resizeMode='contain'
                style={styles(props).ethImage}
            />
            <Text style={styles(props).ethPriceText}>{props.price}</Text>
        </View>
    )
}


export const ImageCmp = ({ ...props }) => {
    return (
        <Image
            source={props.imgUrl}
            resizeMode='contain'
            style={styles(props).imageRoot}
        />
    )
}


export const People = (props) => {
    return (
        <View style={styles(props).peopleRoot}>
            {
                [assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                    <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
                ))
            }
        </View>
    )
}


export const EndDate = ({ ...props }) => {
    return (
        <View style={styles(props).endDateRoot}>
            <Text style={styles(props).endDateLabel}>Ending In</Text>
            <Text style={styles(props).endDateValue}>12h 30m</Text>
        </View>
    )
}


export const SubInfo = (props) => {
    return (
        <View style={styles(props).subInfoRoot}>
            <People />
            <EndDate />
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    subInfoRoot: {
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    peopleRoot: {
        flexDirection: 'row'
    },
    imageRoot: {
        width: 48,
        height: 48,
        marginLeft: props.index === 0 ? 0 : -SIZES.font
    },
    endDateRoot: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    },
    endDateLabel: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.prmiary
    },
    endDateValue: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.prmiary
    },
    NFTRoot: {

    },
    nftTitle: {
        fontFamily: FONTS.semiBold,
        fontSize: props.titleSize,
        color: COLORS.primary
    },
    nftSubtitle: {
        fontFamily: FONTS.regular,
        fontSize: props.subtitleSize,
        color: COLORS.primary
    },
    priceRoot: {
        flexDirection: 'row',
        align: 'center'
    },
    ethImage: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    ethPriceText: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
    }
})
