const {Router} = require('express')
const config = require('config')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

// router.get('/', auth, async (req, res) => {
router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})
// router.get('/:id', auth, async (req, res) => {
//   try {
//
//     const user = await User.findById(req.params.id)
//     console.log(user);
//     res.json(user)
//   } catch (e) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

router.put('/', async (req, res) => {

  const obj = req.body
  console.log(obj);

  if(Object.keys(obj).includes('_id')){
    const {status,_id} = req.body
    const candidate = await User.findOneAndUpdate({_id: req.body._id}, {$set: {status: status}})
    res.json({ success: true })

  } else {
    const arr = req.body
    const arrayValues = Object.values(arr)
    arrayValues.forEach( async function (item) {
      const {status,_id} = item
      const candidate = await User.findOneAndUpdate({_id: _id}, {$set: {status: status}})
      res.json({ success: true })
    })
  }

})

router.delete('/', async (req, res) => {

  const {_id} = req.body
  const candidate = await User.findOneAndDelete({_id: req.body._id})
  res.json({ success: true })
})

module.exports = router