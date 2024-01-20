import Link from "next/link";

function LanguageButton({ params, to }: { 
    params: { locale: string },
    to: string
}) {
    if (params.locale === "en") {
        return (<Link href={`/tr/${to}`}><button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>tr</button></Link>)
    } else if (params.locale === "tr") {
        return (<Link href={`/en/${to}`}><button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>en</button></Link>)
    }
}

export default LanguageButton;
