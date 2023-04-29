import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mt-4'>
            <h4>Terms and conditions</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae fuga, possimus accusantium facere dignissimos totam, ex quod mollitia nisi, soluta neque? Illum labore maiores esse voluptate possimus modi quos at asperiores, placeat iure impedit quibusdam ipsa officia nostrum quasi laboriosam eveniet eum nemo deserunt officiis aut enim ab tempore! Quos!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;