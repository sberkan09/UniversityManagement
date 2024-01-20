import {useTranslations} from 'next-intl';
import Link from 'next/link';
import LanguageButton from './LanguageButton';

export default function Index({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <center>
        <h1>{t('title')}</h1>
    </center>
  )
}
