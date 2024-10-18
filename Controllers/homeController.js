

const getHomes = (req,res,next) =>{
    res.status(200).json({ success: true, msg: "Show the homes-kmite"});
}

const getHomeId = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `get the home-kmite ${req.params.id}`});
}

const createHome = (req,res,next) =>{
    res.status(200).json({ success: true, msg: "Create the home-kmite"});
}

const updateHomeId = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `update the home-kmite ${req.params.id}`});
}

const deleteHomeId = (req,res,next) =>{
    res.status(200).json({ success: true, msg: `delete the home-kmite ${req.params.id}`});
}


module.exports = {
    getHomes,
    getHomeId,
    createHome,
    updateHomeId,
    deleteHomeId
};