import React from 'react'

function Model() {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Apply For Internship</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div>
                                <div class="form-group">
                                    <label for="exampleInputName">Name <sup className="text-danger">*</sup> </label>
                                    <input type="text" class="form-control" id="exampleInputName" placeholder="Enter your Name" required/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail">Email address <sup className="text-danger">*</sup></label>
                                    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputMobile">Mobile no <sup className="text-danger">*</sup> </label>
                                    <input type="tel" class="form-control" id="exampleInputMobile" placeholder="Enter Mobile" required/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputMobile">Address <sup className="text-danger">*</sup> </label>
                                    <input type="text" class="form-control" id="exampleInputAddress" placeholder="Enter Address" required/>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Apply</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Model