import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TranslationType } from '../entities/types/Translation';

const languages = [
    'es-ES',
    'fr-FR',
    'pt-PT',
    'it-IT',
    'en-GB',
    'en-US',
    'de-DE'
]

const fetchedTranslations: TranslationType[] = [
    {
        key: 'hola',
        value: {
            'es-ES': 'Hola',
            'fr-FR': 'Salut',
            'pt-PT': 'Olá',
            'it-IT': 'Ciao',
            'en-GB': 'Hello',
            'en-US': 'Hello',
            "de-DE": 'Hallo'
        }
    }
]

export default function TranslationsTable (props: PropsType) {

    const [translations, setTranslations] = useState([]);

    useEffect(() => {
        const fetchTranslations = async () => {
            const translationsToSet = fetchedTranslations.map(translation => {
                return {
                    key: translation.key,
                    'es-ES': translation.value['es-ES'],
                    'fr-FR': translation.value['fr-FR'],
                    'pt-PT': translation.value['pt-PT'],
                    'it-IT': translation.value['it-IT'],
                    'en-GB': translation.value['en-GB'],
                    'en-US': translation.value['en-US'],
                    'de-DE': translation.value['de-DE']
                }
            })
            setTranslations(translationsToSet);
        }
        fetchTranslations()
    }, [])

    return (
        <DataTable header={`${props.project} - ${props.context} - ${props.table}`} value={translations}>
            <Column field='key' header="Key"/>
            {languages.map((lang, i) => (
                <Column key={i} field={lang} header={lang} />
            ))}
        </DataTable>
    )

}

type PropsType = {
    project: string;
    context: string;
    table: string;
}