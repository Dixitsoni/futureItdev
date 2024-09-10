import React from 'react'
import client1 from '../../assets/img/clients/client-1.png'
import client2 from '../../assets/img/clients/client-2.png'
import client3 from '../../assets/img/clients/client-3.png'
import client4 from '../../assets/img/clients/client-4.png'
import client5 from '../../assets/img/clients/client-5.png'
import client6 from '../../assets/img/clients/client-6.png'

function ClientSection() {
    return (
        <section id="clients" className="clients section-bg py-5">
            <div class="container">
                <div className='pb-5'>
                    <h2 className='text-secondary'>Our Clients</h2>
                </div>
                <div class="row" data-aos="zoom-in">
                    <div class="col-lg-12 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={'assets/img/SONY-PRODUCTION-logo.svg'} class="" alt="" />
                    </div>
                    {/* <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={'assets/img/clients/client-2.png'} class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={'assets/img/clients/client-3.png'} class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={'assets/img/clients/client-4.png'} class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={'assets/img/clients/client-5.png'} class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={'assets/img/clients/client-6.png'} class="img-fluid" alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default ClientSection