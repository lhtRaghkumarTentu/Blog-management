const constants = require('../../common/constants');
const blogModel = require('../../models/blog');
import Utils from  '../../utils';

module.exports = class Manager {
    createBlog = async(requestData) =>{
        const blog = new blogModel(requestData);
        await blog.save();
        if(!blog) return Utils.returnRejection(constants.apiFailureMessage.CREATE_BLOG_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST);
        return blog;
    }

    getBlogDetails = async(requestData)=>{
        const blogDetails =  await blogModel.findById({_id:requestData.id});
        if(!blogDetails) return Utils.returnRejection(constants.apiFailureMessage.FETCH_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return blogDetails;
    }

    getBlogList = async () =>{
        const blogList = await blogModel.find()
        if(!blogList) return Utils.returnRejection(constants.apiFailureMessage.GET_BLOG_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return blogList;
    }

    updateBlog = async (requestData) =>{
        return await blogModel.findOneAndUpdate({_id:requestData.id}, requestData).catch((err)=>{
            return Utils.returnRejection(err.message, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        })
    }

    deleteBlog = async(requestData)=>{
        return await blogModel.findOneAndDelete({_id:requestData.id}).catch((err)=>{
            return Utils.returnRejection(err.message, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        })
    }
}   