const NavLink = ({ children, src }) => {
    return (
        <div className="group">
            <a href={src}>{children}</a>
            <div className="mx-2 mt-2 border-b-2 opacity-0 transition-all duration-500 group-hover:border-black group-hover:opacity-100"></div>
        </div>
    );
};

NavLink.defaultProps = {
    src: "#",
};

export default NavLink;
