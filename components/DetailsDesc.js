import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constans'

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100))
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            <View style={styles.root}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <EthPrice price={data.price} />
            </View>
            <View style={styles.descWrapper}>
                <Text style={styles.descTitle}>
                    Description
                </Text>
                <View style={styles.descContentWrapper}>
                    <Text style={styles.descContent}>
                        {text}
                        {!readMore && '...'}
                        <Text
                            style={styles.readMore}
                            onPress={() => {
                                if (!readMore) {
                                    setText(data.description)
                                    setReadMore(true)
                                } else {
                                    setText(data.description.slice(0, 100))
                                    setReadMore(false)
                                }
                            }}
                        >
                            {readMore ? ' Show Less' : ' Read More'}
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    )
}

export default DetailsDesc

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descWrapper: {
        marginVertical: SIZES.extraLarge * 1.5
    },
    descTitle: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    descContentWrapper: {
        marginTop: SIZES.base
    },
    descContent: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
    },
    readMore: {
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    }
})