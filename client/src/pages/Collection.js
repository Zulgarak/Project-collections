import React, {useEffect, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCollectionByID} from "../redux/actions/collections";


export const CollectionPage = (props) => {
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collections.collection)
  const [colItems, setColItems] = useState([])
  const [colID, setColID] = useState(props.match.params.id)
  // const collectionItems = useSelector(state => state.collections.collection.items)

  const someHandler =() => {
    // console.log(collection.items[0].author);
    // console.log(collectionItems);
    console.log(colItems.items);
    // colItems.map((item, index)=> {
    //   console.log(item.author);
    //   console.log(index);
    // })
  }

  const getCollection = useCallback(
    () => {
      dispatch(getCollectionByID(props.match.params.id))
      setColItems(collection)
      setColID(props.match.params.id)
    }, []
  )

  // const getCollection =  () => {
  //     setCollectionID(props.match.params.id)
  //     dispatch(getCollectionByID(props.match.params.id))
  //   }

  useEffect(() => {
    // getCollection()
    // dispatch(getCollectionByID(props.match.params.id))
    getCollection()
    console.log('useEffect 2');
    console.log(collection);
  }, [])
  // }, [colItems])
  // }, [colItems, colID])


  return (
    <div className="container">
      <div>some collection</div>
      <button onClick={someHandler}>click</button>
      {/*<div>{collection.name}</div>*/}
      {/*<p>{JSON.stringify(collection.items)}</p>*/}
      {/*{colItems.map((item, index)=> {*/}
        {/*return (*/}
          {/*<div>{item.author}</div>*/}
        {/*)*/}
      {/*})*/}
      {/*}*/}

      {/*<div>{collection.items[0].author}</div>*/}

      {/*{ collection.items.map((item, index)=> {*/}
        {/*return(*/}
          {/*<div key={item._id}>*/}
            {/*{item.author}*/}
          {/*</div>*/}
        {/*)*/}
      {/*})}*/}


    </div>

  )
}