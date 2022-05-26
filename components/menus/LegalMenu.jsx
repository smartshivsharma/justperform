import React from 'react';
import Link from "next/link";


const LegalMenu = () => {

    return (
        <>
            <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    &copy; JustPerform, Inc
                </li>
                <li className="list-inline-item">
                    <Link href="../privacy-policy">Privacy Policy</Link>
                </li>
                <li className="list-inline-item">
                    <Link href="../terms-of-service">Terms of Service</Link>
                </li>
                <li className="list-inline-item">
                    <Link href="../cookie-policy">Cookie Policy</Link>
                </li>
            </ul>
        </>

    )
}

export default LegalMenu;