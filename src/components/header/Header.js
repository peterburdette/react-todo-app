import React from "react";
import Button from "../ui/Button";

const Header = () => {
    return (
        <div>
            <span>Logo</span>
            <form>
                <Button type="submit" title="Logout" />
            </form>
        </div>
    );
};

export default Header;
