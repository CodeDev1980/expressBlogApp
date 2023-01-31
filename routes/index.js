const router = require('express').Router();

const homeController = require('../controllers/homePage');
const newUserController = require('../controllers/newUser');
const storeUserController = require('../controllers/storeUser');
const loginUserController = require('../controllers/loginUser');
const logoutController = require('../controllers/logout');
const newPostController = require('../controllers/newPost');
const storePostController = require('../controllers/storePost');
const blogsController = require('../controllers/blogsPage');
const postController = require('../controllers/singlePost');
const deletePostController = require('../controllers/deltePost');
const technologyController = require('../controllers/techPage');

router.get('/', homeController);
router.get('/account', newUserController)
router.post('/store/user', storeUserController);
router.post('/login/user', loginUserController);
router.get('/logout/user', logoutController);
router.get('/create', newPostController);
router.post('/store/post', storePostController);
router.get('/blogs', blogsController);
router.get('/post/:id', postController);
router.get('/delete/post/:id', deletePostController);
router.get('/technology', technologyController)

module.exports = router;