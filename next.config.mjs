

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "res.cloudinary.com",
            "pixelplex.io",
            "www.singlegrain.com"
        ]
    },
    sassOptions: {
        includePaths: ['./styles'],
        additionalData: `@import "variables.scss";`
      }
};

export default nextConfig;
