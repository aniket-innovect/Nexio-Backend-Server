const axios = require('axios');

exports.saveCardOneTimeTokenApi = function (req, res, next) {
    try {
        console.log('saveCardOneTimeTokenApi request', req);
        let dataObj = {
            data: req.body.data,
            processingOptions: req.body.processingOptions
        }
        let reqHeaders = {
            accept: "application/json",
            "content-type": "application/json",
            authorization: req.headers.authorization,
        }
        const options = {
            method: req.method,
            headers: reqHeaders,
            url: req.body.url,
            body: dataObj
        };
        console.log("options", options);
        axios(options).then(function (response) {
            console.log("response", response);
            res.send(response.data);
        })
            .catch(function (error) {
                if (error && error.response && error.response.data) {
                    res.status(error.response.status).send({ error: true, message: `${error.response.data.errorMessage}` });
                } else {
                    res.status(500).send({ error: true, message: `${error.message}` });
                    console.log('error', error)
                }
            })
            .finally(function () {
                // always executed
            });
    } catch (err) {
        res.status(500).send({ error: true, message: `Something went wrong: ${error.message}` });
    }
}

exports.saveCardTokenApi = function (req, res, next) {
    try {
        console.log('saveCardTokenApi request', req);
        let dataObj = {
            card: req.body.card,
            data: req.body.data,
            shouldUpdateCard: req.body.shouldUpdateCard,
            merchantId: req.body.merchantId,
            token: req.body.token
        }
        let reqHeaders = {
            accept: "application/json",
            "content-type": "application/json",
            authorization: req.headers.authorization,
        }
        const options = {
            method: req.method,
            // headers: req.headers, //check
            headers: reqHeaders,
            url: req.body.url,
            data: dataObj
        };
        console.log("options", options);
        axios(options).then(function (response) {
            console.log("response", response);
            res.send(response.data);
        })
            .catch(function (error) {
                if (error && error.response && error.response.data) {
                    res.status(error.response.status).send({ error: true, message: `${error.response.data.errorMessage}` });
                } else {
                    res.status(500).send({ error: true, message: `${error.message}` });
                    console.log('error', error)
                }
            })
            .finally(function () {
                // always executed
            });
    } catch (err) {
        res.status(500).send({ error: true, message: `Something went wrong: ${error.message}` });
    }
}

exports.cardTransactionApi = function (req, res, next) {
    try {
        console.log('saveCardTokenApi request', req);
        // let dataObj = {
        //     card: req.body.card,
        //     data: req.body.data,
        //     shouldUpdateCard: req.body.shouldUpdateCard,
        //     merchantId: req.body.merchantId,
        //     token: req.body.token
        // }
        let reqHeaders = {
            accept: "application/json",
            "content-type": "application/json",
            authorization: req.headers.authorization,
        }
        const options = {
            method: req.method,
            // headers: req.headers, //check
            headers: reqHeaders,
            url: req.body.url,
            data: req.body.data
        };
        console.log("options", options);
        axios(options).then(function (response) {
            console.log("response", response);
            res.send(response.data);
        })
            .catch(function (error) {
                if (error && error.response && error.response.data) {
                    res.status(error.response.status).send({ error: true, message: `${error.response.data.errorMessage}` });
                } else {
                    res.status(500).send({ error: true, message: `${error.message}` });
                    console.log('error', error)
                }
            })
            .finally(function () {
                // always executed
            });
    } catch (err) {
        res.status(500).send({ error: true, message: `Something went wrong: ${error.message}` });
    }
}

exports.runCardOneTimeIFrameTokenApi = function (req, res, next) {
    try {
        console.log('runCardOneTimeIFrameTokenApi request', req);
        let dataObj = {
            data: req.body.data,
            processingOptions: req.body.processingOptions,
            uiOptions: req.body.uiOptions,
            isAuthOnly: req.body.isAuthOnly,
            shouldUpdateCard: req.body.shouldUpdateCard
        }
        let reqHeaders = {
            accept: "application/json",
            "content-type": "application/json",
            authorization: req.headers.authorization,
        }
        const options = {
            method: req.method,
            headers: reqHeaders,
            url: req.body.url,
            data: dataObj
            // data: {"data":{"currency":"USD","amount":29.99},"processingOptions":{"checkFraud":true,"verboseResponse":false,"verifyAvs":0,"verifyCvc":false,"check3ds":false,"saveCardToken":true,"retryOnSoftDecline":false,"shouldUseFingerprint":true},"shouldUpdateCard":true,"uiOptions":{"displaySubmitButton":false,"hideBilling":{"hideAddressOne":false,"hideAddressTwo":false,"hideCity":false,"hideCountry":false,"hidePostal":false,"hidePhone":true,"hideState":false},"hideCvc":false,"requireCvc":true,"forceExpirationSelection":true},"isAuthOnly":false}
        };
        console.log("data object is = ", dataObj);
        // dataObj.data.customFields = {};
        // dataObj.data.customer = {};
        console.log("options", options);
        axios(options).then(function (response) {
            console.log("response", response);
            res.send(response.data);
        })
            .catch(function (error) {
                if (error && error.response && error.response.data) {
                    res.status(error.response.status).send({ error: true, message: `${error.response.data.errorMessage}` });
                } else {
                    res.status(500).send({ error: true, message: `${error.message}` });
                    console.log('error', error)
                }
            })
            .finally(function () {
                // always executed
            });
    } catch (err) {
        res.status(500).send({ error: true, message: `Something went wrong: ${error.message}` });
    }
}