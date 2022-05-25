
npx sequelize model:create --name Comic --attributes title:string,price:integer,genre:string,author:string,isbn:string,totalPage:integer,publisher:string,stock:integer,imgurl:string

npx sequelize model:create --name Profile --attributes firstName:string,lastName:string,phoneNumber:string,address:string

npx sequelize model:create --name User --attributes email:string,password:string,role:string

npx sequelize model:create --name Transaction --attributes transactionNumber:string,dateTransaction:date,price:integer