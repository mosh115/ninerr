import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export function OrderTable({ orders, updateOrder }) {

  const [sortedOrders, setSortedOrders] = useState(orders)
  useEffect(() => {
    setSortedOrders(sortOrders())
  }, [orders])

  function sortOrders() {
    console.log(orders);
    const sorted = orders.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    console.log(sorted);
    return sorted
  }



  function onUpdateOrder(ev, action) {
    const order = orders.find(order => order._id === ev.target.dataset.id)
    order.status = action
    // console.log(order);
    console.log(action);
    updateOrder(order)
  }

  return (
    <TableContainer className='order-table' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table" stickyHeader={true}>
        <TableHead>
          <TableRow className='table-row' >
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Gig name</TableCell>
            <TableCell align="left">Gig price</TableCell>
            <TableCell align="left">Buyer name</TableCell>
            <TableCell align="left">Order status</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((order, idx) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

              className={order.status !== 'pending' ? 'table-row transperent' : 'table-row'}
            >
              <TableCell align="left">{new Date(order.createdAt).toLocaleString('en-EN', { timeZone: 'UTC' })}</TableCell>
              <TableCell align="left">{order.gig.name}</TableCell>
              <TableCell align="left">${order.gig.price}</TableCell>
              <TableCell align="left">{order.buyer.name}</TableCell>
              <TableCell align="left">{order.status}</TableCell>
              <TableCell align="left">
                <button data-id={order._id} onClick={(e) => onUpdateOrder(e, 'In Progress')}>Accept</button>
                <button data-id={order._id} className='btn-decline' onClick={(e) => onUpdateOrder(e, 'Declined')}>Decline</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
