import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const LanguageSwitch = ({ className }: Props) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  const btnClassName = (language: string) =>
    clsx('px-4 py-1 rounded', {
      'outline outline-2': language === i18n.language,
    })

  return (
    <div className={clsx(className, 'flex items-center')}>
      <div className={clsx('flex gap-2')}>
        <button
          onClick={() => changeLanguage('en')}
          className={btnClassName('en')}
        >
          {t('languages.english')}
        </button>
        <button
          onClick={() => changeLanguage('ta')}
          className={btnClassName('ta')}
        >
          {t('languages.tamil')}
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitch
