const Router = require('koa-router')

const ArticleController = require('../controllers/article')

const router = new Router({
  prefix: '/api/v1'
})

router.post('/article/create', ArticleController.create)

router.get('/article/:id', ArticleController.detail)

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
