"use strict";
import { Router } from 'express';
// var Test = require("../utils/test");
import {Test} from "../utils/test";
var router = Router();


async function test() {
	return "1";
}
/* GET home page. */
router.get('/', async function (req, res, next) {
	let aaa = await test();
	let bbb = (new Test()).plus(1, 2);
	res.render('index', { title: `Express ${aaa} ${bbb}` });
});


module.exports = router;
