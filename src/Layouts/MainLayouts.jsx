import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            {/* dynamic section */}
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default MainLayouts;