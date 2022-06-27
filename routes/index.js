import { stringConstants } from "../app/common/constants";
import BlogModule from '../app/modules/blogModule';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.json';
const ValidationMiddleware = require('../middleware/validation');

module.exports = (app) => {

    /**
     * Swagger Ui presentation endPoint For All Api's
     */
    app.use('/swagger-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    /**
     * Status Check Api end point
     */
    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    /**
     * Blog management Api's
     */
    app.post('/blog/create', ValidationMiddleware.validateCreateBlog, new BlogModule().createBlog);
    app.get('/blog/list', new BlogModule().getBlogList);
    app.get('/blog/details', ValidationMiddleware.validateGetDetailsBlog, new BlogModule().getBlogDetails);
    app.put('/blog/update', ValidationMiddleware.validateUpdateBlog, new BlogModule().updateBlog);
    app.delete('/blog/delete', ValidationMiddleware.validateDeleteBlog, new BlogModule().deleteBlog);

};