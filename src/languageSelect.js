import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import Button from "@material-ui/core/Button";
import SimpleDialog from './components/dialogs/simpleDialog'


const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  fa: { label: "فارسی", dir: "rtl", active: false },
};

const LanguageSelect = () => {

  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(localStorage.getItem("i18nextLng").substring(0,2) || "en")
 
  React.useEffect(() => {

    document.documentElement.dir = languageMap[selectedValue].dir;
    document.documentElement.lang = selectedValue;
  }, [open, selectedValue]);




  const handleClose = (value) => {
      setOpen(false)
      i18next.changeLanguage(value);
      setSelectedValue(value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }


  return (
    <div>
        <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                {t("language")}
            </Button>
       <SimpleDialog
                selectedValue={selectedValue}
                items={{en : "English", fa : "فارسی"}}
                title={t("language")}
                open={open}
                onClose={handleClose}
            />
    </div>
  );
};

export default LanguageSelect;
