import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, SIZES, FONTS, icons } from '../constants';

const StartReview = ({rate}) => {
    // console.log('rate',rate)
    let startComponents = [];
    let fullStar = Math.floor(rate)
    let noStar = Math.floor(5 - rate)
    let halfStar = 5 - fullStar - noStar

    // FullStar
    for(let i= 0; i< fullStar; i++){
        startComponents.push(
            <Image 
            key={`full-${i}`}
            source={icons.startwo}
            resizeMode="cover"
            style={{
                width:20,
                height:20
            }}
            />
        )
    }

    // HalfStar
    for(let i= 0; i< halfStar; i++){
        startComponents.push(
            <Image 
            key={`half-${i}`}
            source={icons.starone}
            resizeMode="cover"
            style={{
                width:20,
                height:20
            }}
            />
        )
    }

    // NoStar
    for(let i= 0; i< noStar; i++){
        startComponents.push(
            <Image 
            key={`noStar-${i}`}
            source={icons.star}
            resizeMode="cover"
            style={{
                width:20,
                height:20
            }}
            />
        )
    }

    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            {startComponents}
            <Text style={{marginLeft:SIZES.base, color:COLORS.gray, ...FONTS.bofy3}}>{rate}</Text>
        </View>

    )
}

const IconLabel = ({icon, label}) =>{
    return(
        <View style={{alignItems:'center'}}>
            <Image 
            source={icon}
            resizeMode="cover"
            style={{
                width:50,
                height:50
            }}
            />
            <Text style={{marginTop:SIZES.padding, color:COLORS.gray, ...FONTS.h3}}>{label}</Text>
        </View>
    )
}

const DestinationDetail = ({navigation}) => {
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={{flex:2}}>
                <Image 
                source={images.beautiful}
                resizeMode="cover"
                style={{
                    width:'100%',
                    height:'80%'
                }}
                />
                <View 
                style={[
                    {
                        position:"absolute",
                        bottom:"5%",
                        left:"5%",
                        right:"5%",
                        borderRadius:15,
                        padding: SIZES.padding,
                        backgroundColor:COLORS.white
                    },styles.shadow
                ]}
                >
                    <View style={{flexDirection:'row'}} >
                        <View style={styles.shadow}>
                            <Image 
                            source={images.man}
                            resizeMode="cover"
                            style={{
                                width:70,
                                height:70,
                                borderRadius:15
                            }}
                            />
                        </View>
                        <View style={{marginHorizontal:SIZES.radius, justifyContent:'space-between'}}>
                            <Text style={{...FONTS.h3}}>Ski Villa</Text>
                            <Text style={{color:COLORS.gray, ...FONTS.bofy3}}>Côte D'ivoire</Text>
                            <StartReview 
                            rate={4.5}
                            />
                        </View>
                    </View>
                <View style={{marginTop:SIZES.radius}}>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification  </Text>
                </View>
                </View>
                {/* Headers buttons */}
                <View 
                style={{
                    position:"absolute",
                    top:50,
                    left:20,
                    right:20,
                    flexDirection:'row'
                }}
                >
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Image 
                            source={icons.back}
                            resizeMode="cover"
                            style={{
                                width:20,
                                height:20
                            }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:1, alignItems:'flex-end'}}v>
                        <TouchableOpacity onPress={() => console.log('ok')}>
                            <Image 
                            source={icons.menus}
                            resizeMode="cover"
                            style={{
                                width:20,
                                height:20
                            }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* body */}
            <View style={{flex:1.5}}>
                {/* Icons */}
                <View style={{flexDirection:'row', marginTop:SIZES.base,paddingHorizontal:SIZES.padding, justifyContent:'space-between'}}>
                    <IconLabel 
                        icon={icons.villa}
                        label='Villa'
                    />
                    <IconLabel 
                        icon={icons.parking}
                        label='Parking'
                    />
                    <IconLabel 
                        icon={icons.wind}
                        label='4 C'
                    />
                </View>
                {/* About */}
                <View style={{marginTop:SIZES.padding, paddingHorizontal:SIZES.padding}}>
                    <Text style={{...FONTS.h2}}>About</Text>
                    <Text style={{marginTop:SIZES.radius, color:COLORS.gray, ...FONTS.bofy3}}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est </Text>
                </View>
            </View>
            {/* body */}
            <View style={{flex:0.5, paddingHorizontal:SIZES.padding}}>
                <LinearGradient 
                style={{height:70, width:'100%', borderRadius:15}}
                colors={['#edf0fc', '#d6dfff']}
                start={{x:0, y:0}}
                end={{x:1, y:1}}
                >
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                            <View style={{flex:1, marginHorizontal:SIZES.padding, justifyContent:'center'}}>
                                <Text style={{...FONTS.h1}}>1000$</Text>
                            </View>
                                <TouchableOpacity style={{width:130, height:'80%', marginHorizontal:SIZES.radius}}
                                onPress={() => console.log('ok')}
                                >
                                    <LinearGradient 
                                    style={{flex:1,alignItems:'center', justifyContent:'center', borderRadius:10 }}
                                    colors={['#46aeff', '#5884ff']}
                                    start={{x:0, y:0}}
                                    end={{x:1, y:0}}
                                    >
                                        <Text style={{color: COLORS.white, ...FONTS.h2}}>BOOKING</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                    </View>

                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.35,
        shadowRadius:3.84,
        elevation:5
    }
});

export default DestinationDetail;