import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import i18next from "i18next";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  fa: { label: "فارسی", dir: "rtl", active: false },
};

const TheHeaderDropdownLang = () => {

  const [selectedValue, setSelectedValue] = React.useState(localStorage.getItem("i18nextLng").substring(0,2) || "en")
  const {t} = useTranslation();

  React.useEffect(() => {

    document.documentElement.dir = languageMap[selectedValue].dir;
    document.documentElement.lang = selectedValue;
  }, [selectedValue]);

  

  const selectedChanged = (value) => {
    i18next.changeLanguage(value);
    setSelectedValue(value)
}


  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        {t("Language")}
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" >
        <CDropdownItem href="#" onClick={() =>selectedChanged("fa")}>فارسی</CDropdownItem>
        <CDropdownItem href="#"  onClick={() => selectedChanged("en")}>English</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}




export default TheHeaderDropdownLang