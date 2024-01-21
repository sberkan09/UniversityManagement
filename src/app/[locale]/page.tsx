import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <center>
        <h1>{t('title')}</h1>
    </center>
  )
}
