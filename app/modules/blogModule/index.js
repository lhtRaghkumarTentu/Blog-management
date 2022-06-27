const constants =  require('../../common/constants');
const blogManager = require("./manager");
import Utils from  '../../utils';

module.exports = class controller {
    async createBlog(req,res){
        const [error, createBlog] = await Utils.parseResponse(new blogManager().createBlog(req.body));
        if (!createBlog) return Utils.handleError(error, req, res)
        return Utils.response(res, createBlog, constants.apiSuccessMessage.BLOG_CREATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async getBlogDetails(req,res){
        const [error, getBlogDetails] = await Utils.parseResponse(new blogManager().getBlogDetails(req.query));
        if (!getBlogDetails) return Utils.handleError(error, req, res)
        return Utils.response(res, getBlogDetails, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async getBlogList(req,res){
        const [error, getBlogList] = await Utils.parseResponse(new blogManager().getBlogList(req.body));
        if (!getBlogList) return Utils.handleError(error, req, res)
        return Utils.response(res, getBlogList, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS,  constants.httpConstants.RESPONSE_CODES.OK)
    }

    async updateBlog(req,res){
        const [error, updateBlog] = await Utils.parseResponse(new blogManager().updateBlog(req.body));
        if (!updateBlog) return Utils.handleError(error, req, res)
        return Utils.response(res, updateBlog, constants.apiSuccessMessage.BLOG_UPDATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async deleteBlog(req,res){
        const [error, deleteBlog] = await Utils.parseResponse(new blogManager().deleteBlog(req.query));
        if (!deleteBlog) return Utils.handleError(error, req, res)
        return Utils.response(res, deleteBlog, constants.apiSuccessMessage.BLOG_DELETE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }
}