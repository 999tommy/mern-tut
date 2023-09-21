const express = require('express')
const router = express.Router()
const { getGoal, setGoal, UpdateGoal, deleteGoal } = require('../controllers/goalcontroller')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).post(UpdateGoal)

router.get('/', getGoal)

router.post('/', setGoal)

router.put('/:id', UpdateGoal)

router.delete('/:id', deleteGoal)


module.exports = router 
