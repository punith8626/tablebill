import { Link } from 'react-router-dom';

export const vendorColDefs = [{
    dataField: 'fname',
    text: 'Vendor Name',
    formatter: formatName
},
{
    dataField: 'outlet',
    text: 'Outlet'
},
{
    dataField: 'outletCode',
    text: 'Outlet Code'
},
{
    dataField: 'mobile',
    text: 'Mobile'
},
{
    dataField: 'address1',
    text: 'Address'
},
{
    dataField: 'id',
    text: 'Action',
    formatter: addEditLinkContact
},

];
export const paginationoptions = {
    sizePerPage: 20,
    prePageText: 'Back',
    nextPageText: 'Next',
};

function addEditLinkContact(cell, row) {
    return <Link to={{
        pathname: `/vendors/addvendor/${row.id}`,
        state: {
            id: row.id,
        },
    }}>Edit</Link>
}

function formatName(cell, row) {
    return `${row.fname}  ${row.lname}`;

}
