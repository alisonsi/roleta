import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import * as Animatable from "react-native-animatable";
import { Animation } from '../consts/animatable/animations';
import { EaseEffects } from '../consts/animatable/ease-effects';
import images from '../consts/images';
import { getRandomIntInclusive } from '../utils/MathUtil';
import { debounceTime, Subject } from 'rxjs'

interface roletaProps {
    status: boolean
}

const Roleta = (props: roletaProps) => {
    // const stop = () => handleViewRef.stopAnimation();
    // const play = () => handleViewRef.rotate();
    const changeHandler = new Subject();
    changeHandler.asObservable().pipe(
        debounceTime(300)
    ).subscribe(ev => {
        console.log("here")
        // changeEase();
        changeAnimation();
    })
    const [ease, setEase] = useState<Animatable.Easing>("linear");
    const [animation, setAnimation] = useState<Animatable.Animation>("bounce");

    let handleViewRef: any;

    useEffect(() => {

        // let bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
        // changeCascad();
    })

    const changeEase = () => {
        let index = getRandomIntInclusive(0, EaseEffects.length - 1);
        let effect = EaseEffects[index];
        setEase(effect);
    }

    const changeAnimation = () => {
        let index = getRandomIntInclusive(0, Animation.length - 1);
        let animation = Animation[index];
        console.log(animation)
        setAnimation(animation);
    }
    const changeCascad = (event: GestureResponderEvent) => {

    }
    return (
        <View
            onTouchEndCapture={(evt) => changeHandler.next(evt)}
            style={styles.container}>
            <Animatable.View
                ref={(ref) => handleViewRef = ref}
                easing="linear"
                animation="rotate"
                iterationCount="infinite"
                direction="normal">
                <Animatable.View easing="linear" animation={animation} iterationCount="infinite">
                    <View >
                        <Image style={
                            styles.roleta
                        } source={images.roleta1} />
                    </View>
                </Animatable.View>
            </Animatable.View>


        </View>
    );
};

export default Roleta;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    roleta: {
        width: 250,
        height: 250
    }
});
