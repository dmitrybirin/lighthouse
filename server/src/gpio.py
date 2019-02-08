import RPi.GPIO as GPIO
import time
import sys
from ServerExceptions import BadRequestException

from config import color_map, action_map

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

def get_pin_number(color):
	try:
		return color_map[color]
	except KeyError:
		available_colors = ','.join(color_map.keys())		
		raise BadRequestException('Color %s is unknown. Try to any of %s' % (color, available_colors))

def get_pin_action(action):
	try:
		return action_map[action]
	except KeyError:
		available_actions = ','.join(action_map.keys())	
		raise BadRequestException('Action %s is unknown. Try to any of %s' % (action, available_actions))

def get_colors():
	result_dict = dict()
	for color in color_map.keys():
		pin = color_map[color]
		result_dict[color]=get_pin_value(pin)
	return result_dict
			

def switch_pin(pin, pin_action):
	GPIO.setup(pin, GPIO.OUT)
	print("{} pin LED goes to {}".format(pin, pin_action))
	GPIO.output(pin, pin_action)

def get_pin_value(pin):
	GPIO.setup(pin, GPIO.OUT)
	return GPIO.input(pin)

def Flash(color, action):
	pin = get_pin_number(color)
	pin_action = get_pin_action(action)
	switch_pin(pin, pin_action)

def Status():
	return get_colors()
