const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:path.join(__dirname,'/src/index.js'),
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"index_handle.js"
    },
   
    module:{
        
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: ['raw-loader']
           
            },
             
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
           
            },
           {
               test:/\.css$/,
               exclude:/node_modules/,
               use:['css-loader','style-loader']
           },
         
        //    {
        //        test:/\.html$/,
        //        exclude:/node_modules/,
        //        use:['html-loader']
        //    }
        ]
        
    },
    plugins: [   new HtmlWebpackPlugin({
                template:path.join(__dirname,'/src/index.html'),
            })
        ]
    
}