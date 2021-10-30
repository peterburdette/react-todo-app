import React from "react";
import Button from "../ui/Button";

const Header = (props) => {
    return (
        <div>
            <span>Logo</span>
            <Button type="submit" title="Logout" onClick={props.handleLogout} />
        </div>
    );
};

export default Header;
