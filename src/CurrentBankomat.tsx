import React from 'react';
import {MoneyType} from "./App";
import styled from 'styled-components';


type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
            <Banknot color={props.money.banknotes === 'Dollars' ? 'greenyellow':'steelblue'} >
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </Banknot>
            
        
    );
};






const Banknot = styled.div`
    height:200px;
    margin:10px;
    width:400px;
    background-color:${props=>{
        if(props.color === 'greenyellow'){
            return 'greenyellow'
        }else {
            return 'steelblue'
        }
    }};
`
  

const Name = styled.div`
   display:flex;
   justify-content:center;
   font-size:30px;

`

const Nominal = styled.div`
   display:flex;
   justify-content:center;
   font-size:40px;
   margin-top:30px

`

