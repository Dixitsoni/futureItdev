'use client'

import React, { useState } from 'react'


function Internship() {
    const [courseState, setCourseState] = useState({})
    const [courseId, setCourseId] = useState({})
    const [page, setPage] = useState(0)

    const checkValueHandler = (e) => {
        if (e.target.checked) {
            setCourseState({
                ...courseState, [e.target.name]: parseInt(e.target.value)
            })
            setCourseId({ ...courseId, [e.target.id]: e.target.checked })
            localStorage.setItem('id_key', JSON.stringify({ ...courseId, [e.target.id]: e.target.checked }))
        } else {
            let temp = { ...courseState }
            delete temp[e.target.name]
            setCourseState({ ...temp })
            localStorage.setItem('id_key', JSON.stringify({ ...courseId, [e.target.id]: e.target.checked }))

        }
    }

    const prevHandler = () => {
        if (page === 0) {
            return false
        } else {
            setPage(page - 1)
        }
    }

    const nextHandler = () => {
        if (page === 4) {
            return false
        } else {
            setPage(page + 1)
        }
    }

    return (
        <div className="border" id="intership_container">
            <div className="container text-center internship_header section-title" data-aos="fade-up">
                <h2>We Offer Training</h2>
            </div>
            <div className='d-flex'>
                {<button style={{ fontSize: '40px', color: '' }} className='p-3 border-0 border-1 pointer' onClick={prevHandler}>{'<'}</button>}
                {page === 0 && <div className="container p-4" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-center pb-3 text-primary">HTML, CSS, JAVASCRIPT </h2>
                    <div className="d-flex justify-content-around">
                        <div className="text-center border w-100">
                            <input id='basic' name='Student ( Basics )' defaultChecked={courseState?.basic} onChange={checkValueHandler} type='checkbox' value={10000} />
                            <h3 className="internship"> Student {' ( Basics ) '}</h3>
                            <hr />
                            <h5 className="paid">Paid Course ( 10000 Rs. for 2 months ) with interview Preparation</h5>
                            <hr />
                            <div className="internship_list">
                                <ul className='ml-5'>
                                    <li className='text-center' style={{ display: 'flex', justifyContent: '' }}> <span className='ml-5'>HTML</span></li>
                                    <li style={{ display: 'flex', justifyContent: '' }}> <span className='ml-5'>CSS</span></li>
                                    <li style={{ display: 'flex', justifyContent: '' }}><span className='ml-5'>Javascript</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center border w-100">
                            <input id='intermediate' name='Trainee ( Intermediate )' defaultChecked={courseState?.intermediate} onChange={checkValueHandler} type='checkbox' value={12000} />
                            <h3 className="internship"> Trainee {' ( Intermediate ) '}</h3>
                            <hr />
                            <h5 className="paid">Paid Course ( 12000 Rs. for 3 months ) with interview Preparation</h5>
                            <hr />
                            <div className="internship_list">
                                <ul className='ml-5'>
                                    <li className='text-center' style={{ display: 'flex', justifyContent: '' }}> <span className='ml-5'>HTML</span></li>
                                    <li style={{ display: 'flex', justifyContent: '' }}> <span className='ml-5'>CSS</span></li>
                                    <li style={{ display: 'flex', justifyContent: '' }}><span className='ml-5'>Javascript</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center border w-100">
                            <input id='advanced' name='Professional ( Advanced )' defaultChecked={courseState?.advanced} onChange={checkValueHandler} type='checkbox' value={15000} />
                            <h3 className="internship">Professional {'( Advanced )'}</h3>
                            <hr />
                            <h5 className="paid">Paid Course ( 15000 Rs. for 4 months ) with interview Preparation</h5>
                            <hr />
                            <div className="internship_list">
                                <ul className='ml-5'>
                                    <li className='ml-5 text-center' style={{ display: 'flex', justifyContent: '' }}> <span className='ml-5'>HTML</span></li>
                                    <li className='ml-5 text-center' style={{ display: 'flex', justifyContent: '' }}> <span className='ml-5'>CSS</span></li>
                                    <li className='ml-5 text-center' style={{ display: 'flex', justifyContent: '' }}><span className='ml-5'>Javascript</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-danger'>Please Select according to your Skill</h6>
                    </div>
                </div>}
                {page === 1 && <div className="container pt-5 mt-5" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="text-center pb-3 text-primary">React</h1>
                    <div className="d-flex justify-content-around">
                        <div className="text-center border w-100">
                            <input id='react_basic' name='React Student ( Basics )' defaultChecked={courseState?.react_basic} onChange={checkValueHandler} type='checkbox' value={12000} />
                            <h3 className="internship">Student {' ( Basics ) '}</h3>
                            <hr />
                            <h5 className="paid"><span className=''>  Paid Course ( 12000 Rs. for 2 months ) with interview Preparation</span></h5>
                        </div>
                        <div className="text-center border w-100">
                            <input id='react_intermediate' name='React Trainee ( Intermediate )' defaultChecked={courseState?.react_intermediate} onChange={checkValueHandler} type='checkbox' value={16000} />
                            <h3 className="internship">Trainee {' ( Intermediate ) '}</h3>
                            <hr />
                            <h5 className="paid"><span className=''> Paid Course ( 16000 Rs. for 3 months ) with interview Preparation</span></h5>
                        </div>
                        <div className="text-center border w-100">
                            <input id='react_advanced' name='React Professional ( Advanced )' defaultChecked={courseState?.react_advanced} onChange={checkValueHandler} type='checkbox' value={20000} />
                            <h3 className="internship">Professional {'( Advanced )'}</h3>
                            <hr />
                            <h5 className="paid"><span className=''> Paid Course ( 20000 Rs. for 4 months ) with interview Preparation</span></h5>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-danger'>HTML , CSS , Javascript Pre-requisite skill before React</h6>
                    </div>
                </div>}
                {page === 2 && <div className="container pt-5 mt-5" data-aos="fade-up" data-aos-delay="250">
                    <h1 className="text-center pb-3 text-primary">Nextjs</h1>
                    <div className="d-flex justify-content-around">
                        <div className="text-center border w-100">
                            <input id='next_basics' name='Nextjs Student ( Basics )' defaultChecked={courseState?.next_basics} onChange={checkValueHandler} type='checkbox' value={12000} />
                            <h3 className="internship">Student {' ( Basics ) '}</h3>
                            <hr />
                            <h5 className="paid"><span className=''> Paid Course ( 12000 Rs. for 2 months ) with interview Preparation</span></h5>
                        </div>
                        <div className="text-center border w-100">
                            <input id='next_intermediate' name='Nextjs Trainee ( Intermediate )' defaultChecked={courseState?.next_intermediate} onChange={checkValueHandler} type='checkbox' value={16000} />
                            <h3 className="internship">Trainee {' ( Intermediate ) '}</h3>
                            <hr />
                            <h5 className="paid"><span className=''>Paid Course ( 16000 Rs. for 3 months ) with interview Preparation</span></h5>
                        </div>
                        <div className="text-center border w-100">
                            <input id='next_advanced' name='Nextjs Professional ( Advanced )' defaultChecked={courseState?.next_advanced} onChange={checkValueHandler} type='checkbox' value={20000} />
                            <h3 className="internship">Professional {'( Advanced )'}</h3>
                            <hr />
                            <h5 className="paid"><span className=''>Paid Course ( 20000 Rs. for 4 months ) with interview Preparation</span></h5>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-danger'>Please Select according to your Skill</h6>
                    </div>
                </div>}
                {page === 3 && <div className="container py-5 my-5" data-aos="fade-up" data-aos-delay="250">
                    <h1 className="text-center py-4 text-primary">Vuejs</h1>
                    <div className="d-flex justify-content-around">
                        <div className="text-center border w-100">
                            <input id='vue_basics' name='Vuejs Student ( Basics )' defaultChecked={courseState?.vue_basics} onChange={checkValueHandler} type='checkbox' value={12000} />
                            <h3 className="internship">Student {' ( Basics ) '}</h3>
                            <hr />
                            <h5 className="paid"><span className=''>Paid Course ( 12000 Rs. for 2 months ) with interview Preparation</span></h5>
                        </div>
                        <div className="text-center border w-100">
                            <input id='vue_intermediate' name='Vuejs Trainee ( Intermediate )' defaultChecked={courseState?.vue_intermediate} onChange={checkValueHandler} type='checkbox' value={16000} />
                            <h3 className="internship">Trainee {' ( Intermediate ) '}</h3>
                            <hr />
                            <h5 className="paid"><span className=''>Paid Course ( 16000 Rs. for 3 months ) with interview Preparation</span></h5>
                        </div>
                        <div className="text-center border w-100">
                            <input id='vue_advanced' name='Vuejs Professional ( Advanced )' defaultChecked={courseState?.vue_advanced} onChange={checkValueHandler} type='checkbox' value={20000} />
                            <h3 className="internship">Professional {'( Advanced )'}</h3>
                            <hr />
                            <h5 className="paid"><span className=''>Paid Course ( 20000 Rs. for 4 months ) with interview Preparation</span></h5>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-danger'>Please Select according to your Skill</h6>
                    </div>
                </div>}
                <div>
                    {page === 4 && Object.keys(courseState).length > 0 && <table className='d-flex justify-content-around'>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                            </tr>
                            {Object.keys(courseState).length > 0 && Object.keys(courseState).map((course, index) => {
                                return (
                                    Object.values(courseId)[index] && <tr>
                                        <td className='pt-3'>
                                            {course}
                                        </td>
                                    </tr>
                                )
                            })}
                        </thead>
                        <tbody>
                            <tr>
                                <th>Total (Rs.)</th>
                            </tr>
                            {page === 4 && Object.values(courseState).length > 0 && Object.values(courseState).map((courseVlue, index) => {
                                return (
                                    Object.values(courseId)[index] && <tr>
                                        <td className='pt-3'>
                                            {courseVlue}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }
                    {page === 4 && Object.keys(courseState).length > 0 && <><hr />
                        <div className='d-flex justify-content-around pb-5'>
                            <h3>Total Fees</h3>
                            <h3>{Object.values(courseState).reduce((acc, price) => acc + price, 0)} Rs.</h3>
                        </div>
                    </>}
                </div>
                {page === 4 ? <></> : <button style={{ fontSize: '40px', color: '' }} className='p-3 border-0 border-1 pointer' onClick={nextHandler}>{'>'}</button>}
            </div>
        </div >
    )
}

export default Internship