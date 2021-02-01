import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import {login} from "../redux/actions/auth";
import InputLabel  from '@material-ui/core/InputLabel';
import NativeSelect  from '@material-ui/core/NativeSelect';
import MenuItem  from '@material-ui/core/MenuItem';
import Select  from '@material-ui/core/Select';
import FormControl  from '@material-ui/core/FormControl';

export const CollectionsCreatePage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const user = useSelector(state => state.auth.user)
  const history = useHistory()



  return (
    <div className="row">
      <div className="col m6 xl4 s12 offset-m3 offset-xl4">
        <div className="card grey lighten-3 mt-4">
          <div className="card-content black-text">
            <a className="card-title">Create new collection</a>
            <div className="input-field">
              <input
                id="email"
                name ="name"
                type="text"
                className="validate"
                // onChange={changeHandler}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input
                id="email"
                name ="description"
                type="text"
                className="validate"
                // onChange={changeHandler}
              />
              <label htmlFor="description">Description</label>
            </div>

            <FormControl style={ {minWidth: '120px'}}>
            <InputLabel id="theme" >Theme</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value='Books'>Books</MenuItem>
              <MenuItem value='Cars'>Cars</MenuItem>
              <MenuItem value='Peoples'>Peoples</MenuItem>
            </Select>
          </FormControl>

            {/*<div className="input-field">*/}
              {/*<input*/}
                {/*id="password"*/}
                {/*name="image"*/}
                {/*type="text"*/}
                {/*className="validate"*/}
                {/*// onChange={changeHandler}*/}
              {/*/>*/}
              {/*<label htmlFor="image">Image</label>*/}
            {/*</div>*/}
          </div>
          <div className="card-action card-action-container">
            <button
              type="submit"
              // onClick={onSubmit}
              className="btn teal lighten-2 waves-effect">Create</button>
            {/*<Link to='/register'>Need an account?</Link>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

