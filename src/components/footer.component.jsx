// Built a footer for out react website to display about us contact us and copyright information
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__about">
                    <h3 className="footer__heading">About Us</h3>
                    <p className="footer__text">We are a team of developers who are passionate about coding and creating web applications. We are always looking for new projects to work on and new technologies to learn.</p>
                </div>
                <div className="footer__copyright">
                    <p className="footer__text">© 2022 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;