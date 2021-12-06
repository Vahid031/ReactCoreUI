import React from 'react'
import { Card } from '@material-ui/core';
import CustomInput from '../CustomInput/CustomInput';
import { useTranslation } from 'react-i18next';


function Test() {

    const {t} = useTranslation();

    return (

        <Card elevation={6} className='px-5 pt-2 pb-4'>
            
            <div className='card-title mb-4'>
                {t("this_is_an_example")}
            </div>
            <CustomInput />
        </Card>

    )
}



export default Test
