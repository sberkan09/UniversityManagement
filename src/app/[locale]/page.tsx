import {useTranslations} from 'next-intl';
import Link from 'next/link';

function LanguageButton({ params }: { params: { locale: string } }) {
    if (params.locale === "en") {
        return (<Link href="/tr"><button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>tr</button></Link>)
    } else if (params.locale === "tr") {
        return (<Link href="/en"><button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>en</button></Link>)
    }
}

export default function Index({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <center>
        <h1>{t('title')}</h1>
        <LanguageButton params={params}/>
    </center>
  )
}
