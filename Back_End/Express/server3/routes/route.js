import exprss from 'express';
import { storeDataControler } from '../controllers/storeDataControler.js'

const route = exprss.Router()

// Api Link 
// http://localhost5000/api/storeData/endLink

route.post('/endLink', storeDataControler)

export default route;


