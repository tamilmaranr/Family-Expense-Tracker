import React, { useState } from 'react';
import './Track.css';

function Track() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);

  const addTransaction = (e) => {
    e.preventDefault();
    if (editId) {
      const newTransactions = transactions.map((t) =>
        t.id === editId ? { id: editId, description, amount } : t
      );
      setTransactions(newTransactions);
      setEditId(null);
    } else {
      setTransactions([...transactions, { id: Date.now(), description, amount }]);
    }
    setDescription('');
    setAmount('');
  };

  const handelEdit = (t) => {
    setEditId(t.id);
    setDescription(t.description);
    setAmount(t.amount);
  };

  const handelDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <center>
      <br />
      <br />
      <div className='div2'>
        <h1 className='h1'>FAMILY EXPENSE TRACKER</h1>
        
        <div className='div3'>
          <h2 className='h2'>Add Transactions</h2>
          <form onSubmit={addTransaction} className='form1'>
            <input
              type='text'
              className='input1'
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <input
              type='number'
              className='input2'
              placeholder='Amount'
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            <button className='but1' type='submit'>
              Add
            </button>
          </form>
        </div>
        <h2>TRANSACTIONS</h2>
        <table>
          <thead>
            <tr className='tabelrow'>
              <th className='tabelh'>Description</th>
              <th className='tabelh'>Amount</th>
              <th className='tabelh'>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>{t.amount}</td>
                <td>
                  <button id='editbutton' onClick={() => handelEdit(t)}>
                    Edit
                  </button>
                  <button id='deletebutton' onClick={() => handelDelete(t.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default Track;
