import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "10vh",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-2 my-4" style={footerStyle}>
            <p className="text-center">
             CopyRight &copy; My Todos List   
            </p>
        </footer>
    )
}
