import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
// import { useState, useRef } from 'react';
import { useCalculadora } from '../hooks/useCalculadora';




export const CalculadoraScreen = () => {

  const { 
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular } = useCalculadora();

  return (
    <View style={ styles.calculadoraContainer }>

    {
      !(numeroAnterior === '0') && (
        <Text style={ styles.resultadoPequenio}>{numeroAnterior}</Text>
      )
    }


    
       <Text 
            style={ styles.resultado}
            numberOfLines={ 1 }
            adjustsFontSizeToFit
          > 
            {numero}
          </Text>
       
        {/* Fila de Botones */}
       <View style={ styles.fila }>
            <BotonCalc texto= "C" color="#9B9B9B" accion={ limpiar }/>
            <BotonCalc texto= "+/-" color="#9B9B9B" accion={ positivoNegativo }/>
            <BotonCalc texto= "del" color="#9B9B9B" accion={ btnDelete }/>
            <BotonCalc texto= "/" color="#FF9427"   accion={ btnDividir }/>
       </View>

       {/* Fila de Botones */}
       <View style={ styles.fila }>
            <BotonCalc texto= "7" color="" accion={ armarNumero }/>
            <BotonCalc texto= "8" color="" accion={ armarNumero }/>
            <BotonCalc texto= "9" color="" accion={ armarNumero }/>
            <BotonCalc texto= "X" color="#FF9427" accion={ btnMultiplicar }/>
       </View>

       {/* Fila de Botones */}
       <View style={ styles.fila }>
            <BotonCalc texto= "4" color="" accion={ armarNumero }/>
            <BotonCalc texto= "5" color="" accion={ armarNumero }/>
            <BotonCalc texto= "6" color="" accion={ armarNumero }/>
            <BotonCalc texto= "-" color="#FF9427" accion={ btnRestar }/>
       </View>

       {/* Fila de Botones */}
       <View style={ styles.fila }>
            <BotonCalc texto= "1" color="" accion={ armarNumero }/>
            <BotonCalc texto= "2" color="" accion={ armarNumero }/>
            <BotonCalc texto= "3" color="" accion={ armarNumero }/>
            <BotonCalc texto= "+" color="#FF9427" accion={ btnSumar }/>
       </View>

       {/* Fila de Botones */}
       <View style={ styles.fila }>
            <BotonCalc texto= "0" ancho accion={ armarNumero }/>
            <BotonCalc texto= "." accion={ armarNumero }/>
            <BotonCalc texto= "=" color="#FF9427" accion={ calcular }/>
       </View>
    </View>
  )
}
