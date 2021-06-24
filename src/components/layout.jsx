import React from 'react'

import Header from "./header"
import Footer from "./footer"

const Layout = ({children, location}) => {
    return (
        <div className="layout">
            <Header location={location} />
                {children}
            <Footer location={location} />        
        </div>
    )
}

export default Layout
