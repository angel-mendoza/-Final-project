const express = require('express');
const router = express.Router();
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


router.post('/sign_up', (req , res, next)=>{
	var newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});
	User.addUser(newUser, (err, user)=>{
	 	if(!err){
	 		res.json({success: true, msg: "users registered"});
	 		
	 	}else{
	 		res.json({success: false, msg: "fail to register users"});
	 	}
	 });
});

router.post('/sign_in', (req , res, next)=>{
 	const username = req.body.username;
 	const password = req.body.password;

 	User.getUserByUsername(username,(err, user)=>{
 		if (err) {
 			console.log(err);
 		}
 		if (!user) {
 			return res.json({success: false, msg: "users not found"});
 		}
 		User.comparePassword(password, user.password, (err, isMatch)=>{
	 		if (err) {
	 			console.log(err);
	 		}
	 		if (isMatch) {
	 			const token = jwt.sign(user, config.secret, {
	 				expiresIn: 604800//una semana
	 			});
	 			res.json({
	 				success:true,
	 				token: 'JWT '+token,
	 				user:{
	 					id: user._id,
	 					name: user.name,
	 					usernamer: user.usernamer,
	 					email: user.email
	 				}
	 			});
	 		}else{
	 			return res.json({success: false, msg: "Wrong password"});
	 		}
 		});
 	});
});


router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res, next)=>{
 	res.json({user: req.user});
 });



module.exports = router;