import React,{useState, useEffect  } from "react";
import axios from 'axios'
const Convert = (language,text) => {
  useEffect(() => {
    console.log('api key is currentyl outdated upgrade in google cloud')
    // axios.post('https://translation.googleapis.com/language/translate/v2',{},{
    //   params:{
    //     q:text,
    //     target:language.value,
    //     key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
    //   },
    // })

  }, [language,text])
  return (
    <div>
      hello
    </div>
  )
}

export default Convert
