const authenticate = (req,res)=>{
    if(1 === 1){
        res.send('welcome admin')
    }
    else{
        res.status(401).send('unauthorized');
    }
};



module.exports=authenticate;