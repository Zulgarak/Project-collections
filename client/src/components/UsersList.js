import React from 'react'


export const UsersList = () => {

  return (
    <>
      <nav>
        {/*<div className="nav-wrapper cyan lighten-2" style={{ padding: '0 2rem', marginTop: '1rem' }}>*/}
        <div className="nav-wrapper grey" style={{ padding: '0 2rem', borderTop: '1px solid #616161'}}>
          <span className="brand-logo">ADMIN'S Tools</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down df">
            <li>
              <button className="btn waves-effect waves-light red lighten-2 mr-1">block</button>
            </li>
            <li>
              <button className="btn waves-effect waves-light green accent-3 mr-1">unblock</button>
            </li>
            <li>
              <button className="btn waves-effect waves-light red accent-4 mr-1">delete</button>
            </li>
            <li>
              <button className="btn waves-effect waves-light blue lighten-2">appoint admin</button>
            </li>
          </ul>
        </div>
      </nav>

      <table>
        <thead>
        <tr>
          <th>
            {/*<label className="df">*/}
              {/*<input type="checkbox" className="filled-in" onChange={(e)=> {checkedHandler(e)}} />*/}
              {/*<span></span>*/}
            {/*</label>*/}
          </th>
          <th>№</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Date registration</th>
          <th>Last login</th>
          <th>Status</th>
        </tr>
        </thead>

        <tbody>
        {/*{ users.map((user, index) => {*/}
          {/*return (*/}
            <tr>
              <td>
                {/*<label className="df">*/}
                  {/*<input checked={isChecked[index]} value={user._id} onChange={(e)=> {onItemHintClick(index, e)}} type="checkbox"  className="filled-in" />*/}
                  {/*<span></span>*/}
                {/*</label>*/}
                <label className="df-center">
                  <input type="checkbox" className="filled-in" />
                  <span></span>
                </label>
              </td>
              <td>index</td>
              <td>id</td>
              <td>name</td>
              <td>email</td>
              <td>date</td>
              <td>date</td>
              <td>status</td>
            </tr>
          {/*)*/}
        {/*}) }*/}
        </tbody>
      </table>
    </>
  )
}
