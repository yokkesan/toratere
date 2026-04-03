import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import '../styles/components/layout.scss'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout