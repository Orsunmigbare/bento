import React, { createContext, useReducer, useContext } from "react"
import PropTypes from "prop-types"
import produce from "immer"
import { translate as t, convert as c } from "@staccx/i18n"

const I18nContext = createContext({})

const actions = {
  setLanguage: "SEND",
  initialize: "INIT"
}

const reducer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.setLanguage:
        draft.language = action.language
        break
      case actions.initialize:
        draft = Object.assign(draft, action.payload)
        break
    }
  })

const I18n = ({ children, ...props }) => {
  const { texts = null } = props
  const translate = ({ key, data, fallback, namespace }) =>
    t({ texts, language, key, data, fallback, namespace })
  const convert = value => c(value, language)

  const initialState = {
    ...props,
    translate,
    convert
  }
  const i18n = useReducer(reducer, initialState)
  const { language } = i18n

  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
}

I18n.propTypes = {
  children: PropTypes.element.isRequired,
  texts: PropTypes.object.isRequired
}

export const useI18n = () => useContext(I18nContext)

export default I18n