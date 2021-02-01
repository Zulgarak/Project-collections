import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserById, getAllUsers} from "../redux/actions/users";
import axios from 'axios'
import {getAllCollections} from "../redux/actions/collections";
import {Link} from 'react-router-dom'





export const CollectionsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const collections = useSelector(state => state.collections.collections)

  const getAll = useCallback(
    () => {
      dispatch(getAllCollections())
    }, []
  )

  useEffect(() => {
    getAll()
    console.log('useEffect');
  }, [])

  // const someHandler = () => {
  //   console.log(collections);
  //   console.log(1);
  //   const test = {
  //     name: 'Books',
  //     description: 'Books it\'s awersome',
  //     theme: 'Books',
  //     // createdAt: { type: Date, default: Date.now },
  //     owner: user.userId,
  //     items: [
  //       {
  //         // tags: [{ tag: { type: Schema.Types.ObjectId, ref: 'Tag' }}],
  //         // likes: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }}],
  //         image: 'Books',
  //         author: 'Steven'
  //         // comment: { type: String },
  //         // year: {type: Date}
  //       },
  //       {
  //         image: 'Car',
  //         author: 'Ivan'
  //       }
  //     ]
  //
  //   }
  //   axios.post('/api/collections', {...test})
  //   // axios.get('/api/collections')
  // }




  return (
    <div className="container">
      <h1 className="center-align">CollectionsPage</h1>
      <div className="row">
        {/*<button onClick={someHandler}>click</button>*/}

      { collections.map((collection, index) => {
        return (
          <div className="col s12 m6" key={collection._id}>
            <div className="card">
              <div className="card-image">
                <img src="https://materializecss.com/images/sample-1.jpg" />
                <span className="card-title">{collection.name}</span>
                <Link to={`/collections/${collection._id}`} className="btn-floating halfway-fab waves-effect waves-light red"><i
                  className="material-icons">arrow_right_alt</i></Link>
              </div>
              <div className="card-content">
                <p>{collection.description}</p>
              </div>
            </div>
          </div>
        )})}

      </div>

    </div>
  )
}