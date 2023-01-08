import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native"
import { useState } from "react"
import { COLORS, NFTData } from "../constans"
import { NftCard, HomeHeader, FocusedStatusBar } from '../components'

function Home () {
    const [nftData, setNftData] = useState(NFTData)
    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData)

        const filterData = NFTData.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        if (filterData.length) {
            setNftData(filterData)
        } else {
            setNftData(NFTData)
        }
    }
    return (
        <SafeAreaView style={styles.root}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={styles.root}>
                <View style={styles.containerList}>
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => <NftCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>
                <View style={styles.backSection}>
                    <View style={styles.sectionUp} />
                    <View style={styles.sectionDown} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    containerList: {
        zIndex: 0
    },
    backSection: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    sectionUp: {
        height: 300,
        backgroundColor: COLORS.primary,
    },
    sectionDown: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})