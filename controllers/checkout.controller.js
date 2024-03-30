const checkoutService = require('../services/checkout.service')

exports.checkoutProductController = async (req, res) => {
 
    const result = await checkoutService.createCheckout(req, res)
 
    return res.status(result.status).json(result)
}

exports.checkoutNotifikasiController = async (req, res) => {
 
    const result = await checkoutService.checkoutNotifikasi(req, res)
 
    return res.status(result.status).json(result)
}