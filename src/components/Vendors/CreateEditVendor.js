import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEditVendor } from "../../actions/vendor";

const CreateEditVendor = () => {
  const [vendor, setVendor] = useState({
    fname: "",
    mname: "",
    lname: "",
    outlet: "",
    outletCode: "",
    address1: "",
    address2: "",
    phone: "",
    mobile: "",
    state: "",
    country: "",
    district: "",
    pin: "",
  });
  const dispatch = useDispatch();
  const params = useParams();
  const { vendorList } = useSelector(state => state.vendors);
  
 

  const history = useNavigate();
  const [validated, setValidated] = useState(false);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    dispatch(createEditVendor(params?.id, vendor, history));
    history('/vendors')
    
  };

  useEffect(() => {
    const currentVendor = vendorList.find((p) => p.id === parseInt(params.id));
    if (currentVendor) {
      setVendor(currentVendor);
    }
  }, []);

  return (
    <>
      <Form noValidate onSubmit={handleSubmit} validated={validated}>
        <div className="card">
          <h5 className="card-header p-3">
            <Link
              to="/vendors"
              className="navbar-brand col-md-3 col-lg-2 me-0 p-4 fs-8"
            >
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </Link>
            Add Vendor
          </h5>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3 w-75">
              <div className="mb-3 flex-fill me-3">
                <Form.Label className="f-14">
                  <b>First Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="First name*"
                  required
                  value={vendor.fname}
                  onChange={(e) => {
                    setVendor({ ...vendor, fname: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  First name is mandatory
                </Form.Control.Feedback>
              </div>
              <div className="mb-3 flex-fill me-3">
                <Form.Label className="f-14">
                  <b>Middle Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="mname"
                  placeholder="Middle name"
                  value={vendor.mname}
                  onChange={(e) => {
                    setVendor({ ...vendor, mname: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill me-3">
                <Form.Label className="f-14">
                  <b>Last Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Last name*"
                  required
                  value={vendor.lname}
                  onChange={(e) => {
                    setVendor({ ...vendor, lname: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between mb-3 w-50">
              <div className="mb-3 flex-fill me-2">
                <Form.Label className="f-14">
                  <b>Outlet</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="outlet"
                  placeholder="Outlet*"
                  value={vendor.outlet}
                  onChange={(e) => {
                    setVendor({ ...vendor, outlet: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>Outlet Code</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="outletCode"
                  placeholder="Outlet Code*"
                  value={vendor.outletCode}
                  onChange={(e) => {
                    setVendor({ ...vendor, outletCode: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between w-100 mb-4">
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>Address 1</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="address1"
                  placeholder="Address 1 *"
                  value={vendor.address1}
                  onChange={(e) => {
                    setVendor({ ...vendor, address1: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>Address 2</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Address 2 *"
                  value={vendor.address2}
                  onChange={(e) => {
                    setVendor({ ...vendor, address2: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between w-75 mb-3">
              <div className="mb-3 flex-fill me-2">
                <Form.Label className="f-14">
                  <b>Pin code 2</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="pin"
                  placeholder="Pin "
                  value={vendor.pin}
                  onChange={(e) => {
                    setVendor({ ...vendor, pin: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>District</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="district"
                  placeholder="District "
                  value={vendor.district}
                  onChange={(e) => {
                    setVendor({ ...vendor, district: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>State</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="state "
                  value={vendor.state}
                  onChange={(e) => {
                    setVendor({ ...vendor, state: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between w-75 mb-4">
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>Country</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="country "
                  value={vendor.country}
                  onChange={(e) => {
                    setVendor({ ...vendor, country: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>Mobile number</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="mobile "
                  value={vendor.mobile}
                  onChange={(e) => {
                    setVendor({ ...vendor, mobile: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3 flex-fill mx-2">
                <Form.Label className="f-14">
                  <b>Phone number</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="phone "
                  value={vendor.phone}
                  onChange={(e) => {
                    setVendor({ ...vendor, phone: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-body-secondary text-end p-3">
            
            <Link to="/vendors" className="btn btn-outline-danger me-3">
            Cancel
            </Link>
            <Button type="submit" className="btn btn-danger">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateEditVendor;
