'use strict';
const nexioService = require('../services/nexio-service');

exports.saveCardOneTimeTokenApi = function (req, res, next) {
    try {
        nexioService.saveCardOneTimeTokenApi(req, res, function
            (err, result) {
            if (err) {
                console.log(err);
                res.status(500).send({ error: true, message: 'Something went wrong' });
            }
            else {
                console.log(result);
                res.status(200).send(result);
            }

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true, message: 'Something went wrong' });
    }
}

exports.saveCardTokenApi = function (req, res, next) {
    try {
        nexioService.saveCardTokenApi(req, res, function
            (err, result) {
            if (err) {
                console.log(err);
                res.status(500).send({ error: true, message: 'Something went wrong' });
            }
            else {
                console.log(result);
                res.status(200).send(result);
            }

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true, message: 'Something went wrong' });
    }
}

exports.cardTransactionApi = function (req, res, next) {
    try {
        nexioService.cardTransactionApi(req, res, function
            (err, result) {
            if (err) {
                console.log(err);
                res.status(500).send({ error: true, message: 'Something went wrong' });
            }
            else {
                console.log(result);
                res.status(200).send(result);
            }

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true, message: 'Something went wrong' });
    }
}

exports.runCardOneTimeIFrameTokenApi = function (req, res, next) {
    try {
        nexioService.runCardOneTimeIFrameTokenApi(req, res, function
            (err, result) {
            if (err) {
                console.log(err);
                res.status(500).send({ error: true, message: 'Something went wrong' });
            }
            else {
                console.log(result);
                res.status(200).send(result);
            }

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true, message: 'Something went wrong' });
    }
}