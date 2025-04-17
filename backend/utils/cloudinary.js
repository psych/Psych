const v2 = require('cloudinary') 
const cloudinary = v2.v2

console.log(cloudinary)

const uploadOnCloudinary = async (localFilePath) => {
    
    // Configuration
    cloudinary.config({ 
        cloud_name: 'atharwa23', 
        api_key: '733362231616883', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });

     // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(localFilePath,
        {
            resource_type: "image",
        }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    return uploadResult;
    
    // // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url('shoes', {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });
    
    // console.log(optimizeUrl);
    
    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url('shoes', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });
    
    // console.log(autoCropUrl);    
}

export default uploadOnCloudinary