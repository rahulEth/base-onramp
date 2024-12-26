
const validateParams = (req, res, next)=>{
    const { 
        purchase_currency,
        purchase_network, 
        payment_amount, 
        payment_currency,
        payment_method,
        country, 
        subdivision
    } = req.body;
    if (!purchase_currency || purchase_currency.trim() === '') {
       return res.status(400).json({
        status: "error",
        message: "Invalid or missing parameter: purchase_currency",
        error: {
          code: "INVALID_PARAMETER",
          details: "The 'purchase_currency' parameter is required and cannot be an empty string."
        }
      });
    }

    if (!purchase_network || purchase_network.trim() === '') {
      return res.status(400).json({
       status: "error",
       message: "Invalid or missing parameter: purchase_network",
       error: {
         code: "INVALID_PARAMETER",
         details: "The 'purchase_network' parameter is required and cannot be an empty string."
       }
     });
    }   
    
    if (!payment_amount || payment_amount.trim() === '') {
        return res.status(400).json({
         status: "error",
         message: "Invalid or missing parameter: payment_amount",
         error: {
           code: "INVALID_PARAMETER",
           details: "The 'payment_amount' parameter is required and cannot be an empty string."
         }
       });
    } 

    if (!payment_currency || payment_currency.trim() === '') {
        return res.status(400).json({
            status: "error",
            message: "Invalid or missing parameter: payment_currency",
            error: {
            code: "INVALID_PARAMETER",
            details: "The 'payment_currency' parameter is required and cannot be an empty string."
            }
        });
    } 

    if (!payment_method || payment_method.trim() === '') {
        return res.status(400).json({
            status: "error",
            message: "Invalid or missing parameter: payment_method",
            error: {
            code: "INVALID_PARAMETER",
            details: "The 'payment_method' parameter is required and cannot be an empty string."
            }
        });
    } 

    if (!country || country.trim() === '') {
        return res.status(400).json({
            status: "error",
            message: "Invalid or missing parameter: country",
            error: {
            code: "INVALID_PARAMETER",
            details: "The 'country' parameter is required and cannot be an empty string."
            }
        });
    } 

    if (!subdivision || subdivision.trim() === '') {
        return res.status(400).json({
            status: "error",
            message: "Invalid or missing parameter: pusubdivisionrchase_network",
            error: {
            code: "INVALID_PARAMETER",
            details: "The 'subdivision' parameter is required and cannot be an empty string."
            }
        });
    } 
    next();
}

module.exports= validateParams;