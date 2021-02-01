const {Router} = require('express')
const config = require('config')
const Collection = require('../models/Collection')
// const auth = require('../middleware/auth.middleware')
const router = Router()


router.get('/', async (req, res) => {
  try {
    const collections = await Collection.find({})
    res.json(collections)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/', async (req, res) => {
  // console.log(1);
  try {
    // console.log(1);
    const {name, description, theme, owner, items} = req.body
    // console.log(req.body);
    // const collection = new Collection({name, description, theme, owner, items})
    const collection = new Collection(req.body)
    await collection.save()
    res.status(201).json({message: 'Collection created'})
  }    catch (e) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id)
    res.json(collection)
  } catch (e) {
    res.status(500).json({ message: 'Collection not found' })
  }
})

// router.put('/', async (req, res) => {
//
//     const {_id} = req.body
//     const collection = await Collection.findOneAndUpdate({_id: req.body._id}, {$set: {items: items}})
//     res.json({ success: true })
//
// })


// router.put('/:id', async (req, res) => {
//   const {name, description, theme, owner} = req.body
//   const collection = new Collection({name, description, theme, owner})
//   await collection.save()
//   res.status(201).json({message: 'Collection created'})
// } catch (e) {
//   res.status(500).json({message: 'Internal Server Error'})
// }
// })

// router.delete('/', async (req, res) => {
//   const {_id} = req.body
//   const collection = await User.findOneAndDelete({_id: req.body._id})
//   res.json({ success: true })
// })



module.exports = router