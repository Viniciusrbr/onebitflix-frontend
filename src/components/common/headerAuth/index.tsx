import { Container, Form, Input } from 'reactstrap';
import styles from './styles.module.scss'
import Link from 'next/link';
import Modal from 'react-modal';
import { useState } from 'react';
import { useRouter } from 'next/router';

Modal.setAppElement("#__next"); // para acessibilidade

const HeaderAuth = function () {

    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.clear();
        router.push("/");
    };

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <Container className={styles.nav}>
                <Link href="/home">
                    <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav} />
                </Link>

                <div className="d-flex align-items-center">
                    <Form>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Pesquisar"
                            className={styles.input}
                        />
                    </Form>

                    <img
                        src="/homeAuth/iconSearch.svg"
                        alt="lupaHeader"
                        className={styles.searchImg}
                    />
                    <p className={styles.userProfile}
                        onClick={handleOpenModal}>AB</p>
                </div>

                <Modal isOpen={modalOpen} onRequestClose={handleCloseModal} shouldCloseOnEsc={true}
                    className={styles.modal} overlayClassName={styles.overlay}
                >

                    <Link href="/profile">
                        <p className={styles.modalLink}>Meus Dados</p>
                    </Link>
                    <p className={styles.modalLink} onClick={handleLogout}>Sair</p>

                </Modal>

            </Container>


        </>
    );
};

export default HeaderAuth;