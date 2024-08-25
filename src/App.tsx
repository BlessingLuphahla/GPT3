import { Brand, Navbar, CTA } from './components'
import { Blog, Header, Possibility, Footer, WhatGPT3, Features, } from './containers'
import './App.css'

function App() {
    return (
        <>
           <div className='App'>
            <div className="gradient__bg">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <Brand></Brand>
            <WhatGPT3/>
            <Features></Features>
            <Possibility></Possibility>
            <CTA></CTA>
            <Blog></Blog>
            <Footer></Footer>
           </div>
        </>
    )
}


export default App