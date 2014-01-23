#!/usr/bin/python
# -*- coding: utf-8 -*-

import requests

def login():
	print "Enter Your Login Data For PhoneGap Build Service"
	u = raw_input("Your F@(king Email : ")
	while true:
		if u == "":
			u = raw_input("Opss, blank input . email bitch plz : ")
		else:
			break
	p = raw_input("Your F@(king Password : ")
	while true:
		if p == "":
			p = raw_input("Opss, blank input . password bitch plz : ")
		else:
			break
	x = requests.get('https://build.phonegap.com/api/v1/me', auth=(u, p))
	if (x.status_code == 200):
		return True
	elif x.status_code == 401:
		return False
