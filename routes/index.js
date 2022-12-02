import express from 'express'

const lineNotify = require('line-notify-nodejs')('Wf7B7rkOeWsJRDe6uFyc0FDtDG2Ri4XVaQ7uwBvsbLg');

const router = express.Router()


router.get('/api', (req, res) => {
    res.send('Welcome to notify')
})

router.post('/', (req, res, next) => {   
    const message = req.body.message
    console.log(message)
    lineNotify.notify({
        message: message,
      }).then(() => {
       // console.log('send completed!');
        res.send('send completed')
      });

   
})


export { router }