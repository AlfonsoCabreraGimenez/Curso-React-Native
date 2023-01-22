import React  from "react";
import { Text, View} from "react-native";
import Styles from "../theme/appTheme";
import {BottomCalc} from "../components/BottomCalc";
import {useCalculadora} from "../hooks/useCalculadora";


export const CalculadoraScreen = () => {


    const { numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();


    return (
        <View style={Styles.calculadorContainer}>

            <Text style={ Styles.resultLittle}> {numeroAnterior} </Text>
            <Text
                style={Styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            > {numero} </Text>

            {/* Fila de botones*/}
        <View style={Styles.row}>
            <BottomCalc text="C" color="#9B9B9B" accion={limpiar}/>
            <BottomCalc text="+/-" color="#9B9B9B" accion={positivoNegativo} />
            <BottomCalc text="del" color="#9B9B9B" accion={btnDelete} />
            <BottomCalc text="/" color="#FF9427" accion={btnDividir} />
        </View>

        <View style={Styles.row}>
            <BottomCalc text="7" accion={armarNumero} />
            <BottomCalc text="8" accion={armarNumero} />
            <BottomCalc text="9" accion={armarNumero} />
            <BottomCalc text="x" color="#FF9427" accion={btnMultiplicar} />
        </View>
        <View style={Styles.row}>
            <BottomCalc text="4" accion={armarNumero} />
            <BottomCalc text="5" accion={armarNumero} />
            <BottomCalc text="6" accion={armarNumero} />
            <BottomCalc text="-" color="#FF9427" accion={btnRestar} />
        </View>
        <View style={Styles.row}>
            <BottomCalc text="3" accion={armarNumero} />
            <BottomCalc text="2" accion={armarNumero} />
            <BottomCalc text="1" accion={armarNumero} />
            <BottomCalc text="+" color="#FF9427" accion={btnSumar} />
        </View>
        <View style={Styles.row}>
            <BottomCalc text="0" ancho accion={armarNumero} />
            <BottomCalc text="." accion={armarNumero} />
            <BottomCalc text="=" color="#FF9427" accion={calcular} />
        </View>
            {/* #2D2D2D gris oscuro*/}
            {/* #FF9427 naranja*/}
        </View>
    )
}

