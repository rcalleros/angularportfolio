const PROXY_CONFIG = [
    {
        context: [
            "/sdk/js",
            "/payment",
            "/create",
            "/v1/oauth2/token",
            "/v2/checkout/orders"
        ],
        target: "https://api.sandbox.paypal.com",
        secure: true,
        changeOrigin:true,
        logLevel:'debug',
        pathRewrite: {
            "^/payment" : "https://www.paypal.com",
            "^/create" : "/v2/checkout/orders",
            "^/token" : "/v1/oauth2/token",
        }
    }
]
 
module.exports = PROXY_CONFIG;