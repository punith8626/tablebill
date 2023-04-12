import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { vendorColDefs, paginationoptions } from "../../utils/tableheaders";
import {useDispatch, useSelector } from "react-redux";
import { getVendors } from "../../actions/vendor";

const Vendors = () => {
  const dispatch = useDispatch();
  const vendorList = useSelector((state) => state.vendors.vendorList);
  
  
  useEffect(() => {
      dispatch(getVendors());
  }, [dispatch])
  

  return (
    <>
      <div className="card">
        <h5 className="card-header p-3">Vendors</h5>
        <div className="card-body">
          {vendorList.length > 0 ? (
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={vendorList}
              columns={vendorColDefs}
              pagination={paginationFactory(paginationoptions)}
            />
          ) : (
            <p className="text-center my-2">Vendor List is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Vendors;
