#!/usr/bin/python
# -*- coding: utf-8 -*-
# http://www.javascriptformat.com/#jsondataurllabel
import requests ,json

u = "s"
p = ""

r = requests.post('https://build.phonegap.com/token', auth=(u, p))
x = requests.get('https://build.phonegap.com/api/v1/me', auth=(u, p))
print x.status_code

if(x.status_code == 200):
	n = x.json()
	for i in n['apps']:
		print i['private']
elif x.status_code == 401:
	print x.json()

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