import React from 'react'
import './Admin.css'
import adminrasm from '../../images/admin-right.png'

function Admin() {
    return (
        <div className='admin'>
            <div className="admin__left">
                <h2>Admin</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                    necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                    rerum quod. Tempora magni autem a voluptatibus neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                    accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                    suscipit voluptatum eius perferendis amet!.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                    architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                    libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                    blanditiis quod aspernatur! Iusto?</p>
                <div className="admin__left__bootm">
                    <div className="bootm__text">
                        <h3>0.1 </h3>
                        <h4>Vendors</h4>
                    </div>
                    <div className="bootm__text">
                        <h3>0.1 </h3>
                        <h4>Vendors</h4>
                    </div>
                    <div className="bootm__text">
                        <h3>0.1 </h3>
                        <h4>Vendors</h4>
                    </div>
                </div>
            </div>
            <div className="admin__right">
                <img src={adminrasm} alt="fds" />
            </div>
        </div>
    )
}

export default Admin