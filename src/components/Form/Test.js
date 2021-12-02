import React from 'react'
import { Card, Grid } from '@material-ui/core';
import CustomInput from '../CustomInput/CustomInput';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../../languageSelect'


function Test() {

    const {t} = useTranslation();

    return (

        <Card elevation={6} className='px-5 pt-2 pb-4'>
            <LanguageSelect />
            <div className='card-title mb-4'>
                {t("simple form")}
            </div>
            <CustomInput />
        </Card>

    )
}



export default Test
