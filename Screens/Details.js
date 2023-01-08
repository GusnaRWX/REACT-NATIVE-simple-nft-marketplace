import { View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet } from "react-native"
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constans'
import { RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDesc, CircleButton } from '../components'
import React from "react"

const DetailsHeader = ({ data, navigation }) => (
    <View style={styles.detailHeaderContainer}>
        <Image
            source={data.image}
            resizeMode='cover'
            style={styles.imageHeader}
        />
        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
        <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>
)

function Details ({ route, navigation }) {
    const { data } = route.params

    return (
        <SafeAreaView style={styles.root}>
            <FocusedStatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View style={styles.bidWrapper}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={styles.descWrapper}>
                            <DetailsDesc data={data} />
                            {
                                data.bids.length > 0 && (
                                    <Text style={styles.bidStyle}>
                                        Current Bids
                                    </Text>
                                )
                            }
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    bidWrapper: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
    },
    listContainer: {
        paddingBottom: SIZES.extraLarge * 3
    },
    detailHeaderContainer: {
        width: '100%',
        height: 373
    },
    imageHeader: {
        width: '100%',
        height: '100%'
    },
    descWrapper: {
        padding: SIZES.font
    },
    bidStyle: {
        fontSize: COLORS.primary,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font
    }
})