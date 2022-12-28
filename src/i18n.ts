import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	legacy: false,
	globalInjection: true,
})

export default i18n