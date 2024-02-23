import { View, Image, SafeAreaView } from 'react-native';

const TelaFifa = () => {
    return (
        <SafeAreaView>
            <Image
                source={{ uri: 'https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop16x9.1023w.png' }} 
                style={{ width: '100%', height: '50%' }}
            />

        </SafeAreaView>


    )
}


export default TelaFifa