const express = require('express')
const router = express.Router()
const { getGoal, setGoal, UpdateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).put(UpdateGoal)


module.exports = router 
