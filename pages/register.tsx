import HeaderGeneric from '@/src/components/common/headerGeneric';
import syles from '../styles/registerLogin.module.scss';
import Head from 'next/head';

const Register = function () {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <title>Onebitflix - Registro</title>
            </Head>

            <main>
                <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Quero fazer login' />
            </main>

        </>
    )
}

export default Register;