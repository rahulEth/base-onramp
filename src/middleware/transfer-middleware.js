
const validateParams = (req, res, next)=>{
    const { toAddr, amount } = req.body;
    if (!toAddr || toAddr.trim() === '') {
       return res.status(400).json({
        status: "error",
        message: "Invalid or missing parameter: toAddr",
        error: {
          code: "INVALID_PARAMETER",
          details: "The 'toAddr' parameter is required and cannot be an empty string."
        }
      });
    }

    if (!amount || amount.trim() === '') {
      return res.status(400).json({
       status: "error",
       message: "Invalid or missing parameter: amount",
       error: {
         code: "INVALID_PARAMETER",
         details: "The 'amount' parameter is required and cannot be an empty string."
       }
     });
   }    
    next();
}

module.exports= validateParams;