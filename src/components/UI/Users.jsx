"use client";

import { useEffect } from "react";

export const metadata = {
    title: "Mi pagina queso",
}

function Users() {
useEffect(() => {
    alert('queso')
}, []);

    return (
        <div>Users</div>
    )
}

export default Users;