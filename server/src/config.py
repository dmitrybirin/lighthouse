import RPi.GPIO as GPIO

color_map = {
	"blue":14,
	"green":15,
	"red":18
}

action_map = {
	"on": GPIO.HIGH,
	"off": GPIO.LOW
}