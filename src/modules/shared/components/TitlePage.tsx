'use client'
import { useRouter } from 'next/navigation';

interface Props {
    title: string;
    description: string;
    btnTitle: string;
    btnPath: string;
}

export const TitlePage = ({ btnPath, btnTitle, description, title }: Props) => {

    const router = useRouter();

    const handleNavigation = () => {
        router.push(btnPath);
    }

    return (
        <section className='title-page'>
            <div>
                <h1 className='font-medium mb-2 text-4xl'>{ title }</h1>
                <p>{ description }</p>
            </div>

            <button onClick={ handleNavigation } className='btn-primary'>
                { btnTitle }
            </button>
        </section>
    )
}
